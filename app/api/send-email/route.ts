import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, institution, institutionType, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !institution) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, just log the data and return success
    // In production, you'll want to integrate with an email service
    console.log('=== New Demo Request ===');
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Institution:', institution);
    console.log('Institution Type:', institutionType);
    console.log('Message:', message || 'No additional message');
    console.log('========================');

    // Simulate successful email send
    return NextResponse.json(
      { 
        success: true, 
        message: 'Form submitted successfully. Details logged to console.' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing form:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
