"use client";
import React from "react";
import { useState } from "react";
import LocationMap from "@/components/LocationMap";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Link from "next/link";

//slide images
const slideImages = [
  "/images/cleaning/slide1.jpg",
  "/images/cleaning/slide2.jpg",
  "/images/cleaning/slide3.jpg",
  "/images/cleaning/slide4.jpg",
];
// Services data
const services = [
  {
    title: "House Cleaning",
    image: "/images/cleaning/standard-cleaning.webp",
  },
  {
    title: "Hotel Cleaning",
    image: "/images/cleaning/hotelcleaning.webp",
  },
  {
    title: "Office Cleaning",
    image: "/images/cleaning/officecleaning.png",
  },
];
const packages = [
  {
    title: "Room Cleaning",
    image: "/images/cleaning/roomcleaning.jpg",
    price: "NPR 3200",
  },
  {
    title: "Car Cleaning",
    image: "/images/cleaning/carcleaning.webp",
    price: "NPR 1200",
  },
  {
    title: "Garden Cleaning",
    image: "/images/cleaning/gardencleaning.webp",
    price: "NPR 2200",
  },
  {
    title: "Bike Cleaning",
    image: "/images/cleaning/bikecleaning.avif",
    price: "NPR 4200",
  },
  {
    title: "Kitchen Cleaning",
    image: "/images/cleaning/kitchencleaning.png",
    price: "NPR 5200",
  },
  {
    title: "Gym Cleaning",
    image: "/images/cleaning/gymcleaning.jpg",
    price: "NPR 6500",
  },
];
const faqData = [
  {
    question: "What cleaning services do you offer?",
    answer:
      "We offer a wide range of cleaning services including residential cleaning, commercial cleaning, deep cleaning, carpet cleaning, and move-in/move-out cleaning.",
  },
  {
    question: "How do I book a cleaning appointment?",
    answer:
      "You can book an appointment by calling our customer service number, sending us an email, or using the booking form available on our website.",
  },
  {
    question: "Are your cleaning products safe and eco-friendly?",
    answer:
      "Yes! We use environmentally friendly, non-toxic cleaning products that are safe for your family, pets, and the planet.",
  },
  {
    question: "What are your pricing and payment options?",
    answer:
      "Our pricing depends on the type and size of the cleaning service. We offer competitive rates and accept payments via cash, credit card, and digital wallets.",
  },
  {
    question: "Do you provide cleaning services on weekends or holidays?",
    answer:
      "Yes, we offer flexible scheduling including weekends and most public holidays to accommodate your needs.",
  },
];

