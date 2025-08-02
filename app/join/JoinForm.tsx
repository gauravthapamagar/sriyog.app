"use client";

import React, { useState } from "react";

interface JoinFormData {
  firstName: string;
  middleName: string;
  lastName: string;
  phoneNumber: string;
  professionsSkills: string;
  genderPersonal: string;
  city: string;
  wardNo: string;
  workingArea: string;
  referredBy: string;
  experience: string;
  training: string;
  trainingStartDate: string;
  trainingEndDate: string;
  dateOfBirth: string;
  genderId: string;
  bloodGroup: string;
  maritalStatus: string;
  idType: string;
  idNumber: string;
  permanentState: string;
  permanentDistrict: string;
  permanentMunicipality: string;
  permanentArea: string;
  permanentLandmark: string;
  currentState: string;
  currentDistrict: string;
  currentMunicipality: string;
  currentArea: string;
  currentWard: string;
  currentLandmark: string;
}

const JoinForm = () => {
  const [formData, setFormData] = useState<JoinFormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    professionsSkills: "",
    genderPersonal: "",
    city: "",
    wardNo: "",
    workingArea: "",
    referredBy: "",
    experience: "",
    training: "",
    trainingStartDate: "",
    trainingEndDate: "",
    dateOfBirth: "",
    genderId: "",
    bloodGroup: "",
    maritalStatus: "",
    idType: "",
    idNumber: "",
    permanentState: "",
    permanentDistrict: "",
    permanentMunicipality: "",
    permanentArea: "",
    permanentLandmark: "",
    currentState: "",
    currentDistrict: "",
    currentMunicipality: "",
    currentArea: "",
    currentWard: "",
    currentLandmark: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // try {
    //   const response = await fetch("/api/join", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(formData),
    //   });

    //   if (!response.ok) throw new Error("Failed to submit");

    //   const result = await response.json();
    //   alert("Form submitted successfully!");
    //   console.log("Inserted ID:", result.insertedId);
    // } catch (error) {
    //   console.error("Submission error:", error);
    //   alert("Form submission failed.");
    // }
  };
  return (
    <>
      <section className="max-w-5xl p-6 mx-auto rounded-md shadow-xl border border-gray-200 mt-10 mb-20">
        <h1 className="text-4xl text-center font-bold text-black ">
          Join SRIYOG
        </h1>
        <h4 className="text-xs text-center font-medium text-gray-500 mt-2 mb-8">
          Please fill this form to join SRIYOG Consulting
        </h4>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {/* Personal Details */}
            <h2 className="text-xl font-semibold md:col-span-2">
              Personal Details
            </h2>

            <div>
              <label htmlFor="firstName" className="text-black text-sm">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="Purna"
                value={formData.firstName}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="middleName" className="text-black text-sm">
                Middle Name
              </label>
              <input
                id="middleName"
                name="middleName"
                type="text"
                placeholder="Bahadur"
                value={formData.middleName}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="text-black text-sm">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                placeholder="Magar"
                value={formData.lastName}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="text-black text-sm">
                Phone Number <span className="text-red-600">*</span>
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="tel"
                placeholder="+977 9812345678"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="professionsSkills" className="text-black text-sm">
                Profession(s) / Skills <span className="text-red-600">*</span>
              </label>
              <textarea
                id="professionsSkills"
                name="professionsSkills"
                placeholder="e.g., Software Engineer, Graphic Designer, Content Writer"
                value={formData.professionsSkills}
                onChange={handleChange}
                rows={1}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md resize-none"
              />
            </div>

            <div>
              <label htmlFor="genderPersonal" className="text-black text-sm">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                id="genderPersonal"
                name="genderPersonal"
                value={formData.genderPersonal}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label htmlFor="city" className="text-black text-sm">
                City <span className="text-red-600">*</span>
              </label>
              <input
                id="city"
                name="city"
                type="text"
                placeholder="Kathmandu"
                value={formData.city}
                onChange={handleChange}
                required
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="wardNo" className="text-black text-sm">
                Ward No <span className="text-red-600">*</span>
              </label>
              <input
                id="wardNo"
                name="wardNo"
                type="number"
                placeholder="5"
                min={1}
                required
                value={formData.wardNo}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="workingArea" className="text-black text-sm">
                Working Area
              </label>
              <input
                id="workingArea"
                name="workingArea"
                type="text"
                placeholder="Patan, Lalitpur"
                value={formData.workingArea}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="referredBy" className="text-black text-sm">
                Referred By (Phone Number)
              </label>
              <input
                id="referredBy"
                name="referredBy"
                type="tel"
                placeholder="+977 9801234567"
                value={formData.referredBy}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="profilePicture" className="text-black text-sm">
                Headshot / Profile Picture
              </label>
              <input
                id="profilePicture"
                name="profilePicture"
                type="file"
                accept="image/*"
                className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Experience Details */}
            <h2 className="text-xl font-semibold md:col-span-2 mt-6">
              Experience Details
            </h2>

            <div>
              <label htmlFor="experience" className="text-black text-sm">
                Experience <span className="text-red-600">*</span>
              </label>
              <input
                id="experience"
                name="experience"
                type="text"
                required
                placeholder="e.g., 3 years 6 months or 4.5 years"
                value={formData.experience}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="training" className="text-black text-sm">
                Training
              </label>
              <select
                id="training"
                name="training"
                value={formData.training}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="">Select Training</option>
                <option value="softwareDevelopment">
                  Software Development
                </option>
                <option value="projectManagement">Project Management</option>
                <option value="graphicDesign">Graphic Design</option>
                <option value="digitalMarketing">Digital Marketing</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 md:col-span-2">
              <div>
                <label
                  htmlFor="trainingStartDate"
                  className="text-black text-sm"
                >
                  Start Date
                </label>
                <input
                  id="trainingStartDate"
                  name="trainingStartDate"
                  type="date"
                  value={formData.trainingStartDate}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <label htmlFor="trainingEndDate" className="text-black text-sm">
                  End Date
                </label>
                <input
                  id="trainingEndDate"
                  name="trainingEndDate"
                  type="date"
                  value={formData.trainingEndDate}
                  onChange={handleChange}
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
                />
              </div>
            </div>

            {/* Identification Details */}
            <h2 className="text-xl font-semibold md:col-span-2 mt-6">
              Identification Details
            </h2>

            <div>
              <label htmlFor="dateOfBirth" className="text-black text-sm">
                Date of Birth <span className="text-red-600">*</span>
              </label>
              <input
                id="dateOfBirth"
                name="dateOfBirth"
                type="date"
                value={formData.dateOfBirth}
                required
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="genderId" className="text-black text-sm">
                Gender <span className="text-red-600">*</span>
              </label>
              <select
                id="genderId"
                name="genderId"
                value={formData.genderId}
                required
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>

            <div>
              <label htmlFor="bloodGroup" className="text-black text-sm">
                Blood Group
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                value={formData.bloodGroup}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>

            <div>
              <label htmlFor="maritalStatus" className="text-black text-sm">
                Marital Status
              </label>
              <select
                id="maritalStatus"
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              >
                <option value="">Select Marital Status</option>
                <option value="single">Single</option>
                <option value="married">Married</option>
                <option value="divorced">Divorced</option>
                <option value="widowed">Widowed</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="uploadId" className="text-black text-sm">
                Upload ID <span className="text-red-600">*</span>
              </label>
              <input
                id="uploadId"
                name="uploadId"
                type="file"
                required
                accept="image/*,.pdf"
                className="block w-full mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div className="md:col-span-2">
              <span className="text-black text-sm block mb-2">
                Select ID Type: <span className="text-red-600">*</span>
              </span>
              <div
                role="radiogroup"
                aria-labelledby="idTypeLabel"
                className="flex flex-wrap gap-x-6 gap-y-2"
              >
                {[
                  "Citizenship",
                  "Driving License",
                  "Voter ID Card",
                  "Passport",
                  "National ID",
                ].map((idType) => (
                  <label
                    key={idType}
                    className="inline-flex items-center text-gray-700 whitespace-nowrap cursor-pointer"
                  >
                    <input
                      type="radio"
                      name="idType"
                      value={idType}
                      checked={formData.idType === idType}
                      onChange={handleChange}
                      required
                      className="form-radio text-green-600"
                    />
                    <span className="ml-2">{idType}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="md:col-span-2">
              <label htmlFor="idNumber" className="text-black text-sm">
                ID Number <span className="text-red-600">*</span>
              </label>
              <input
                id="idNumber"
                name="idNumber"
                type="text"
                required
                placeholder="1234567890"
                value={formData.idNumber}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Address Details */}
            <h2 className="text-xl font-semibold md:col-span-2 mt-6">
              Address Details
            </h2>

            <div>
              <label htmlFor="permanentState" className="text-black text-sm">
                State <span className="text-red-600">*</span>
              </label>
              <input
                id="permanentState"
                name="permanentState"
                type="text"
                required
                placeholder="State name"
                value={formData.permanentState}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="permanentDistrict" className="text-black text-sm">
                District <span className="text-red-600">*</span>
              </label>
              <input
                id="permanentDistrict"
                name="permanentDistrict"
                type="text"
                required
                placeholder="e.g., Ilam"
                value={formData.permanentDistrict}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div className="md:col-span-2">
              <label
                htmlFor="permanentMunicipality"
                className="text-black text-sm"
              >
                GP / NP / MNP
              </label>
              <input
                id="permanentMunicipality"
                name="permanentMunicipality"
                type="text"
                placeholder="e.g., Ilam Municipality"
                value={formData.permanentMunicipality}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="permanentArea" className="text-black text-sm">
                Area
              </label>
              <input
                id="permanentArea"
                name="permanentArea"
                type="text"
                placeholder="e.g., Mahamai"
                value={formData.permanentArea}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="permanentLandmark" className="text-black text-sm">
                Nearest Landmark
              </label>
              <input
                id="permanentLandmark"
                name="permanentLandmark"
                type="text"
                placeholder="e.g., Near Shiva Temple"
                value={formData.permanentLandmark}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            {/* Current Address */}
            <h3 className="text-md font-semibold md:col-span-2 mt-4">
              Current Address (Same as Above)
            </h3>

            <div>
              <label htmlFor="currentState" className="text-black text-sm">
                State <span className="text-red-600">*</span>
              </label>
              <input
                id="currentState"
                name="currentState"
                type="text"
                required
                placeholder="e.g., Province 3"
                value={formData.currentState}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="currentDistrict" className="text-black text-sm">
                District <span className="text-red-600">*</span>
              </label>
              <input
                id="currentDistrict"
                name="currentDistrict"
                type="text"
                required
                placeholder="e.g., Lalitpur"
                value={formData.currentDistrict}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label
                htmlFor="currentMunicipality"
                className="text-black text-sm"
              >
                GP / NP / MNP
              </label>
              <input
                id="currentMunicipality"
                name="currentMunicipality"
                type="text"
                placeholder="e.g., Mahalaxmi Municipality"
                value={formData.currentMunicipality}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="currentArea" className="text-black text-sm">
                Area
              </label>
              <input
                id="currentArea"
                name="currentArea"
                type="text"
                placeholder="e.g., Lubhu"
                value={formData.currentArea}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="currentWard" className="text-black text-sm">
                Ward #
              </label>
              <input
                id="currentWard"
                name="currentWard"
                type="number"
                placeholder="e.g., 5"
                min={1}
                value={formData.currentWard}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label htmlFor="currentLandmark" className="text-black text-sm">
                Nearest Landmark
              </label>
              <input
                id="currentLandmark"
                name="currentLandmark"
                type="text"
                placeholder="e.g., Opposite to School"
                value={formData.currentLandmark}
                onChange={handleChange}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="bg-[#009000] cursor-pointer px-6 py-2 leading-5 text-white transition-colors duration-200 transform rounded-md hover:bg-green-700 focus:outline-none focus:bg-gray-600"
            >
              Join Now
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default JoinForm;
