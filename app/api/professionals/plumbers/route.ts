
import { connectdb } from '@/lib/db';
import ProfessionalUser from '@/model/professionalUser.model';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectdb();
  try {
    const plumbers = await ProfessionalUser.find({ Profession: /plumber/i });
    return NextResponse.json(plumbers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch plumbers', details: error }, { status: 500 });
  }
}
