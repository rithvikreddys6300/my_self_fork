import { getResume, Resume, storeResume } from '@/lib/server/redisActions';
import { currentUser } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import { z } from 'zod';

/**
 * Resume API Route Handler
 * 
 * Handles GET and POST requests for resume data operations.
 * This API provides endpoints for retrieving and storing user resume data.
 * 
 * Authentication is required for all operations.
 */

/** Response type for GET /api/resume */
export type GetResumeResponse = { resume?: Resume } | { error: string };

/** Response type for POST /api/resume */
export type PostResumeResponse =
  | { success: true }
  | { error: string; details?: z.ZodError['errors'] };

/**
 * GET /api/resume
 * 
 * Retrieves the current user's resume data from the database.
 * 
 * @returns The user's resume data or null if not found
 * @throws 401 if user is not authenticated
 * @throws 500 for internal server errors
 */
export async function GET(): Promise<NextResponse<GetResumeResponse>> {
  try {
    // Verify user authentication
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Retrieve resume data for the authenticated user
    const resume = await getResume(user.id);
    return NextResponse.json({ resume });
  } catch (error) {
    console.error('Error retrieving resume:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}

/**
 * POST /api/resume
 * 
 * Stores or updates the current user's resume data in the database.
 * The request body should contain resume data conforming to the ResumeDataSchema.
 * 
 * @param request - Request object containing resume data in JSON format
 * @returns Success confirmation or error details
 * @throws 401 if user is not authenticated
 * @throws 400 if request data is invalid
 * @throws 500 for internal server errors
 */
export async function POST(
  request: Request,
): Promise<NextResponse<PostResumeResponse>> {
  try {
    // Verify user authentication
    const user = await currentUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Store the resume data (validation happens in storeResume function)
    await storeResume(user.id, body);

    return NextResponse.json({ success: true });
  } catch (error) {
    // Handle Zod validation errors specifically
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          error: 'Invalid data format', 
          details: error.errors 
        },
        { status: 400 },
      );
    }
    
    // Handle other errors
    console.error('Error storing resume:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 },
    );
  }
}
