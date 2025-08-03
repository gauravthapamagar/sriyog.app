
import { NextRequest } from 'next/server';
import { connectdb } from '@/lib/db';
import ProfessionalUser from '@/model/professionalUser.model';
import { NextResponse } from 'next/server';

interface Params {
  city: string;
}

export async function GET(request: NextRequest, context: { params: Params }) {
  const { params } = context;
  await connectdb();
  const { city } = params;
  try {
    const plumbers = await ProfessionalUser.find({ Profession: /plumber/i, City: new RegExp(city, 'i') });
    return NextResponse.json(plumbers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch plumbers for city', details: error }, { status: 500 });
  }
}
