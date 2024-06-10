"use client";
import { useState, useEffect } from "react";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

export default function CarouselCustomNavigation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Hide scrollbar on mount
    return () => {
      document.body.style.overflow = "auto"; // Restore scrollbar on unmount
    };
  }, []);

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Carousel
        className="relative w-screen h-screen overflow-hidden"
        navigation={({ length }) => (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50 flex gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => handleSlideChange(i)}
              />
            ))}
          </div>
        )}
      >
        <video
          src="/video1.mp4"
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
        <video
          src="/video2.mp4" // Example video source
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
        <video
          src="/video3.mp4" // Example video source
          className="h-full w-full object-cover"
          autoPlay
          loop
          muted
        />
      </Carousel>
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2 text-center">
        <h1 className="title text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl mb-4">
          Welcome to &quot;Recipe&quot; App
        </h1>
        <div className="flex gap-4 items-center justify-center">
          <Link href={"/recipy"}>
            <button className="bg-blue-500 text-white py-2 px-4 rounded-md">
              View Recipes
            </button>
          </Link>
          <Link href={"/gallery"}>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md">
              Explore Gallery
            </button>
          </Link>
          <Link
            href={"https://www.linkedin.com/in/suhrad-trambadiya-b11224238/"}
          >
            <button className="bg-purple-400 text-white py-2 px-4 rounded-md">
              Meet the Developer
            </button>
          </Link>
        </div>
        <p className="text-gray-300 text-center mt-8">
          &quot;Good food is the foundation of genuine happiness.&quot;
        </p>
      </div>
    </>
  );
}
