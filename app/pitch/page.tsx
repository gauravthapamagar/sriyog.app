import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pitch | SRIYOG App",
  description: "Learn about SRIYOG, its mission, and impact.",
};
const page = () => {
  return (
    <div>
      <section className="w-full border-b bg-foreground">
        <section className="container mx-auto py-5 pb-0 text-center">
          <h1 className="text-xl sm:text-2xl md:text-2xl lg:text-2xl font-semibold text-background mb-5">
            Pitch Deck
          </h1>
        </section>
      </section>
      <section className="container mx-auto mt-0 pt-0">
        <div className="relative pb-[40%] h-0 overflow-hidden max-w-full">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vSqzjiZR8-kGSStsO26UPbueZ3vZdYrTZ_maQxw5TeQaazVkZQHot9vgOFgbPX_KOtBQfb6JSdFRdLq/embed?start=false&loop=false&delayms=3000"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

export default page;
