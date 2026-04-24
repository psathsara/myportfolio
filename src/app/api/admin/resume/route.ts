import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/../db';
import Resume from '@/../db/models/Resume';
import { cookies } from 'next/headers';

async function checkAuth() {
    const cookieStore = await cookies();
    const password = cookieStore.get('admin-password')?.value;
    const correctPassword = process.env.ADMIN_PASSWORD || 'admin123';
    return password === correctPassword;
}

export async function GET() {
    try {
        await connectToDatabase();
        let resume = await Resume.findOne();

        if (!resume) {
            return NextResponse.json({ message: 'No resume found' }, { status: 404 });
        }

        return NextResponse.json(resume);
    } catch (error) {
        console.error('Error fetching resume:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        if (!(await checkAuth())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const data = await request.json();
        await connectToDatabase();

        let resume = await Resume.findOne();

        if (resume) {
            resume = await Resume.findByIdAndUpdate(resume._id, data, { new: true });
        } else {
            resume = await Resume.create(data);
        }

        return NextResponse.json(resume);
    } catch (error) {
        console.error('Error updating resume:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
