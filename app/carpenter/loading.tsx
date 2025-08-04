import RedSection from '@/components/RedSection'
import React from 'react'

const Loading = () => {
  return (
      <>
          <RedSection title="Plumber in Nepal" />
          <section className="w-full bg-white text-black pt-10">
            <div className="max-w-screen-xl mx-auto px-3 sm:px-6 md:px-8 lg:px-36 py-4">
               <h1>Loading...</h1>
            </div>
          </section>
          <section className="w-full pt-10 pb-10 border-b border-gray-300"></section>
        </>
  )
}

export default Loading