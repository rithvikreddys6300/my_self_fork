/**
 * Application configuration constants
 * Centralized configuration for business logic and validation rules
 */

/** Maximum allowed username length for user profiles */
export const MAX_USERNAME_LENGTH = 40;

/** Minimum username length for user profiles */
export const MIN_USERNAME_LENGTH = 3;

/** Maximum file size for resume uploads (in bytes) */
export const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

/** Allowed file types for resume uploads */
export const ALLOWED_FILE_TYPES = ['application/pdf'] as const;

/** Maximum number of resume uploads per user */
export const MAX_RESUMES_PER_USER = 5;

/** Cache TTL (time to live) in seconds */
export const CACHE_TTL = {
  /** User data cache TTL (1 hour) */
  USER_DATA: 60 * 60,
  /** Resume data cache TTL (30 minutes) */
  RESUME_DATA: 30 * 60,
  /** Public site data cache TTL (24 hours) */
  PUBLIC_SITE: 24 * 60 * 60,
} as const;

/** Rate limiting configuration */
export const RATE_LIMITS = {
  /** Resume upload rate limit (per hour) */
  UPLOAD: 5,
  /** API calls rate limit (per minute) */
  API_CALLS: 60,
  /** Public site views rate limit (per minute) */
  SITE_VIEWS: 1000,
} as const;

/** AI Processing configuration */
export const AI_CONFIG = {
  /** Default AI model for resume processing */
  DEFAULT_MODEL: 'meta-llama/Llama-3.3-70B-Instruct-Turbo',
  /** Maximum tokens for AI responses */
  MAX_TOKENS: 4000,
  /** AI processing timeout (seconds) */
  TIMEOUT: 30,
} as const;
