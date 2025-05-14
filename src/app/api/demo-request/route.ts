import { kv } from '@vercel/kv';
import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { name, email, phone, company, message } = data;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Create a unique ID for this demo request
        const id = uuidv4();
        const timestamp = new Date().toISOString();

        // Store in Vercel KV (Redis)
        await kv.hset(`demo:${id}`, {
            id,
            name,
            email,
            phone: phone || '',
            company: company || '',
            message: message || '',
            timestamp,
            type: 'demo'
        });

        // Add to a list for easy retrieval
        await kv.lpush('demos', id);

        return NextResponse.json({ success: true, id });
    } catch (error) {
        console.error('Error saving demo request:', error);
        return NextResponse.json(
            { error: 'Failed to save demo request' },
            { status: 500 }
        );
    }
}