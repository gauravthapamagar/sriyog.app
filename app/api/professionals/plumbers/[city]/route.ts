import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/lib/db";
import ProfessionalUser from "@/model/professionalUser.model";

// Temporarily use 'any' for the context parameter to debug
export async function GET(request: NextRequest, context: any) {
  // We still extract the city, but without strict typing on 'context'
  const { city } = context.params;

  await connectdb();

  try {
    const plumbers = await ProfessionalUser.find({
      Profession: /plumber/i,
      City: new RegExp(city, "i"),
    });

    if (plumbers.length === 0) {
      return NextResponse.json(
        { message: `No plumbers found in ${city}` },
        { status: 404 }
      );
    }

    return NextResponse.json(plumbers);
  } catch (error) {
    console.error("Failed to fetch plumbers:", error);
    return NextResponse.json(
      { message: "An internal server error occurred." },
      { status: 500 }
    );
  }
}
