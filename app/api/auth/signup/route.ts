import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { User } from '@/models/User';
import jwt from 'jsonwebtoken';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const body = await request.json();
    const { name, email, password } = body;
    
    // Validate required fields
    if (!name || !email || !password) {
      return NextResponse.json(
        { error: 'Name, email, and password are required' },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB
    await connectDB();
    
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User with this email already exists' },
        { status: 409 }
      );
    }
    
    // Create new user
    const user = await User.create({
      name,
      email,
      password
    });
    
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || 'default_secret_change_this_in_production',
      { expiresIn: '7d' }
    );
    
    // Return success with token (password is already hashed by the pre-save hook)
    return NextResponse.json(
      { 
        success: true, 
        message: 'User registered successfully',
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          createdAt: user.createdAt
        }
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('Error during signup:', error);
    // Safely extract error message
    const errorMessage = error instanceof Error ? error.message : 'Failed to register user';
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
} 