import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Blog Posts Controllers
const getBlogPosts = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search, status } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: 'insensitive' } },
        { excerpt: { contains: search as string, mode: 'insensitive' } },
        { content: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    if (status && status !== 'all') {
      where.status = status;
    }

    const [posts, total] = await Promise.all([
      prisma.blogPost.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          },
          tags: {
            include: {
              tag: true
            }
          }
        }
      }),
      prisma.blogPost.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        posts,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch blog posts'
    });
  }
};

const getBlogPostById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const post = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        },
        seo: true
      }
    });

    if (!post) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }

    res.json({
      success: true,
      data: { post }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch blog post'
    });
  }
};

const createBlogPost = async (req: Request, res: Response) => {
  try {
    const { title, content, excerpt, coverImage, status = 'DRAFT', tags, seo } = req.body;
    const authorId = (req as Request & { user?: { id: string } }).user?.id;

    if (!authorId) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
    }

    const createdPost = await prisma.blogPost.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        content,
        excerpt,
        coverImage,
        status,
        authorId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      }
    });

    // Handle tags if provided
    if (tags && tags.length > 0) {
      for (const tagName of tags) {
        const tag = await prisma.tag.upsert({
          where: { name: tagName },
          update: {},
          create: { 
            name: tagName,
            slug: tagName.toLowerCase().replace(/\s+/g, '-')
          }
        });

        await prisma.blogPostTag.create({
          data: {
            postId: createdPost.id,
            tagId: tag.id
          }
        });
      }
    }

    // Handle SEO if provided
    if (seo) {
      await prisma.seoMeta.create({
        data: {
          ...seo,
          blogPostId: createdPost.id
        }
      });
    }

    const fullPost = await prisma.blogPost.findUnique({
      where: { id: createdPost.id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        },
        seo: true
      }
    });

    res.status(201).json({
      success: true,
      data: { post: fullPost },
      message: 'Blog post created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create blog post'
    });
  }
};

const updateBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, content, excerpt, coverImage, status, tags, seo } = req.body;

    const existingPost = await prisma.blogPost.findUnique({
      where: { id }
    });

    if (!existingPost) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }

    const updateData: {
      title?: string;
      content?: string;
      excerpt?: string;
      coverImage?: string;
      status?: string;
      publishedAt?: Date;
    } = {
      title,
      content,
      excerpt,
      coverImage,
      status
    };

    if (status === 'PUBLISHED' && existingPost.status !== 'PUBLISHED') {
      updateData.publishedAt = new Date();
    }

    await prisma.blogPost.update({
      where: { id },
      data: updateData
    });

    // Update tags if provided
    if (tags !== undefined) {
      // Remove existing tags
      await prisma.blogPostTag.deleteMany({
        where: { postId: id }
      });

      // Add new tags
      for (const tagName of tags) {
        const tag = await prisma.tag.upsert({
          where: { name: tagName },
          update: {},
          create: { 
            name: tagName,
            slug: tagName.toLowerCase().replace(/\s+/g, '-')
          }
        });

        await prisma.blogPostTag.create({
          data: {
            postId: id,
            tagId: tag.id
          }
        });
      }
    }

    // Update SEO if provided
    if (seo) {
      await prisma.seoMeta.upsert({
        where: { blogPostId: id },
        update: seo,
        create: {
          ...seo,
          blogPostId: id
        }
      });
    }

    const fullPost = await prisma.blogPost.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        },
        tags: {
          include: {
            tag: true
          }
        },
        seo: true
      }
    });

    res.json({
      success: true,
      data: { post: fullPost },
      message: 'Blog post updated successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update blog post'
    });
  }
};

const deleteBlogPost = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const existingPost = await prisma.blogPost.findUnique({
      where: { id }
    });

    if (!existingPost) {
      return res.status(404).json({
        success: false,
        error: 'Blog post not found'
      });
    }

    await prisma.blogPost.delete({
      where: { id }
    });

    res.json({
      success: true,
      message: 'Blog post deleted successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to delete blog post'
    });
  }
};

// Job Postings Controllers
const getJobPostings = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search, status, department } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: 'insensitive' } },
        { description: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    if (status && status !== 'all') {
      where.status = status;
    }

    if (department && department !== 'all') {
      where.department = department;
    }

    const [postings, total] = await Promise.all([
      prisma.jobPosting.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }),
      prisma.jobPosting.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        postings,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch job postings'
    });
  }
};

const createJobPosting = async (req: Request, res: Response) => {
  try {
    const { 
      title, 
      description, 
      requirements, 
      benefits, 
      department, 
      location, 
      type, 
      experience, 
      salary, 
      status = 'OPEN' 
    } = req.body;
    const authorId = (req as Request & { user?: { id: string } }).user?.id;

    if (!authorId) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
    }

    const posting = await prisma.jobPosting.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        description,
        requirements,
        benefits,
        department,
        location,
        type,
        experience,
        salary,
        status,
        authorId,
        publishedAt: status === 'OPEN' ? new Date() : null
      }
    });

    const fullPosting = await prisma.jobPosting.findUnique({
      where: { id: posting.id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      data: { posting: fullPosting },
      message: 'Job posting created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create job posting'
    });
  }
};

