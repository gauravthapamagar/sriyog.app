import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700 text-sm">
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 pt-12 pb-0">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Grid Columns */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-10 w-full lg:w-3/4 sm:my-18 text-xs lg:text-sm md:xs pl-10 md:pl-0">
            {" "}
            {/**added ml-6 but need to make changes only on mobile responsiveness view */}
            {/* Column 1 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/how">How It Works</Link>
                </li>
                <li>
                  <Link href="/team">Team</Link>
                </li>
                <li>
                  <Link href="/press">Press</Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="inline-flex items-center gap-2"
                  >
                    Career
                    <span className="text-white text-xs bg-[#8b1414] px-2 py-0.5 rounded">
                      We're Hiring
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            {/* Column 2 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/vmgo">Mission / Vision</Link>
                </li>
                <li>
                  <Link href="/videos">Videos</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ / KnowBase</Link>
                </li>
                <li>
                  <Link href="/welcome">Welcome</Link>
                </li>
                <li>
                  <Link href="/media">Media Coverage</Link>
                </li>
              </ul>
            </div>
            {/* Column 3 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/feedback">Feedback</Link>
                </li>
                <li>
                  <Link href="/timeline">Timeline</Link>
                </li>
                <li>
                  <Link href="/features">Features</Link>
                </li>
                <li>
                  <Link href="/professions">Professions</Link>
                </li>
                <li>
                  <Link href="/cities">Cities</Link>
                </li>
              </ul>
            </div>
            {/* Column 4 */}
            <div>
              <ul className="space-y-2">
                <li>
                  <Link href="/join">
                    <Image
                      src="/images/join-now.png"
                      alt="Join Now"
                      width={64}
                      height={23}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="https://mail.yandex.com" target="_blank">
                    <Image
                      src="/images/mail.svg"
                      alt="Mail"
                      width={45}
                      height={24}
                    />
                  </Link>
                </li>
                <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/tos">Terms of Services</Link>
                </li>
                <li>
                  <Link href="/sitemap.xml">Sitemap</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Box */}
          <div className="w-full lg:w-1/3 bg-white shadow-md rounded-md p-5 border-t-4 border-[#781616]">
            {/* Logo */}
            <div className="flex items-center mb-4">
              <Image
                src="/images/logo.svg"
                alt="SRIYOG Logo"
                width={200}
                height={100}
                className="mr-2"
              />
            </div>

            {/* Address */}
            <div className="text-sm text-gray-700 space-y-3">
              <div className="flex">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 mt-1" />
                Rem.Work, Kamalpokhari, <br />
                Kathmandu, Nepal
              </div>

              {/* Phone with time */}
              <div>
                <FontAwesomeIcon
                  icon={faPhoneAlt}
                  className="mr-2 mt-1"
                  flip="horizontal"
                />
                <span className="text-xs text-[#781616] font-medium">
                  Calling Time : 10 AM to 5 PM NPT
                </span>
              </div>

              {/* Email */}
              <div>
                <FontAwesomeIcon icon={faEnvelope} className="mr-2 mt-1" />
                <Link href="mailto:info@sriyog.com" className="hover:underline">
                  app@sriyog.com
                </Link>
              </div>

              {/* Social contacts */}
              <div className="flex items-center space-x-2">
                <Image
                  src="/images/telegram.svg"
                  alt="Telegram"
                  width={18}
                  height={18}
                />
                <Image
                  src="/images/viber.svg"
                  alt="Viber"
                  width={18}
                  height={18}
                />
                <Image
                  src="/images/whatsapp.svg"
                  alt="WhatsApp"
                  width={18}
                  height={18}
                />
                <span className="text-sm ml-2">+977-9852024365</span>
              </div>
            </div>

            {/* 24-365 Call */}
            <div className="flex items-center text-gray-800">
              <Image
                src="/images/missed-call.svg"
                alt="Missed Call"
                width={22}
                height={22}
              />
              <Link
                href="tel:+9779852024365"
                className="ml-2 font-bold text-lg"
              >
                +977-98520<span className="text-lg font-bold">24365</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Banner */}
        <Image
          src="/images/footer/footer.png"
          alt="Landmark Silhouettes"
          width={1920}
          height={100}
          className="w-full object-cover block mt-4 -mb-2"
        />
      </div>
      <div className="w-full bg-black h-10 m-0 p-0"></div>
    </footer>
  );
};

export default Footer;
