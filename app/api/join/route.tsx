import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb"; // adjust path based on your structure

const dbName = "sriyog";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const client = await clientPromise;
    const db = client.db(dbName);

    const result = await db.collection("users").insertOne(body);

    return NextResponse.json({ insertedId: result.insertedId });
  } catch (error) {
    console.error(" API ERROR:", error);
    return NextResponse.json({ error: "Failed to insert" }, { status: 500 });
  }
}