// Dashboard Stats Controller
const getDashboardStats = async (req: Request, res: Response) => {
  try {
    const [
      totalBlogPosts,
      publishedBlogPosts,
      totalJobPostings,
      openJobPostings,
      totalWhitepapers,
      totalGuides,
      totalChangelogs,
      totalUsers,
      recentPosts
    ] = await Promise.all([
      prisma.blogPost.count(),
      prisma.blogPost.count({ where: { status: 'PUBLISHED' } }),
      prisma.jobPosting.count(),
      prisma.jobPosting.count({ where: { status: 'OPEN' } }),
      prisma.whitepaper.count(),
      prisma.developerGuide.count(),
      prisma.changelog.count(),
      prisma.user.count(),
      prisma.blogPost.findMany({
        take: 5,
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              firstName: true,
              lastName: true
            }
          }
        }
      })
    ]);

    res.json({
      success: true,
      data: {
        stats: {
          blogPosts: {
            total: totalBlogPosts,
            published: publishedBlogPosts,
            drafts: totalBlogPosts - publishedBlogPosts
          },
          jobPostings: {
            total: totalJobPostings,
            open: openJobPostings,
            closed: totalJobPostings - openJobPostings
          },
          whitepapers: totalWhitepapers,
          guides: totalGuides,
          changelogs: totalChangelogs,
          users: totalUsers
        },
        recentContent: recentPosts
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch dashboard stats'
    });
  }
};

// Changelogs Controllers
const getChangelogs = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search, status } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: 'insensitive' } },
        { content: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    if (status && status !== 'all') {
      where.status = status;
    }

    const [changelogs, total] = await Promise.all([
      prisma.changelog.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }),
      prisma.changelog.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        changelogs,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch changelogs'
    });
  }
};

const createChangelog = async (req: Request, res: Response) => {
  try {
    const { title, description, version, status = 'DRAFT' } = req.body;
    const authorId = (req as Request & { user?: { id: string } }).user?.id;

    if (!authorId) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
    }

    const changelog = await prisma.changelog.create({
      data: {
        title,
        description,
        version,
        status,
        authorId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      }
    });

    const fullChangelog = await prisma.changelog.findUnique({
      where: { id: changelog.id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      data: { changelog: fullChangelog },
      message: 'Changelog created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create changelog'
    });
  }
};

// Guides Controllers
const getGuides = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search, category, level } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: 'insensitive' } },
        { content: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    if (category && category !== 'all') {
      where.category = category;
    }

    if (level && level !== 'all') {
      where.level = level;
    }

    const [guides, total] = await Promise.all([
      prisma.developerGuide.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }),
      prisma.developerGuide.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        guides,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch guides'
    });
  }
};

const createGuide = async (req: Request, res: Response) => {
  try {
    const { title, content, category, status = 'DRAFT' } = req.body;
    const authorId = (req as Request & { user?: { id: string } }).user?.id;

    if (!authorId) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
    }

    const guide = await prisma.developerGuide.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        path: `/guides/${title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '')}`,
        content,
        category,
        status,
        authorId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      }
    });

    const fullGuide = await prisma.developerGuide.findUnique({
      where: { id: guide.id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      data: { guide: fullGuide },
      message: 'Guide created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create guide'
    });
  }
};

// Whitepapers Controllers
const getWhitepapers = async (req: Request, res: Response) => {
  try {
    const { page = 1, limit = 10, search, category } = req.query;
    const skip = (Number(page) - 1) * Number(limit);

    const where: Record<string, unknown> = {};
    
    if (search) {
      where.OR = [
        { title: { contains: search as string, mode: 'insensitive' } },
        { content: { contains: search as string, mode: 'insensitive' } }
      ];
    }

    if (category && category !== 'all') {
      where.category = category;
    }

    const [whitepapers, total] = await Promise.all([
      prisma.whitepaper.findMany({
        where,
        skip,
        take: Number(limit),
        orderBy: { createdAt: 'desc' },
        include: {
          author: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
              email: true
            }
          }
        }
      }),
      prisma.whitepaper.count({ where })
    ]);

    res.json({
      success: true,
      data: {
        whitepapers,
        pagination: {
          page: Number(page),
          limit: Number(limit),
          total,
          pages: Math.ceil(total / Number(limit))
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch whitepapers'
    });
  }
};

const createWhitepaper = async (req: Request, res: Response) => {
  try {
    const { title, abstract, category, status = 'DRAFT' } = req.body;
    const authorId = (req as Request & { user?: { id: string } }).user?.id;

    if (!authorId) {
      return res.status(401).json({
        success: false,
        error: 'Authentication required'
      });
    }

    const whitepaper = await prisma.whitepaper.create({
      data: {
        title,
        slug: title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, ''),
        abstract,
        category,
        status,
        authorId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null
      }
    });

    const fullWhitepaper = await prisma.whitepaper.findUnique({
      where: { id: whitepaper.id },
      include: {
        author: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true
          }
        }
      }
    });

    res.status(201).json({
      success: true,
      data: { whitepaper: fullWhitepaper },
      message: 'Whitepaper created successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create whitepaper'
    });
  }
};

const cmsController = {
  // Blog Posts
  getBlogPosts,
  getBlogPostById,
  createBlogPost,
  updateBlogPost,
  deleteBlogPost,
  
  // Job Postings
  getJobPostings,
  createJobPosting,
  
  // Changelogs
  getChangelogs,
  createChangelog,
  
  // Guides
  getGuides,
  createGuide,
  
  // Whitepapers
  getWhitepapers,
  createWhitepaper,
  
  // Dashboard
  getDashboardStats
};

export default cmsController;