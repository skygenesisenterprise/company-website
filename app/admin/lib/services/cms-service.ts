/**
 * CMS Service
 * 
 * Service for managing CMS content (blog posts, job postings, etc.)
 * Communicates with the backend API
 */

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  coverImage?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  publishedAt?: string;
  scheduledAt?: string;
  views: number;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
}

export interface JobPosting {
  id: string;
  title: string;
  slug: string;
  department: string;
  location: string;
  type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'REMOTE';
  experience?: string;
  salary?: string;
  description: string;
  requirements?: string;
  benefits?: string;
  status: 'OPEN' | 'CLOSED' | 'DRAFT' | 'PAUSED';
  priority: 'LOW' | 'NORMAL' | 'HIGH' | 'URGENT';
  publishedAt?: string;
  closesAt?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
  };
}

export interface DashboardStats {
  blogPosts: {
    total: number;
    published: number;
    drafts: number;
  };
  jobPostings: {
    total: number;
    open: number;
    closed: number;
  };
  whitepapers: number;
  guides: number;
  changelogs: number;
  users: number;
}

export interface Changelog {
  id: string;
  title: string;
  description?: string;
  version: string;
  type: 'MAJOR' | 'MINOR' | 'PATCH';
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
  };
  changes: Array<{
    id: string;
    type: 'ADDED' | 'IMPROVED' | 'FIXED' | 'REMOVED' | 'DEPRECATED' | 'SECURITY';
    description: string;
    order: number;
  }>;
}

export interface Guide {
  id: string;
  title: string;
  slug: string;
  path: string;
  category: string;
  content: string;
  order: number;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
}

export interface Whitepaper {
  id: string;
  title: string;
  slug: string;
  abstract?: string;
  category: string;
  version: string;
  fileUrl?: string;
  fileSize?: number;
  fileType?: string;
  status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  author: {
    id: string;
    firstName?: string;
    lastName?: string;
    email: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  seo?: {
    title?: string;
    description?: string;
    keywords?: string;
    ogImage?: string;
  };
}

export interface PaginationInfo {
  page: number;
  limit: number;
  total: number;
  pages: number;
}

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

class CmsService {
  private baseUrl: string;
  private authToken: string | null = null;

  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api/v1';
    this.initializeFromStorage();
  }

  /**
   * Initialize auth token from localStorage
   */
  private initializeFromStorage(): void {
    if (typeof window !== 'undefined') {
      this.authToken = localStorage.getItem('authToken');
    }
  }

  /**
   * Set authentication token
   */
  setAuthToken(token: string): void {
    this.authToken = token;
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  /**
   * Get authentication headers
   */
  private getHeaders(): Record<string, string> {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }

    return headers;
  }

  /**
   * Make HTTP request to API
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${this.baseUrl}/cms${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getHeaders(),
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          error: data.error || 'Request failed',
          data: data as T
        };
      }

      return {
        success: true,
        data: data as T
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        data: {} as T
      };
    }
  }

  // ======================================
  // DASHBOARD ENDPOINTS
  // ======================================

  /**
   * Get dashboard statistics
   */
  async getDashboardStats(): Promise<ApiResponse<{ stats: DashboardStats; recentContent: BlogPost[] }>> {
    return this.request('/dashboard/stats');
  }

  // ======================================
  // BLOG POSTS ENDPOINTS
  // ======================================

