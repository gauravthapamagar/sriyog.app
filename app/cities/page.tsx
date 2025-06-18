import React from "react";
import RedSection from "@/components/RedSection";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Cities | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const cities = [
  { name: "Biratnagar", img: "biratnagar.png" },
  { name: "Kathmandu", img: "kathmandumain.png" },
  { name: "Pokhara", img: "pokhara.jpg" },
  { name: "Bharatpur", img: "bharatpur.png" },
  { name: "Birgunj", img: "birgunj.jpg" },
  { name: "Janakpur", img: "janakpur.png" },
  { name: "Dharan", img: "dharan.png" },
  { name: "Itahari", img: "itahari.jpg" },
  { name: "Damak", img: "damak.jpg" },
];

const page = () => {
  return (
    <div>
      <RedSection title="Major Cities" />
      <section className="pt-12 pb-12 bg-white">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 text-center text-black">
          {/* Optional title */}
          {/* <h2 className="text-3xl font-bold mb-8">Top Cities</h2> */}

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cities.map((city, idx) => (
              <div key={idx} className="relative group">
                <Image
                  src={`/images/city/${city.img}`}
                  alt={`${city.name} City`}
                  width={200}
                  height={100}
                  priority
                  className="rounded w-full h-auto object-cover"
                />
                <Image
                  src="/images/city-mask.png"
                  alt="Mask"
                  width={400}
                  height={300}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-xl font-bold z-10">
                  <Link href="#" className="hover:underline">
                    {city.name}
                  </Link>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
