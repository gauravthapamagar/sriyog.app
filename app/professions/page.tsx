import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Professions | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const professions = [
  { img: "electrician.png", title: "Electrician" },
  { img: "plumber.png", title: "Plumber" },
  { img: "motorcycle-repair.png", title: "Motorcycle Repair" },
  { img: "pandit.png", title: "Pandit" },
  { img: "carpenter.png", title: "Carpenter" },
  { img: "event-planner.png", title: "Event Planner" },
  { img: "painter.png", title: "Painter" },
  { img: "false-ceiling.png", title: "False Ceiling" },
  { img: "handpump.png", title: "Hand Pump Repair" },
  { img: "business-consultant.png", title: "Business Consultant" },
  { img: "catering.png", title: "Catering" },
  { img: "civil-contractor.png", title: "Civil Contractor" },
  // { img: "fancy-store.png", title: "Fancy Store" },
  { img: "grill-shutter.png", title: "Grill Shutter" },
  // { img: "grocery.png", title: "Grocery" },
  // { img: "hardware-suppliers.png", title: "Hardware Suppliers" },
  { img: "marketing.png", title: "Marketing" },
  // { img: "optician.png", title: "Optician" },
  { img: "tailoring.png", title: "Tailoring" },
  { img: "thekedar.png", title: "Thekedar" },
  { img: "aluminium.png", title: "Aluminium Fabricator" },
  { img: "interior-decorator.png", title: "Interior Decorator" },
];

export default function FeaturesSection() {
  return (
    <>
      <RedSection title="SRIYOG Professions" />
      <section className="w-full bg-white text-black pt-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-black">
            {professions.map((item, index) => (
              <div
                key={index}
                className="bg-gray-100 shadow-md rounded-xl min-h-[100px] border border-gray-200 flex flex-col justify-center hover:shadow-xl items-center text-center rounded-lg p-4 hover:shadow-md hover:bg-gray-100 transition"
              >
                <Link
                  href={`professions/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                >
                  <Image
                    src={`/images/services/${item.img}`}
                    alt={`${item.title} Icon`}
                    width={50}
                    height={50}
                    className="mx-auto mb-2"
                  />
                  <span className="text-sm sm:text-base font-medium mt-2 block hover:text-[#8b1414]">
                    {item.title}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
  );
}
