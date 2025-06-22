"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "VMGO | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const images = ["/images/about/1.jpg", "/images/about/2.jpg"];

export default function ClientVMGO() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full ">
      {/* Carousel Section */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden rounded-md shadow-md">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={img}
              alt={`Slide ${index + 1}`}
              fill
              className="object-cover rounded-md"
              priority={index === currentIndex}
            />
          </div>
        ))}

        {/* Left Button */}
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            )
          }
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 z-20 shadow"
          aria-label="Previous Slide"
        >
          &#10094;
        </button>

        {/* Right Button */}
        <button
          onClick={() =>
            setCurrentIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            )
          }
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black rounded-full p-2 z-20 shadow"
          aria-label="Next Slide"
        >
          &#10095;
        </button>
      </div>

      {/* Heading */}
      <section className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 border-b py-8 sm:py-10 text-center">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black">
          Vision, Mission, Goals and Objectives
        </h3>
      </section>

      {/* Icon Grid */}
      <section className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {["Vision", "Mission", "Goals", "Objectives"].map((item, index) => (
            <div key={item} className="mt-3">
              <Image
                src={`/images/vmgo/${index + 1}.png`}
                alt={`${item} Icon`}
                width={80}
                height={80}
                className="mx-auto"
              />
              <p className="mt-2 sm:mt-3 font-semibold text-sm sm:text-base text-black">
                {item}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Content Sections */}
      {[
        {
          title: "Vision",
          textColor: "text-gray-900",
          bgColor: "bg-gray-100",
          image: "/images/vmgo/1.png",
          content: [
            "Our vision at SRIYOG is to create a future where every individual has access to opportunities that match their skills and aspirations.",
            "We envision a world where people searching for any service can easily connect with skilled professionals rather than hiring hefty commission from any service marketplace, and where an individual can have his/her digital profile showcasing their expertise.",
          ],
          reverse: false,
        },
        {
          title: "Mission",
          textColor: "text-white",
          bgColor: "bg-[#8b1414]",
          image: "/images/vmgo/2.png",
          content: [
            "At SRIYOG, our mission is to revolutionize the way work is connected with workers. We strive to provide a seamless platform that empowers individuals and businesses to find the perfect match for their needs, fostering opportunities for growth, collaboration, and success.",
          ],
          reverse: true,
        },
        {
          title: "Goals",
          textColor: "text-gray-900",
          bgColor: "bg-gray-100",
          image: "/images/vmgo/3.png",
          listItems: [
            "Facilitate Connections: Transparent and efficient interactions between users.",
            "Promote Transparency: Verification processes build trust across the platform.",
            "Empower Individuals: Equal access and inclusion for diverse communities.",
            "Drive Innovation: Constantly evolving with tech trends to improve experience.",
          ],
          reverse: false,
        },
        {
          title: "Objectives",
          textColor: "text-white",
          bgColor: "bg-[#8b1414]",
          image: "/images/vmgo/4.png",
          listItems: [
            "Expand Reach: Make the platform accessible to wider demographics.",
            "Enhance User Experience: Simplify and optimize the platform usability.",
            "Build Partnerships: Collaborate with institutions for growth.",
            "Promote Diversity and Inclusion: Ensure equality across users.",
            "Drive Customer Satisfaction: Feedback-driven improvements.",
          ],
          reverse: true,
        },
      ].map(
        (
          { title, textColor, bgColor, image, content, listItems, reverse },
          index
        ) => (
          <section
            key={index}
            className={`max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-8 flex flex-col md:flex-row ${
              reverse ? "md:flex-row-reverse" : ""
            } mt-10 mb-[45px] gap-6`}
          >
            <div className="md:w-1/2 flex justify-center items-center">
              <Image
                src={image}
                alt={`${title} Icon`}
                width={120}
                height={120}
                className="object-contain"
              />
            </div>
            <div
              className={`${bgColor} ${textColor} md:w-1/2 p-6 sm:p-10 rounded-md shadow-md`}
            >
              <h2 className="text-xl sm:text-2xl font-semibold mb-4">
                {title}
              </h2>
              {content &&
                content.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mb-3 text-justify text-sm sm:text-base"
                  >
                    {paragraph}
                  </p>
                ))}
              {listItems && (
                <ul className="list-disc pl-5 space-y-3 text-sm sm:text-base">
                  {listItems.map((item, i) => {
                    const [strong, ...rest] = item.split(":");
                    return (
                      <li key={i}>
                        <strong>{strong}:</strong>{" "}
                        {rest.length > 0 ? rest.join(":").trim() : ""}
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          </section>
        )
      )}
    </div>
  );
}
