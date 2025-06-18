import React from "react";
import RedSection from "@/components/RedSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const page = () => {
  return (
    <>
      <RedSection title="About SRIYOG">
        SRIYOG has been functioning under a start-up model, and is the most
        recent example of leveraging digital technology to address social
        problems like unemployment through digital connectivity.
      </RedSection>
      <section className="w-full border-b bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-6">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            {/* Left Content */}
            <div className="w-full lg:w-7/12">
              <hr className="border-t-2 border-[#8B1414] w-20 mb-2" />
              <small className="text-sm text-gray-700 uppercase">
                Who We Are
              </small>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#8B1414] mt-3">
                Creating Opportunities for Everyone
              </h1>
              <p className="text-sm sm:text-base text-justify mt-4 text-gray-800">
                SRIYOG, which was registered under the Office of the Company
                Registrar in 2018 to establish direct contact between the people
                who work and hire skilled manpower by profiling them, and
                formally started from Kathmandu on 12 September 2019 for digital
                branding of professionals within the country, has provided
                thousands of users with easy and It has been providing
                opportunities to work through different means.
              </p>
              <p className="text-sm sm:text-base text-justify mt-4 text-gray-800">
                Analyzing the Global Service market, we found unbelievable
                facts:
              </p>

              <ul className="list-none pl-0 mt-4 space-y-3 text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#8B1414]">&#9679;</span>
                  <span>
                    Local experts have a tremendous market; as a result, they
                    drop the small works whereas starters never get an
                    opportunity to prove themselves.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#8B1414]">&#9679;</span>
                  <span>Time management and scheduling are never done.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#8B1414]">&#9679;</span>
                  <span>
                    The experts and veterans never work to build their team and
                    gain trust. To grab this opportunity, various agencies
                    filled in the space by creating the market and are
                    performing much smoothly.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-[#8B1414]">&#9679;</span>
                  <span>
                    But agencies are creating a hectic schedule, paying low to
                    their employees and charging much higher to the service
                    seekers.
                  </span>
                </li>
              </ul>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-5/12">
              <div className="relative min-h-[500px] h-full rounded shadow-md overflow-hidden bg-gray-100 flex flex-col justify-end">
                {/* Background Image */}
                <Image
                  src="/images/mayor.jpg"
                  alt="mayor"
                  fill
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Text near bottom with faint transparent background */}
                <p
                  className="absolute bottom-0 left-0 right-0
                  bg-opacity-30 text-center text-sm
                  py-3 z-10 rounded-b-md backdrop-blur-sm text-white"
                >
                  Mr. Nagesh Koirala (Mayor of Biratnagar Metropolitan)
                  expressing his views at “Karmashil Award” program held at
                  Morang Byapar Sangh on 12 September 2022.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-gray-100">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
          <div className="bg-[#d4c3c3] rounded-lg shadow-lg p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Card 1 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/images/team.svg"
                  alt="team"
                  width={48}
                  height={48}
                />
                <div>
                  <h2 className="text-[#841515] text-lg font-semibold mb-2">
                    Experienced Team
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    Founded by a group of second-generation entrepreneurs for
                    providing something valuable for society and people who
                    enjoy digital connectivity.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/images/building.svg"
                  alt="global reach"
                  width={48}
                  height={48}
                />
                <div>
                  <h2 className="text-[#841515] text-lg font-semibold mb-2">
                    Global Reach
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    Started from Biratnagar, Nepal, we are gradually growing to
                    cover few major cities of Nepal. As a part of our global
                    expansion, we are opening membership for skilled
                    professionals in New Delhi & Dubai.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/images/flag.svg"
                  alt="opportunities"
                  width={48}
                  height={48}
                />
                <div>
                  <h2 className="text-[#841515] text-lg font-semibold mb-2">
                    Multiple Opportunities
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    Starting from 24 services, we have upgraded now to 18
                    categories and 158 sub-categories. We have been continuously
                    upgrading and modifying your service categories as per the
                    user requirements and specification.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="flex items-start gap-4">
                <Image
                  src="/images/skills.svg"
                  alt="ai ml"
                  width={48}
                  height={48}
                />
                <div>
                  <h2 className="text-[#841515] text-lg font-semibold mb-2">
                    AI and ML Integration
                  </h2>
                  <p className="text-gray-800 text-sm sm:text-base">
                    By adopting the latest technology and innovation, we are
                    automating our system. Once we are equipped with sufficient
                    database, Artificial Intelligence (AI) and Machine Language
                    (ML) can be used to make the user experience much easier.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-10 mt-4 mb-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
          <div className="flex flex-col lg:flex-row gap-10 lg:items-center">
            {/* Left Column: Welcome Note */}
            <div className="lg:w-1/3 shrink-0">
              <div className="bg-white rounded-lg shadow p-6 sticky top-10">
                <h2 className="text-[#8B1414] text-2xl font-semibold mb-4">
                  A Brief History of SRIYOG
                </h2>
                <p className="mb-4 text-black">
                  Analyzing the global trend of migration, we can find the only
                  reason for skyrocketing foreign employment is that people
                  choose the easy way of grabbing the readymade market rather
                  than creating something new by themselves.
                </p>
                <p className="text-black">
                  This hampers the distribution of the skilled manpower in the
                  underdeveloped countries and brings imbalance over the global
                  community. Analyzing the Global Service market, we found
                  unbelievable facts.
                </p>
              </div>
            </div>

            {/* Right Column: Horizontal Scrollable Timeline */}
            <div className="lg:w-2/3 overflow-x-auto text-black">
              <div className="flex gap-6 min-w-max">
                {[
                  {
                    img: "/images/photoscroll1.jpg",
                    text: "Company Registration",
                    date: "14th June, 2018",
                  },
                  {
                    img: "/images/photoscroll2.jpg",
                    text: "Inaugurated at Kathmandu",
                    date: "12th September, 2019",
                  },
                  {
                    img: "/images/photoscroll3.jpg",
                    text: "MoU With MAW Skills",
                    date: "31st December, 2019",
                  },
                  {
                    img: "/images/photoscroll4.jpg",
                    text: "Karmashil Award Ceremony",
                    date: "12th September, 2022",
                  },
                  {
                    img: "/images/photoscroll5.jpg",
                    text: "MoU with IME Pay",
                    date: "8th February, 2023",
                  },
                  {
                    img: "/images/photoscroll6.jpg",
                    text: "New App Launched",
                    date: "17th May, 2024",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="min-w-[280px] bg-white rounded-lg shadow p-4 flex-shrink-0"
                  >
                    <div className="relative w-full h-56 rounded mb-3 overflow-hidden">
                      <Image
                        src={item.img}
                        alt={item.text}
                        className="object-cover"
                        fill
                      />
                    </div>
                    <p className="text-lg font-medium">{item.text}</p>
                    <p className="text-gray-500 mt-2 text-base">
                      {item.date.split(" ")[0]}
                      <sup>
                        {item.date
                          .match(/\d+(st|nd|rd|th)/)?.[0]
                          ?.replace(/\d+/, "")}
                      </sup>{" "}
                      {item.date.replace(/\d+(st|nd|rd|th)/, "").trim()}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <AboutFounder/> */}
    </>
  );
};

export default page;
