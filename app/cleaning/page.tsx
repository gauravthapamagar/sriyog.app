import Image from "next/image";
import RedSection from "@/components/RedSection";
import type { Metadata } from "next";
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import StarRating from "@/components/StarRating";
import { ProfessionalUser } from "@/model";
import { connectdb } from "@/lib/db";

export const metadata: Metadata = {
  title: "Cleaning Companies in Nepal | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};

const professions = [
  {
    name: "Sriyog Company",
    img: "/images/logo.png",
    city: "Kamalpokhari, Kathmandu",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    link: "/cleaning/maitidevi",
  },
  {
    name: "Cleaning Service Nepal",
    img: "/images/cleaning/companylogo/verisk.png",
    city: "Chabahil, Bhaktapur, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/csnepal",
  },
  {
    name: "Easy Facilities Pvt. Ltd.",
    img: "/images/cleaning/companylogo/ce.png",
    city: "Jarebar, Pokhara, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/easy-facilities",
  },
  {
    name: "Multiple Facility Service",
    img: "/images/cleaning/companylogo/advertising.png",
    city: "Baneshwor , Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/multiplefacility",
  },
  {
    name: "Clean Multipurpose Services",
    img: "/images/cleaning/companylogo/sigma.png",
    city: "Gaurighat, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/cleanservices",
  },
  {
    name: "Prime Multipurpose Services",
    img: "/images/cleaning/companylogo/nt.png",
    city: "Srijanachowk, Pokhara, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/primemultipurpose",
  },
  {
    name: "Smart Cleaning Services",
    img: "/images/cleaning/companylogo/itnepal.png",
    city: "Khusibhu, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/smartcleaning",
  },
  {
    name: "SpiderWalk Cleaning",
    img: "/images/cleaning/companylogo/rr.png",
    city: "Gongabu, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/spiderwalkcompany",
  },
  {
    name: "Kathmandu Pest Control",
    img: "/images/cleaning/companylogo/gt.png",
    city: "Basundhara, Kathmandu, Nepal",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",

    link: "/cleaning/kpcservice",
  },
];

export default async function FeaturesSection() {
  // await connectdb();
  // const data = await ProfessionalUser.distinct("Profession");
  // console.log(data)
  return (
    <>
      <RedSection title="Cleaning Companies in Nepal" />
      <section className="w-full bg-white text-black pt-10">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
          <div className="w-full flex justify-end p-4 px-0 py-4 -mt-12 mb-2"></div>
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
                  <MenuItem>
                    <a
                      href="/cleaning/kathmandu"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Kathmandu
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/cleaning/pokhara"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Pokhara
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/cleaning/chitwan"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Chitwan
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/cleaning/biratnagar"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Biratnagar
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/cleaning/janakpur"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Janakpur
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="birgunj"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Birgunj
                    </a>
                  </MenuItem>
                  <MenuItem>
                    <a
                      href="/cleaning/dharan"
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
                    >
                      Dharan
                    </a>
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {professions.map((item, index) => (
              <Link key={index} href={item.link}>
                <div
                  role="status"
                  className="space-y-8 flex flex-col items-center justify-center border border-gray-200 rounded-lg p-6 min-h-[500px] shadow-md border border-gray-200 bg-gray-100 hover:shadow-xl transition duration-300"
                >
                  <div className="flex items-center justify-center bg-gray-200 w-full h-48 rounded-sm ">
                    <Image
                      src={item.img}
                      alt={`${item.name} placeholder`}
                      width={400}
                      height={290}
                      className=" border border-gray-200 mx-auto mt-6 mb-6"
                    />
                  </div>
                  <div className="text-black mt-0 text-center text-lg font-semibold mb-2">
                    {item.name}
                  </div>
                  <StarRating rating={3} />
                  <div className="text-black -mt-2 text-center text-sm font-semibold mb-2">
                    {item.city}
                  </div>
                  <div className="text-black mt-0 text-center text-medium font-normal">
                    {item.description}
                  </div>
                  <button
                    type="button"
                    className="mt-8 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-[#8b1414] hover:text-white cursor-pointer focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2"
                  >
                    View More
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
    </>
  );
}
