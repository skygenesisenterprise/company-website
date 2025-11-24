/**
 * Production Optimizations
 * 
 * Performance and security optimizations for production deployment
 */

import React from 'react';

// ======================================
// PERFORMANCE OPTIMIZATIONS
// ======================================

/**
 * Image optimization utilities
 */
export const imageOptimization = {
  /**
   * Generate responsive image sizes
   */
  generateResponsiveSizes: (originalUrl: string) => {
    const sizes = [384, 768, 1024, 1200, 1920];
    return sizes.map(width => ({
      width,
      height: Math.round(width * (9/16)), // Assuming 16:9 aspect ratio
      url: `${originalUrl}?w=${width}&q=80&f=webp`
    }));
  },

  /**
   * Generate low-QS placeholder
   */
  generatePlaceholder: (imageUrl: string) => {
    return `${imageUrl}?w=20&h=20&q=10&blur=10&f=webp`;
  }
};

/**
 * Content caching utilities
 */
export const cacheUtils = {
  /**
   * Cache duration for different content types
   */
  cacheDurations: {
    static: 31536000, // 1 year in seconds
    api: 300,        // 5 minutes in seconds
    images: 86400,   // 1 day in seconds
    content: 3600    // 1 hour in seconds
  },

  /**
   * Generate cache key
   */
  generateCacheKey: (prefix: string, params: Record<string, unknown>) => {
    const paramString = Object.keys(params)
      .sort()
      .map(key => `${key}:${params[key]}`)
      .join('|');
    return `${prefix}:${paramString}`;
  }
};

/**
 * Lazy load components
 */
export const bundleOptimization = {
  /**
   * Lazy load components
   */
  lazyLoad: <T extends React.ComponentType<unknown>>(
    importFunc: () => Promise<{ default: T }>
  ) => {
    return React.lazy(() => importFunc());
  },

  /**
   * Preload critical resources
   */
  preloadCritical: (resources: string[]) => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = resource.endsWith('.css') ? 'style' : 'script';
      document.head.appendChild(link);
    });
  }
};

// ======================================
// SECURITY OPTIMIZATIONS
// ======================================

/**
 * Security utilities
 */
export const securityUtils = {
  /**
   * Sanitize HTML content
   */
  sanitizeHtml: (html: string): string => {
    // Basic HTML sanitization - in production, use a proper library like DOMPurify
    const div = document.createElement('div');
    div.textContent = html;
    return div.innerHTML;
  },

  /**
   * Generate CSRF token
   */
  generateCSRFToken: (): string => {
    return Array.from(crypto.getRandomValues(new Uint8Array(32)))
      .map(b => b.toString(16).padStart(2, '0'))
      .join('');
  },

  /**
   * Validate file upload
   */
  validateFileUpload: (file: File, allowedTypes: string[], maxSize: number = 10 * 1024 * 1024) => {
    if (!allowedTypes.includes(file.type)) {
      return { valid: false, error: 'File type not allowed' };
    }
    
    if (file.size > maxSize) {
      return { valid: false, error: 'File size exceeds limit' };
    }
    
    return { valid: true };
  },

  /**
   * Rate limiting configuration
   */
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    maxRequests: 100,              // 100 requests per window
    skipSuccessfulRequests: false
  }
};

/**
 * Content Security Policy
 */
export const cspDirectives = {
  'default-src': ["'self'"],
  'script-src': ["'self'", "'unsafe-inline'"],
  'style-src': ["'self'", "'unsafe-inline'"],
  'img-src': ["'self'", "data:", "https:"],
  'font-src': ["'self'"],
  'connect-src': ["'self'", "https://api.skygenesis.com"],
  'frame-ancestors': ["'none'"],
  'base-uri': ["'self'"],
  'form-action': ["'self'"]
};

// ======================================
// MONITORING & ANALYTICS
// ======================================

/**
 * Performance monitoring
 */
export const performanceMonitoring = {
  /**
   * Track page load time
   */
  trackPageLoad: () => {
    if (typeof window !== 'undefined' && 'performance' in window) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.fetchStart,
        loadComplete: navigation.loadEventEnd - navigation.fetchStart,
        firstPaint: navigation.responseStart - navigation.fetchStart
      };
    }
    return null;
  },

  /**
   * Track Core Web Vitals
   */
  trackWebVitals: (metric: {
    name: string;
    value: number;
    id: string;
  }) => {
    // Send to analytics service
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/vitals', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: metric.name,
          value: metric.value,
          id: metric.id,
          url: window.location.href,
          timestamp: Date.now()
        })
      }).catch(console.error);
    }
  }
};

/**
 * Error tracking
 */
export const errorTracking = {
  /**
   * Track JavaScript errors
   */
  trackError: (error: Error, context?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: error.message,
          stack: error.stack,
          context,
          url: window.location.href,
          userAgent: navigator.userAgent,
          timestamp: Date.now()
        })
      }).catch(console.error);
    }
  },

  /**
   * Track API errors
   */
  trackAPIError: (endpoint: string, error: unknown, context?: Record<string, unknown>) => {
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/analytics/api-error', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          endpoint,
          error: error instanceof Error ? error.message : String(error),
          context,
          timestamp: Date.now()
        })
      }).catch(console.error);
    }
  }
};

// ======================================
// PRODUCTION CONFIGURATION
// ======================================

/**
 * Production environment configuration
 */
export const productionConfig = {
  /**
   * API endpoints
   */
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.skygenesis.com',
    timeout: 30000,
    retryAttempts: 3,
    retryDelay: 1000
  },

  /**
   * Feature flags
   */
  features: {
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    errorTracking: process.env.NEXT_PUBLIC_ENABLE_ERROR_TRACKING === 'true',
    performanceMonitoring: process.env.NEXT_PUBLIC_ENABLE_PERFORMANCE_MONITORING === 'true',
    offlineSupport: process.env.NEXT_PUBLIC_ENABLE_OFFLINE === 'true'
  },

  /**
   * CDN configuration
   */
  cdn: {
    baseUrl: process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.skygenesis.com',
    enabled: process.env.NODE_ENV === 'production'
  }
};

/**
 * Environment detection
 */
export const environment = {
  isProduction: process.env.NODE_ENV === 'production',
  isDevelopment: process.env.NODE_ENV === 'development',
  isTest: process.env.NODE_ENV === 'test',
  isBrowser: typeof window !== 'undefined',
  isServer: typeof window === 'undefined'
};

const productionOptimizations = {
  imageOptimization,
  cacheUtils,
  bundleOptimization,
  performanceMonitoring,
  errorTracking,
  environment
};

export default productionOptimizations;