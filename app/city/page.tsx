import React from 'react'
import RedSection from '@/components/RedSection'
import CitiesSection from '@/components/CitiesSection'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "City | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};



const page = () => {
  return (
    <div>
        <RedSection title="Major Cities"/>
        <CitiesSection />
    </div>
  )
}

export default page