export default function App() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
      <div className="w-full mx-auto">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-lg shadow-lg"
        >
          {slideImages.map((src, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-96 md:h-112">
                <Image
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="text-black text-3xl text-center font-bold mt-12">
        <h1>Maitidevi Cleaning Services</h1>
        <div className="flex items-center justify-center mt-3 gap-1">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
              fill="#FF532E"
            />
          </svg>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
              fill="#FF532E"
            />
          </svg>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
              fill="#FF532E"
            />
          </svg>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
              fill="#FF532E"
            />
          </svg>
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
              fill="#FF532E"
            />
          </svg>
        </div>
        <h2 className="mt-4">Major Services</h2>
      </div>

      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 mb-10 text-black">
        {services.map((service, index) => (
          <div key={index} className="rounded-md overflow-hidden">
            <div className="relative w-full h-48 rounded-md overflow-hidden">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center text-normal text-black">
              {service.title}
            </div>
          </div>
        ))}
      </div>
      <div className="text-black text-3xl text-center font-bold">
        <h1>FAQ</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 mt-10 mb-10">
        <div className="border border-gray-200 rounded-md divide-y divide-gray-200 bg-white">
          {faqData.map((item, index) => (
            <div key={index}>
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition"
                onClick={() => toggleAccordion(index)}
              >
                <span className="cursor-pointer hover:text-[#8b1414]">
                  {item.question}
                </span>
                <span className="text-xl font-bold cursor-pointer">
                  {activeIndex === index ? "−" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-700 whitespace-pre-line">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="text-black text-3xl text-center font-bold">
        <h1>Testimonials</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 mt-10 mb-10">
        <div className="flex md:flex-row flex-col gap-5">
          <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
            <Image
              className="h-20 w-20 rounded-full"
              src="/images/defaultlogo.png"
              alt="userImage1"
              width={200}
              height={200}
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              Donald Jackman
            </h2>
            <p className="text-sm text-gray-500">Graphic Designer</p>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-600">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>

          <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
            <Image
              width={200}
              height={200}
              className="h-20 w-20 rounded-full"
              src="/images/defaultlogo.png"
              alt="userImage2"
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              Richard Nelson
            </h2>
            <p className="text-sm text-gray-500">Content Creator</p>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-600">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>

          <div className="w-80 flex flex-col items-center border border-gray-300 p-10 rounded-lg">
            <Image
              width={200}
              height={200}
              className="h-20 w-20 rounded-full"
              src="/images/defaultlogo.png"
              alt="userImage3"
            />
            <h2 className="text-lg text-gray-900 font-medium mt-2">
              James Washington
            </h2>
            <p className="text-sm text-gray-500">Co-founder</p>
            <div className="flex items-center justify-center mt-3 gap-1">
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.524.464a.5.5 0 0 1 .952 0l1.432 4.41a.5.5 0 0 0 .476.345h4.637a.5.5 0 0 1 .294.904L11.563 8.85a.5.5 0 0 0-.181.559l1.433 4.41a.5.5 0 0 1-.77.559L8.294 11.65a.5.5 0 0 0-.588 0l-3.751 2.726a.5.5 0 0 1-.77-.56l1.433-4.41a.5.5 0 0 0-.181-.558L.685 6.123A.5.5 0 0 1 .98 5.22h4.637a.5.5 0 0 0 .476-.346z"
                  fill="#FF532E"
                />
              </svg>
            </div>
            <p className="text-center text-[15px] mt-3 text-gray-600">
              I've been using imagify for nearly two years, primarily for
              Instagram, and it has been incredibly user-friendly, making my
              work much easier.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black text-3xl text-center font-bold">
        <h1>Popular Packages</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 mt-10 mb-10">
        {packages.map((service, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="relative max-w-80 w-full cursor-pointer group overflow-hidden rounded-lg shadow-md">
              {/* Image with smooth zoom */}
              <Image
                className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                src={service.image}
                alt={service.title}
                width={320}
                height={192}
              />

              {/* Title overlay */}
              <div className="absolute bottom-4 left-0 right-0 px-4 text-lg text-white text-center drop-shadow-md">
                <p>{service.title}</p>
              </div>
            </div>

            <p className="text-black mt-4 text-xl">{service.price}</p>

            <Link href="/package">
              <button
                type="button"
                className="mt-2 text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-[#8b1414] hover:text-white cursor-pointer focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2"
              >
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>
      <div className="text-black text-3xl text-center font-bold">
        <h1>Location</h1>
      </div>
      <LocationMap />
      <div className="text-black text-3xl text-center font-bold mt-10">
        <h1>Helpline</h1>
      </div>
      <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 text-center pt-10 pb-10">
        <div className="flex flex-col lg:flex-row justify-center items-start gap-10">
          {/* Person 1 */}
          <div className="w-full lg:w-1/3 text-center px-4 text-black">
            <Image
              src="/images/contact/niranjan.png"
              alt="Niranjan Sharma"
              width={192}
              height={192}
              className="mx-auto rounded-full object-cover"
            />
            <p className="pt-4 font-semibold text-lg">Niranjan Sharma</p>
            <p className="text-gray-600">Company Owner</p>
            <a
              href="https://t.me/niranjanpm"
              target="_blank"
              className="mt-2 inline-block border border-[#8b1414] text-[#8b1414] px-4 py-1 rounded hover:bg-[#8b1414] hover:text-white transition"
            >
              Telegram
            </a>
          </div>

          {/* Person 2 */}
          <div className="w-full lg:w-1/3 text-center px-4 text-black">
            <Image
              src="/images/contact/aashish.png"
              alt="Aashis Sunar"
              width={192}
              height={192}
              className="mx-auto rounded-full object-cover"
            />
            <p className="pt-4 font-semibold text-lg">Aashis Sunar</p>
            <p className="text-gray-600">Company Manager</p>
            <a
              href="https://wa.me/9779852024365"
              target="_blank"
              className="mt-2 inline-block border border-[#8b1414] text-[#8b1414] px-4 py-1 rounded hover:bg-[#8b1414] hover:text-white transition"
            >
              WhatsApp
            </a>
          </div>

          {/* Person 3 */}
          <div className="w-full lg:w-1/3 text-center px-4 text-black">
            <Image
              src="/images/contact/surajjj.png"
              alt="Suraj Majhi"
              width={192}
              height={192}
              className="mx-auto rounded-full object-cover"
            />
            <p className="pt-4 font-semibold text-lg">Suraj Majhi</p>
            <p className="text-gray-600">Supervisor</p>
            <a
              href="https://t.me/sriyog"
              target="_blank"
              className="mt-2 inline-block border border-[#8b1414] text-[#8b1414] px-4 py-1 rounded hover:bg-[#8b1414] hover:text-white transition"
            >
              Telegram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
