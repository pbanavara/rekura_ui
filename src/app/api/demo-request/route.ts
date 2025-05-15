import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

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
        const timestamp = new Date();

        // Store in PostgreSQL using Prisma
        const demoRequest = await prisma.demoRequest.create({
            data: {
                id,
                name,
                email,
                phone: phone || '',
                company: company || '',
                message: message || '',
                createdAt: timestamp,
                type: 'demo'
            }
        });

        return NextResponse.json({ success: true, id: demoRequest.id });
    } catch (error) {
        console.error('Error saving demo request:', error);
        return NextResponse.json(
            { error: 'Failed to save demo request' },
            { status: 500 }
        );
    }
}
