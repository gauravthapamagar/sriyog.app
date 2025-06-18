"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/team", label: "Team" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <nav className="bg-white border-gray-200 shadow-md">
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4 flex items-center justify-between flex-nowrap overflow-hidden gap-2">
          <Link
            href="/"
            className="flex items-center space-x-1 rtl:space-x-reverse"
          >
            <Image
              src="/images/logo.svg"
              className="navlogo h-9 sm:h-10 md:h-12 lg:h-14"
              alt="SRIYOG Logo"
              width={150}
              height={150}
            />
            <span className="ime-pay self-center text-xs sm:text-sm md:text-base font-medium whitespace-nowrap text-black -ml-4 sm:-ml-2 md:ml-1">
              | App
            </span>
          </Link>

          <div
            className="hidden md:flex md:w-auto items-center gap-6"
            id="navbar-default"
          >
            <ul className="min-w-0 font-semibold text-[11px] sm:text-xs md:text-[11px] lg:text-sm  flex flex-nowrap p-4 md:p-0 mt-4 lg:ml-12 md:flex-row md:space-x-2 lg:space-x-3 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white max-w-full">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-3 text-gray-500 hover:text-[#8B1414] rounded md:bg-transparent lg:text-[14px] md:p-0 md:text-[13px] max-[1136px]:text-[10px] ${
                      path === item.href ? "text-[#8b1414]" : "text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex items-center space-x-2 md:space-x-2 mr-2 sm:mr-4 md:mr-6 lg:mr-10 max-[1103px]:mr-4 max-[1103px]:ml-4">
              <Link href="/join">
                <Image
                  src="/images/join-now.png"
                  className="h-8"
                  alt="Join Now"
                  width={80}
                  height={80}
                />
              </Link>
              <Link
                href="https://mail.yandex.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/mail.svg"
                  className="mail_Image h-8 ml-3"
                  alt="Mail"
                  width={80}
                  height={80}
                />
              </Link>
            </div>
          </div>

          <div className="md:hidden">
            <button
              id="hamburger"
              className="text-gray-900 focus:outline-none cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        id="menu"
        aria-hidden={!menuOpen}
        className={`md:hidden shadow-md bg-white text-sm font-medium overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 max-h-screen py-4" : "opacity-0 max-h-0"
        }`}
      >
        <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 text-black">
          <Link href="/" className="block py-2">
            Home
          </Link>
          <Link href="/about" className="block py-2">
            About
          </Link>
          <Link href="/team" className="block py-2">
            Team
          </Link>
          <Link href="/faq" className="block py-2">
            FAQ
          </Link>
          <Link href="/contact" className="block py-2">
            Contact
          </Link>
          <Link href="/join">
            <Image
              src="/images/join-now.png"
              className="h-8 mb-2"
              alt="Join Now"
              width={80}
              height={50}
            />
          </Link>
          <Link href="https://mail.yandex.com">
            <Image
              src="/images/mail.svg"
              className="h-8"
              alt="Mail"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
