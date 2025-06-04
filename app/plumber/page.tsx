import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plumber | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const professions = [
  { img: "/images/defaultlogo.png", title: "John Doe", phone: "9841234567", type: "Plumber", address: "Kathmandu" },
  { img: "/images/defaultlogo.png", title: "Smith Acharya", phone: "9807654321", type: "Plumber", address: "Kathmandu" },
  { img: "/images/defaultlogo.png", title: "Rajesh Pathak", phone: "9807654321", type: "Plumber", address: "Pokhara" },
  { img: "/images/defaultlogo.png", title: "Utsav Khadka", phone: "9807654321", type: "Plumber", address: "Kathmandu" },
  { img: "/images/defaultlogo.png", title: "Roshan Bahadur", phone: "9807654321", type: "Plumber", address: "Sunsari" },
  { img: "/images/defaultlogo.png", title: "Jiban Poudel", phone: "9807654321", type: "Plumber", address: "Pokhara" },
  { img: "/images/defaultlogo.png", title: "Janak Khadka", phone: "9807654321", type: "Plumber", address: "Rupandehi" },
  { img: "/images/defaultlogo.png", title: "Dipesh Parajuli", phone: "9807654321", type: "Plumber", address: "Makwanpur" },
  { img: "/images/defaultlogo.png", title: "Udaya Raj", phone: "9807654321", type: "Plumber", address: "Sunsari" },
];

export default function FeaturesSection() {
  return (
    <>
        <RedSection title="Plumber" />
      <section className="w-full bg-white text-black pt-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {professions.map((item, index) => (
                <div
            key={index}
            className="flex flex-col items-center text-center border border-gray-200 rounded-lg p-6 min-h-[450px] hover:shadow-md hover:bg-gray-100 transition"
            >
            <Link
                href={`/professions/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="block w-full h-full flex flex-col items-center justify-center mb-4"
            >
                <Image
                src={`${item.img}`}
                alt={`${item.title} Icon`}
                width={100}
                height={100}
                className="mx-auto mb-8 mt-8"
                />
                <span className="text-xl font-semibold mt-2 hover:text-[#8b1414]">
                {item.title}
                </span>
                <span className="text-sm font-medium mt-3">{item.phone}</span>
                <span className="text-xl font-bold mt-3">{item.type}</span>
                <span className="text-xl font-bold mt-3">{item.address}</span>
                <button
                type="button"
                className="mt-12 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-[#8b1414] hover:text-white cursor-pointer focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2"
                >
                Book Now
                </button>
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
