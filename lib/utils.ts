import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { siteConfig } from '@/config/site';

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx for conditional classes and tailwind-merge for deduplication
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Generates the public URL for a user's website
 * @param username - The username to generate URL for
 * @returns The complete URL to the user's public site
 */
export function getUserSiteUrl(username: string) {
  const baseUrl = process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : siteConfig.url;
  
  return `${baseUrl}/${username}`;
}

/**
 * Validates if a username meets the requirements
 * @param username - Username to validate
 * @returns Object with validation result and error message if invalid
 */
export function validateUsername(username: string): { 
  isValid: boolean; 
  error?: string; 
} {
  if (!username) {
    return { isValid: false, error: 'Username is required' };
  }
  
  if (username.length < 3) {
    return { isValid: false, error: 'Username must be at least 3 characters long' };
  }
  
  if (username.length > 40) {
    return { isValid: false, error: 'Username must be less than 40 characters long' };
  }
  
  if (!/^[a-zA-Z0-9_-]+$/.test(username)) {
    return { 
      isValid: false, 
      error: 'Username can only contain letters, numbers, hyphens, and underscores' 
    };
  }
  
  return { isValid: true };
}

/**
 * Formats file size in bytes to human readable format
 * @param bytes - File size in bytes
 * @param decimals - Number of decimal places (default: 2)
 * @returns Formatted file size string
 */
export function formatFileSize(bytes: number, decimals = 2): string {
  if (bytes === 0) return '0 Bytes';
  
  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
  
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

/**
 * Truncates text to specified length and adds ellipsis
 * @param text - Text to truncate
 * @param length - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export function truncateText(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

/**
 * Delays execution for specified milliseconds
 * @param ms - Milliseconds to delay
 * @returns Promise that resolves after the delay
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Legacy function name for backward compatibility
// TODO: Update all usages to use getUserSiteUrl instead
/** @deprecated Use getUserSiteUrl instead */
export const getSelfSoUrl = getUserSiteUrl;
