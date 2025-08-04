import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { connectdb } from "@/lib/db";
import { ProfessionalUser } from "@/model";

export const metadata: Metadata = {
  title: "Plumber in Nepal | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};


export default async function PlumberCityPage({ params }: { params: Promise<{ profession: string }> }) {
    
    const { profession:prof } = await params;
    console.log('hi',prof)
    const profession = prof.replace(/-/g, " ");
    
    await connectdb();
    const professionals = await ProfessionalUser.find({ Profession: new RegExp(profession, 'i') }).lean();
    
    return (
         <>
      <RedSection title={` ${decodeURIComponent(profession).charAt(0).toUpperCase() + decodeURIComponent(profession).slice(1)} in Nepal`} />
      <section className="w-full bg-white text-black pt-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
          <div className="w-full flex justify-end p-4 px-0 py-4 -mt-12 mb-2">
            <Menu as="div" className="relative inline-block text-left">
              <div>
                <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50">
                  All Cities
                  <ChevronDownIcon
                    aria-hidden="true"
                    className="-mr-1 size-5 text-gray-400"
                  />
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <div className="py-1">
                  {['kathmandu','pokhara','chitwan','biratnagar','janakpur','birgunj','dharan'].map(city => (
                    <MenuItem key={city}>
                      <Link
                        href={`/professions/${prof}/${city}`}
                        className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                      >
                        {city.charAt(0).toUpperCase() + city.slice(1)}
                      </Link>
                    </MenuItem>
                  ))}
                </div>
              </MenuItems>
            </Menu>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 ">
            {professionals.length === 0 ? (
              <div className="col-span-full text-center py-10">{`No ${profession} services found.`}</div>
            ) : (
              professionals.map((item, index) => (
                <div
                  key={String(item._id)}
                  className="flex flex-col items-center text-center rounded-xl p-2 min-h-[400px] shadow-md border border-gray-300 bg-gray-100 hover:shadow-xl transition duration-300"
                >
                  <div
                    className=" w-full h-full flex flex-col items-center justify-center -mt-2"
                  >
                    <Image
                      src={`/images/defaultlogo.png`}
                      alt={`${item["First Name"]}${item?.["Last Name"]}`}
                      width={120}
                      height={120}
                      className="mx-auto mb-4 mt-2 rounded-full border border-gray-200"
                    />
                    <span className="text-lg font-semibold text-gray-800 mt-2 hover:text-[#8b1414] transition">
                      {item?.["First Name"]} {item?.["Last Name"]}
                    </span>
                    <span className="text-sm font-medium text-gray-600 mt-1">
                      {String(item?.Phone).slice(-10)}
                    </span>
                    <span className="text-lg font-bold text-gray-700 mt-1">
                      {item?.Profession}
                    </span>
                         
                    <span className="text-xs font-medium text-gray-700 mt-1">
                      {item?.City}
                    </span>

                    <div
                      className="mt-8 text-black border border-gray-300 hover:bg-[#8b1414] hover:text-white cursor-pointer transition duration-200 font-medium rounded-lg text-sm px-5 py-2 shadow-sm"
                    >
                      <a href={`tel:${String(item?.Phone).slice(-10)}`}> Call Now</a>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
    )

}