import { z } from 'zod';

/**
 * Resume Data Schema Definitions
 * 
 * This file defines the structured data schema for resumes using Zod validation.
 * It ensures consistent data structure across the application for resume processing,
 * storage, and rendering.
 * 
 * The schema is used for:
 * - Validating AI-generated resume data
 * - Type safety throughout the application
 * - Database storage consistency
 * - Form validation
 */

/** Schema for contact information in resume header */
const HeaderContactsSchema = z.object({
  /** Personal website or portfolio URL */
  website: z.string().describe('Personal website or portfolio URL').optional(),
  
  /** Email address for contact */
  email: z.string().describe('Email address').optional(),
  
  /** Phone number for contact */
  phone: z.string().describe('Phone number').optional(),
  
  /** Twitter/X username (without @) */
  twitter: z.string().describe('Twitter/X username').optional(),
  
  /** LinkedIn username or profile URL */
  linkedin: z.string().describe('LinkedIn username').optional(),
  
  /** GitHub username or profile URL */
  github: z.string().describe('GitHub username').optional(),
});

/** Schema for resume header section containing personal information */
const HeaderSection = z.object({
  /** Full name of the person */
  name: z.string().describe('Full name of the person'),
  
  /** Short professional description or tagline */
  shortAbout: z.string().describe('Short description of your profile'),
  
  /** Geographic location in 'City, Country' format */
  location: z
    .string()
    .describe("Location with format 'City, Country'")
    .optional(),
    
  /** Contact information object */
  contacts: HeaderContactsSchema,
  
  /** Array of professional skills */
  skills: z
    .array(z.string())
    .describe('Skills used within the different jobs the user has had.'),
});

/** Schema for professional summary section */
const SummarySection = z.string().describe('Summary of your profile');

/** Schema for work experience entries */
const WorkExperienceSection = z.array(
  z.object({
    /** Name of the company */
    company: z.string().describe('Company name'),
    
    /** Company website URL */
    link: z.string().describe('Company website URL'),
    
    /** Work location (can be physical location, Hybrid, or Remote) */
    location: z
      .string()
      .describe(
        "Location with format 'City, Country' or could be Hybrid or Remote"
      ),
      
    /** Type of employment contract */
    contract: z
      .string()
      .describe('Type of work contract like Full-time, Part-time, Contract'),
      
    /** Job title or position */
    title: z.string().describe('Job title'),
    
    /** Start date in ISO format */
    start: z.string().describe("Start date in format 'YYYY-MM-DD'"),
    
    /** End date in ISO format (null for current positions) */
    end: z
      .string()
      .optional()
      .nullable()
      .describe("End date in format 'YYYY-MM-DD'"),
      
    /** Detailed job description and responsibilities */
    description: z.string().describe('Job description'),
  })
);

/** Schema for education entries */
const EducationSection = z.array(
  z.object({
    /** Name of educational institution */
    school: z.string().describe('School or university name'),
    
    /** Degree, certification, or program completed */
    degree: z.string().describe('Degree or certification obtained'),
    
    /** Year education started */
    start: z.string().describe('Start year'),
    
    /** Year education completed */
    end: z.string().describe('End year'),
  })
);

/**
 * Complete resume data schema
 * 
 * This is the main schema that validates the entire resume structure.
 * All resume data in the application should conform to this schema.
 */
export const ResumeDataSchema = z.object({
  /** Personal information and contact details */
  header: HeaderSection,
  
  /** Professional summary or objective */
  summary: SummarySection,
  
  /** Work history and professional experience */
  workExperience: WorkExperienceSection,
  
  /** Educational background */
  education: EducationSection,
});

/** TypeScript type derived from the ResumeDataSchema */
export type ResumeDataSchemaType = z.infer<typeof ResumeDataSchema>;

/** Type for individual work experience entries */
export type WorkExperienceEntry = z.infer<typeof WorkExperienceSection>[number];

/** Type for individual education entries */
export type EducationEntry = z.infer<typeof EducationSection>[number];

/** Type for header contact information */
export type HeaderContacts = z.infer<typeof HeaderContactsSchema>;

/** Type for header section */
export type HeaderData = z.infer<typeof HeaderSection>;
