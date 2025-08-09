
import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import RedSection from "@/components/RedSection";

export const metadata: Metadata = {
  title: "All Professionals | SRIYOG App",
  description: "Explore all professional services available on the SRIYOG App.",
};


const professionalCategories = [
  {
    mainCategory: {
      title: "IT/Tech",
      icon: "/images/services/plumber.png", 
    },
    professions: [
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
  { img: "fancy-store.png", title: "Fancy Store" },
  { img: "grill-shutter.png", title: "Grill Shutter" },
  { img: "grocery.png", title: "Grocery" },
  { img: "hardware-suppliers.png", title: "Hardware Suppliers" },
  { img: "marketing.png", title: "Marketing" },
  { img: "optician.png", title: "Optician" },
  { img: "tailoring.png", title: "Tailoring" },
  { img: "thekedar.png", title: "Thekedar" },
  { img: "aluminium.png", title: "Aluminium Fabricator" },
  { img: "interior-decorator.png", title: "Interior Decorator" },
    ],
  },

  {
    mainCategory: {
      title: "Teachers",
      icon: "/images/services/event-planner.png",
    },
    professions: [
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
    ],
  },
];


const ProfessionIcon = ({ icon, title }: { icon: string; title: string }) => (
  <div className="flex flex-col items-center justify-start text-center transition-transform duration-300 hover:scale-110 cursor-pointer">
    <div className="flex h-16 w-16 items-center justify-center">
        <Image
          src={icon} 
          alt={`${title} Icon`}
          width={48}
          height={48}
          className="object-contain"
        />
    </div>
    <span className="mt-2 text-sm font-medium text-gray-700">{title}</span>
  </div>
);

export default function AllProfessionalsPage() {
  return (
    <div className="bg-white">
       <RedSection title="SRIYOG Professions" />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* <h1 className="mb-12 text-3xl font-bold text-gray-800 sm:text-4xl">
          All Professionals
        </h1> */}

        {professionalCategories.map((category, index) => (
          <div key={index} className="mb-16">
            {/* Main Category Box */}
            <div className="mb-8">
              <div className="inline-flex h-32 w-48 flex-col items-center justify-center rounded-xl border-2 border-gray-300 p-4">
                 <Image
                    src={category.mainCategory.icon}
                    alt={`${category.mainCategory.title} Icon`}
                    width={50}
                    height={50}
                    className="object-contain"
                  />
                <span className="mt-2 text-base font-semibold text-gray-800">
                  {category.mainCategory.title}
                </span>
              </div>
            </div>

            {/* Grid of Professions */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-5">
              {category.professions.map((profession, pIndex) => (
              


                                <Link
                  href={`professions/${profession.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="block"
                >
                    <ProfessionIcon 
                 key={`${profession.title}-${pIndex}`}
                 icon={`/images/services/${profession.img}`} 
                   title={profession.title} 
                 />
                  {/* <span className="text-sm sm:text-base font-medium mt-2 block hover:text-[#8b1414]">
                    {profession.title}
                  </span> */}
                </Link>

                
                
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}