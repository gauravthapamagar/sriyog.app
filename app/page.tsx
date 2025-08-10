import React from "react";
import Image from "next/image";
import CallbackForm from "@/components/landingPage/CallBackForm";
import { FiCamera, FiMapPin } from "react-icons/fi";
import SearchForm from "@/components/landingPage/SearchForm";


export default function Home() {
  return (
    <>
    <main className="bg-gray-100">
      <div className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-center text-white">
        
        <Image
          src="/images/home/pgbg.jpg"
          alt="A scenic view of Kathmandu with temples and mountains in the background"
          layout="fill"
          objectFit="cover"
          className="z-0"
          priority 
        />
        
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        
        <div className="w-full max-w-screen-2xl mx-auto">
          <div className="relative w-full z-20 flex flex-col items-center justify-center">
           
          <SearchForm />
        </div>

        <div className="absolute bottom-4 right-4 z-20 text-white/80 text-xs sm:text-sm">
           <div className="flex items-center gap-2 mb-1">
                <FiMapPin />
                <span>Pashupatinath | Kathmandu</span>
           </div>
           <div className="flex items-center gap-2">
                <FiCamera />
                <span>Photo Source: © Prakash Thapa</span>
           </div>
        </div>
        </div>

      </div>

      <CallbackForm />

    </main>
  

    </>
  );
}
