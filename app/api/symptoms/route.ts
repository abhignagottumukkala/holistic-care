import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import { Symptom } from '@/models/Symptom';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { userId, symptoms, severity, duration, additionalNotes } = body;
    
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
    const userId = searchParams.get('userId');
    
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