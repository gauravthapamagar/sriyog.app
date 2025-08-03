// FILE: app/api/join/route.ts (FINAL VERSION)

import { NextRequest, NextResponse } from "next/server";
import { connectdb } from "@/lib/db";
import JoinForm from "@/model/join";
import { v2 as cloudinary } from "cloudinary";

// Configure Cloudinary from your .env.local file
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Helper function to upload a file to Cloudinary
async function uploadToCloudinary(file: File, folder: string) {
  const buffer = await file.arrayBuffer();
  const bytes = Buffer.from(buffer);

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { folder: folder },
      (err, result) => {
        if (err) return reject(err);
        if (result) return resolve(result);
      }
    );
    uploadStream.end(bytes);
  });
}

export async function POST(request: NextRequest) {
  try {
    // Connect to the database first
    await connectdb();

    const data = await request.formData();

    // Extract files from the form data
    const headshotFile = data.get("headshot") as File | null;
    const idFile = data.get("idUpload") as File | null;

    let headshotUrl = null;
    let idUploadUrl = null;

    // --- CLOUDINARY UPLOAD IS NOW RE-ENABLED ---
    // Upload headshot if it exists
    if (headshotFile) {
      const result: any = await uploadToCloudinary(
        headshotFile,
        "user_headshots"
      );
      headshotUrl = result.secure_url;
    }

    // Upload ID file if it exists
    if (idFile) {
      const result: any = await uploadToCloudinary(idFile, "user_ids");
      idUploadUrl = result.secure_url;
    }

    // Map all form data to the backend schema names
    const professionalUserData = {
      firstName: data.get("firstName"),
      middleName: data.get("middleName"),
      lastName: data.get("lastName"),
      city: data.get("city"),
      workingArea: data.get("workingArea"),
      referredBy: data.get("referredBy"),
      experience: data.get("experience"),
      training: data.get("training"),
      trainingStartDate: data.get("trainingStartDate"),
      trainingEndDate: data.get("trainingEndDate"),
      dateOfBirth: data.get("dateOfBirth"),
      bloodGroup: data.get("bloodGroup"),
      maritalStatus: data.get("maritalStatus"),
      idType: data.get("idType"),
      idNumber: data.get("idNumber"),
      phone: data.get("phoneNumber"),
      profession: data.get("professionsSkills"),
      ward: data.get("currentWard") || data.get("wardNo"),
      area: data.get("currentArea"),
      gender: data.get("genderPersonal") || data.get("genderId"),
      permanentState: data.get("permanentState"),
      permanentDistrict: data.get("permanentDistrict"),
      permanentMunicipality: data.get("permanentMunicipality"),
      permanentArea: data.get("permanentArea"),
      permanentLandmark: data.get("permanentLandmark"),
      currentState: data.get("currentState"),
      currentDistrict: data.get("currentDistrict"),
      currentMunicipality: data.get("currentMunicipality"),
      currentLandmark: data.get("currentLandmark"),

      // --- IMAGE URLS ARE NOW ADDED TO THE DATABASE OBJECT ---
      headshot: headshotUrl,
      idUpload: idUploadUrl,
    };

    // Create and save the new user with all data
    const newUser = new JoinForm(professionalUserData);
    const savedUser = await newUser.save();

    return NextResponse.json(
      {
        message: "Form submitted successfully!",
        success: true,
        insertedId: savedUser._id,
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("API Submission Error:", error);
    return NextResponse.json(
      {
        error: "Failed to submit the form.",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
