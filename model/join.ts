// FILE: model/join.ts

import mongoose, { Schema, Document, models } from "mongoose";

/**
 * This interface defines the structure of a document in your 'ProfessionalUsers' collection.
 * It includes every field that will be stored in the database.
 */
export interface IJoinForm extends Document {
  // Personal Details
  firstName: string;
  middleName?: string;
  lastName: string;
  phone: string;
  profession: string;
  gender: string;
  city: string;
  ward: string;
  workingArea?: string;
  referredBy?: string;

  // Experience Details
  experience: string;
  training?: string;
  trainingStartDate?: string;
  trainingEndDate?: string;

  // Identification Details
  dateOfBirth: string;
  bloodGroup?: string;
  maritalStatus?: string;
  idType: string;
  idNumber: string;

  // Permanent Address
  permanentState: string;
  permanentDistrict: string;
  permanentMunicipality?: string;
  permanentArea?: string;
  permanentLandmark?: string;

  // Current Address
  currentState: string;
  currentDistrict: string;
  currentMunicipality?: string;
  area?: string; // This holds the 'currentArea' from the form
  currentLandmark?: string;

  // File Uploads
  headshot?: string;
  idUpload?: string;
}

/**
 * This is the Mongoose Schema that enforces the structure defined in the interface.
 * It tells MongoDB what fields to expect for any document in the 'ProfessionalUsers' collection.
 */
const JoinFormSchema: Schema = new Schema(
  {
    // --- Fields mapped from your form ---
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phone: { type: String, required: true }, // Mapped from phoneNumber
    profession: { type: String, required: true }, // Mapped from professionsSkills
    gender: { type: String, required: true }, // Mapped from genderPersonal or genderId
    city: { type: String, required: true },
    ward: { type: String, required: true }, // Mapped from currentWard or wardNo
    area: { type: String }, // Mapped from currentArea
    referredBy: { type: String },
    middleName: { type: String },
    workingArea: { type: String },
    experience: { type: String, required: true },
    training: { type: String },
    trainingStartDate: { type: String },
    trainingEndDate: { type: String },
    dateOfBirth: { type: String, required: true },
    bloodGroup: { type: String },
    maritalStatus: { type: String },
    idType: { type: String, required: true },
    idNumber: { type: String, required: true },
    permanentState: { type: String, required: true },
    permanentDistrict: { type: String, required: true },
    permanentMunicipality: { type: String },
    permanentArea: { type: String },
    permanentLandmark: { type: String },
    currentState: { type: String, required: true },
    currentDistrict: { type: String, required: true },
    currentMunicipality: { type: String },
    currentLandmark: { type: String },

    // --- Fields for file URLs ---
    headshot: { type: String },
    idUpload: { type: String },
  },
  {
    collection: "ProfessionalUsers",
    timestamps: true,
  }
);

const JoinForm =
  models.JoinForm || mongoose.model<IJoinForm>("JoinForm", JoinFormSchema);

export default JoinForm;
