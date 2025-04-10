import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Symptom } from '@/models/Symptom';
import jwt from 'jsonwebtoken';

// Helper function to verify JWT token
const verifyToken = (token: string) => {
  try {
    return jwt.verify(
      token, 
      process.env.JWT_SECRET || 'default_secret_change_this_in_production'
    );
  } catch (error) {
    return null;
  }
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let { userId, symptoms, severity, duration, additionalNotes } = body;
    
    // Get authorization header
    const authHeader = request.headers.get('authorization');
    
    // If authorization header exists, verify the token
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const decoded = verifyToken(token);
      
      // If token is valid, use the userId from the token
      if (decoded && decoded.id) {
        // Override the userId with the one from the token
        userId = decoded.id;
      }
    }
    
    // Validate required fields
    if (!userId || !symptoms || !severity || !duration) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB
    await connectDB();
    
    // Create new symptom record
    const symptomRecord = await Symptom.create({
      userId,
      symptoms,
      severity,
      duration,
      additionalNotes
    });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Symptoms recorded successfully',
      data: symptomRecord
    }, { status: 201 });
    
  } catch (error) {
    console.error('Error saving symptoms:', error);
    return NextResponse.json(
      { error: 'Failed to save symptoms' },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    let userId = searchParams.get('userId');
    
    // Get authorization header
    const authHeader = request.headers.get('authorization');
    
    // If authorization header exists, verify the token
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const decoded = verifyToken(token);
      
      // If token is valid and no userId specified in query, use the userId from the token
      if (decoded && decoded.id && !userId) {
        userId = decoded.id;
      }
    }
    
    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      );
    }
    
    // Connect to MongoDB
    await connectDB();
    
    // Find symptoms for this user
    const symptoms = await Symptom.find({ userId }).sort({ createdAt: -1 });
    
    return NextResponse.json({ 
      success: true, 
      data: symptoms 
    });
    
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    return NextResponse.json(
      { error: 'Failed to fetch symptoms' },
      { status: 500 }
    );
  }
} 