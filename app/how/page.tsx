import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "How | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const steps = [
  {
    title: "Search",
    text: `Begin your journey by searching for the perfect job opportunity or professional service on SRIYOG. Our platform offers a wide range of options tailored to your preferences. Utilize our advanced search filters to narrow down your choices based on factors such as location, industry, or specific skills.`,
    img: "/images/how/search.png",
    reverse: false,
  },
  {
    title: "Hire",
    text: `Once you've found the right match, it's time to hire. Users can connect with professionals directly through our platform, facilitating a direct and efficient hiring process without any intermediaries.`,
    img: "/images/how/hire.png",
    reverse: true,
  },
  {
    title: "Instruct",
    text: `With the hiring process complete, it's time to provide instructions or guidance for the task at hand. Whether you're a business delegating responsibilities to a new employee or a professional receiving instructions for a project, clear communication is key. SRIYOG facilitates transparent communication between parties, ensuring that everyone is on the same page.`,
    img: "/images/how/instruct.png",
    reverse: false,
  },
  {
    title: "Pay",
    text: `Finally, it's time to complete the transaction. Businesses can securely pay for services rendered through any platform, providing peace of mind for both parties involved.`,
    img: "/images/how/pay.png",
    reverse: true,
  },
];

const page = () => {
  return (
    <>
      <section className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 mt-12">
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black">
          This is how SRIYOG Works
        </h3>

        {steps.map(({ title, text, img, reverse }, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } items-center mb-16 gap-8 text-black`}
          >
            <div className="w-full md:w-5/12 relative h-64">
              <Image
                src={img}
                alt={`${title} Icon`}
                fill
                className="object-contain rounded-lg"
              />
            </div>
            <div className="w-full md:w-7/12">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {title}
              </h3>
              <p className="text-gray-700 text-justify leading-relaxed">
                {text}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* <section className="border-b border-gray-200 mt-10 mb-10" /> */}
    </>
  );
};

export default page;