  /**
   * Get blog posts with pagination and filtering
   */
  async getBlogPosts(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
  } = {}): Promise<ApiResponse<{ posts: BlogPost[]; pagination: PaginationInfo }>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set('page', params.page.toString());
    if (params.limit) searchParams.set('limit', params.limit.toString());
    if (params.search) searchParams.set('search', params.search);
    if (params.status) searchParams.set('status', params.status);

    const query = searchParams.toString();
    return this.request(`/blog/posts${query ? `?${query}` : ''}`);
  }

  /**
   * Get blog post by ID
   */
  async getBlogPostById(id: string): Promise<ApiResponse<{ post: BlogPost }>> {
    return this.request(`/blog/posts/${id}`);
  }

  /**
   * Create new blog post
   */
  async createBlogPost(postData: {
    title: string;
    content: string;
    excerpt?: string;
    coverImage?: string;
    status?: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
    tags?: string[];
    seo?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogImage?: string;
    };
  }): Promise<ApiResponse<{ post: BlogPost }>> {
    return this.request('/blog/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
    });
  }

  /**
   * Update blog post
   */
  async updateBlogPost(id: string, postData: Partial<{
    title: string;
    content: string;
    excerpt: string;
    coverImage: string;
    status: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
    tags: string[];
    seo?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogImage?: string;
    };
  }>): Promise<ApiResponse<{ post: BlogPost }>> {
    return this.request(`/blog/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postData),
    });
  }

  /**
   * Delete blog post
   */
  async deleteBlogPost(id: string): Promise<ApiResponse<Record<string, never>>> {
    return this.request(`/blog/posts/${id}`, {
      method: 'DELETE',
    });
  }

  // ======================================
  // JOB POSTINGS ENDPOINTS
  // ======================================

  /**
   * Get job postings with pagination and filtering
   */
  async getJobPostings(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    department?: string;
  } = {}): Promise<ApiResponse<{ postings: JobPosting[]; pagination: PaginationInfo }>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set('page', params.page.toString());
    if (params.limit) searchParams.set('limit', params.limit.toString());
    if (params.search) searchParams.set('search', params.search);
    if (params.status) searchParams.set('status', params.status);
    if (params.department) searchParams.set('department', params.department);

    const query = searchParams.toString();
    return this.request(`/jobs/postings${query ? `?${query}` : ''}`);
  }

  /**
   * Create new job posting
   */
  async createJobPosting(postingData: {
    title: string;
    description: string;
    requirements?: string;
    benefits?: string;
    department: string;
    location: string;
    type: 'FULL_TIME' | 'PART_TIME' | 'CONTRACT' | 'INTERNSHIP' | 'REMOTE';
    experience?: string;
    salary?: string;
    status?: 'OPEN' | 'CLOSED' | 'DRAFT' | 'PAUSED';
  }): Promise<ApiResponse<{ posting: JobPosting }>> {
    return this.request('/jobs/postings', {
      method: 'POST',
      body: JSON.stringify(postingData),
    });
  }

  /**
   * Update job posting
   */
  async updateJobPosting(id: string, postingData: Partial<JobPosting>): Promise<ApiResponse<{ posting: JobPosting }>> {
    return this.request(`/jobs/postings/${id}`, {
      method: 'PUT',
      body: JSON.stringify(postingData),
    });
  }

  /**
   * Delete job posting
   */
  async deleteJobPosting(id: string): Promise<ApiResponse<Record<string, never>>> {
    return this.request(`/jobs/postings/${id}`, {
      method: 'DELETE',
    });
  }

  // ======================================
  // CHANGELOGS ENDPOINTS
  // ======================================

  /**
   * Get changelogs with pagination and filtering
   */
  async getChangelogs(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
  } = {}): Promise<ApiResponse<{ changelogs: Changelog[]; pagination: PaginationInfo }>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set('page', params.page.toString());
    if (params.limit) searchParams.set('limit', params.limit.toString());
    if (params.search) searchParams.set('search', params.search);
    if (params.status) searchParams.set('status', params.status);

    const query = searchParams.toString();
    return this.request(`/changelogs${query ? `?${query}` : ''}`);
  }

  /**
   * Create new changelog
   */
  async createChangelog(changelogData: {
    title: string;
    description?: string;
    version: string;
    type?: 'MAJOR' | 'MINOR' | 'PATCH';
    status?: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
    changes?: Array<{
      type: 'ADDED' | 'IMPROVED' | 'FIXED' | 'REMOVED' | 'DEPRECATED' | 'SECURITY';
      description: string;
      order?: number;
    }>;
    seo?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogImage?: string;
    };
  }): Promise<ApiResponse<{ changelog: Changelog }>> {
    return this.request('/changelogs', {
      method: 'POST',
      body: JSON.stringify(changelogData),
    });
  }

  // ======================================
  // GUIDES ENDPOINTS
  // ======================================

  /**
   * Get guides with pagination and filtering
   */
  async getGuides(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    category?: string;
  } = {}): Promise<ApiResponse<{ guides: Guide[]; pagination: PaginationInfo }>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set('page', params.page.toString());
    if (params.limit) searchParams.set('limit', params.limit.toString());
    if (params.search) searchParams.set('search', params.search);
    if (params.status) searchParams.set('status', params.status);
    if (params.category) searchParams.set('category', params.category);

    const query = searchParams.toString();
    return this.request(`/guides${query ? `?${query}` : ''}`);
  }

  /**
   * Create new guide
   */
  async createGuide(guideData: {
    title: string;
    content: string;
    path: string;
    category: string;
    order?: number;
    status?: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
    tags?: string[];
    seo?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogImage?: string;
    };
  }): Promise<ApiResponse<{ guide: Guide }>> {
    return this.request('/guides', {
      method: 'POST',
      body: JSON.stringify(guideData),
    });
  }

  // ======================================
  // WHITEPAPERS ENDPOINTS
  // ======================================

  /**
   * Get whitepapers with pagination and filtering
   */
  async getWhitepapers(params: {
    page?: number;
    limit?: number;
    search?: string;
    status?: string;
    category?: string;
  } = {}): Promise<ApiResponse<{ whitepapers: Whitepaper[]; pagination: PaginationInfo }>> {
    const searchParams = new URLSearchParams();
    if (params.page) searchParams.set('page', params.page.toString());
    if (params.limit) searchParams.set('limit', params.limit.toString());
    if (params.search) searchParams.set('search', params.search);
    if (params.status) searchParams.set('status', params.status);
    if (params.category) searchParams.set('category', params.category);

    const query = searchParams.toString();
    return this.request(`/whitepapers${query ? `?${query}` : ''}`);
  }

  /**
   * Create new whitepaper
   */
  async createWhitepaper(whitepaperData: {
    title: string;
    abstract?: string;
    category: string;
    version?: string;
    fileUrl?: string;
    fileSize?: number;
    fileType?: string;
    status?: 'DRAFT' | 'PUBLISHED' | 'SCHEDULED' | 'ARCHIVED';
    tags?: string[];
    seo?: {
      title?: string;
      description?: string;
      keywords?: string;
      ogImage?: string;
    };
  }): Promise<ApiResponse<{ whitepaper: Whitepaper }>> {
    return this.request('/whitepapers', {
      method: 'POST',
      body: JSON.stringify(whitepaperData),
    });
  }
}

// Create singleton instance
export const cmsService = new CmsService();

// Export types and service
export type { CmsService };