/**
 * Site configuration
 * Centralizes all branding, URLs, and configurable site properties
 */

export interface SiteConfig {
  name: string;
  displayName: string;
  description: string;
  url: string;
  ogImage: string;
  github?: {
    url: string;
    enabled: boolean;
  };
  analytics?: {
    domain: string;
    enabled: boolean;
  };
  branding: {
    logo: string;
    favicon: string;
    tagline: string;
    freeAndOpenSource: boolean;
  };
  features: {
    resumeUpload: {
      enabled: boolean;
      title: string;
      description: string;
      callToAction: string;
      processingTime: string;
    };
  };
}

/**
 * Default site configuration
 * Modify these values to customize your site
 */
export const siteConfig: SiteConfig = {
  name: 'ResumeToSite',
  displayName: 'Resume to Website Builder',
  description: 'Transform your resume into a professional website instantly. Powered by AI.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  ogImage: '/og.png',
  
  github: {
    url: 'https://github.com/your-username/resume-to-site',
    enabled: true,
  },
  
  analytics: {
    domain: process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || 'localhost',
    enabled: process.env.NODE_ENV === 'production',
  },
  
  branding: {
    logo: '/logo.svg',
    favicon: '/favicon.ico',
    tagline: 'Resume → Website in one click',
    freeAndOpenSource: true,
  },
  
  features: {
    resumeUpload: {
      enabled: true,
      title: 'Resume → Website',
      description: 'Turn your resume/LinkedIn into a professional website.',
      callToAction: 'Upload Resume',
      processingTime: 'Takes 1 minute!',
    },
  },
};

/**
 * Environment-specific overrides
 * These can be set via environment variables
 */
if (process.env.NEXT_PUBLIC_SITE_NAME) {
  siteConfig.name = process.env.NEXT_PUBLIC_SITE_NAME;
}

if (process.env.NEXT_PUBLIC_SITE_DISPLAY_NAME) {
  siteConfig.displayName = process.env.NEXT_PUBLIC_SITE_DISPLAY_NAME;
}

if (process.env.NEXT_PUBLIC_SITE_DESCRIPTION) {
  siteConfig.description = process.env.NEXT_PUBLIC_SITE_DESCRIPTION;
}

if (process.env.NEXT_PUBLIC_GITHUB_URL) {
  siteConfig.github!.url = process.env.NEXT_PUBLIC_GITHUB_URL;
}

if (process.env.NEXT_PUBLIC_DISABLE_GITHUB === 'true') {
  siteConfig.github!.enabled = false;
}

export default siteConfig;
