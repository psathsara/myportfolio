import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/../db';
import Resume from '@/../db/models/Resume';
import { DATA } from '@/data/resume';
import { cookies } from 'next/headers';

async function checkAuth() {
    const cookieStore = await cookies();
    const password = cookieStore.get('admin-password')?.value;
    const correctPassword = process.env.ADMIN_PASSWORD || 'admin123';
    return password === correctPassword;
}

export async function POST() {
    try {
        if (!(await checkAuth())) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await connectToDatabase();

        // Check if data already exists
        const existing = await Resume.findOne();
        if (existing) {
            return NextResponse.json({ message: 'Data already migrated' });
        }

        // Prepare data for migration (strip functions or circular refs if any, though DATA should be safe)
        const resumeData = { ...DATA };

        // Mongoose might complain about some specific field structures if not exactly matchingSchema
        // But let's try direct creation first
        const resume = await Resume.create(resumeData);

        return NextResponse.json({ message: 'Migration successful', id: resume._id });
    } catch (error) {
        console.error('Migration error:', error);
        return NextResponse.json({ error: 'Internal server error', details: error instanceof Error ? error.message : 'Unknown error' }, { status: 500 });
    }
}
