import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client';

// Initialize Prisma client
const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        const { name, email, subject, message } = data;

        // Validate required fields
        if (!name || !email) {
            return NextResponse.json(
                { error: 'Name and email are required' },
                { status: 400 }
            );
        }

        // Create a unique ID for this contact
        const id = uuidv4();
        const timestamp = new Date();

        // Store in PostgreSQL using Prisma
        const contact = await prisma.contact.create({
            data: {
                id,
                name,
                email,
                subject: subject || '',
                message: message || '',
                createdAt: timestamp,
                type: 'contact'
            }
        });

        return NextResponse.json({ success: true, id: contact.id });
    } catch (error) {
        console.error('Error saving contact:', error);
        return NextResponse.json(
            { error: 'Failed to save contact information' },
            { status: 500 }
        );
    }
}
