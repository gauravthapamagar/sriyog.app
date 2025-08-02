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





// async function getAllPlumbers(): Promise<PlumberData[]> {
//   const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3001';
//   const res = await fetch(`${baseUrl}/api/professionals/plumbers`, { cache: 'no-store' });
//   if (!res.ok) throw new Error('Failed to fetch plumbers');
//   return res.json();
// }


export default async function FeaturesSection() {
  // let plumbers: PlumberData[] = [];
  // let error: string | null = null;
  // try {
  //   plumbers = await getAllPlumbers();
  // } catch (err: any) {
  //   error = err.message || 'Unknown error';
  // }
  await connectdb();
  const plumbers = await ProfessionalUser.find({ Profession: /plumber/i }).lean();
  console.log(plumbers);

  return (
    <>
      <RedSection title="Plumber in Nepal" />
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
                        href={`/plumber/${city}`}
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
            {plumbers.length === 0 ? (
              <div className="col-span-full text-center py-10">No plumbers found.</div>
            ) : (
              plumbers.map((item, index) => (
                <div
                  key={String(item._id)}
                  className="flex flex-col items-center text-center rounded-xl p-2 min-h-[400px] shadow-md border border-gray-300 bg-gray-100 hover:shadow-xl transition duration-300"
                >
                  <Link
                    href={`/professions/${item?.["First Name"]}`}
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
                      {item?.Phone}
                    </span>
                    <span className="text-lg font-bold text-gray-700 mt-1">
                      {item?.Profession}
                    </span>
                    <span className="text-sm font-bold text-gray-700 mt-1">
                      {item?.Area}
                    </span>
                    <span className="text-xs font-medium text-gray-700 mt-1">
                      {item?.City}
                    </span>

                    <button
                      type="button"
                      className="mt-8 text-black border border-gray-300 hover:bg-[#8b1414] hover:text-white cursor-pointer transition duration-200 font-medium rounded-lg text-sm px-5 py-2 shadow-sm"
                    >
                      Book Now
                    </button>
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
  );
}
