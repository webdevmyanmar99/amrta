"use client";
import Link from "next/link";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
// import { RxDotFilled } from "react-icons/rx";

export default function Towns() {
  const slides = [
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/62d587acc50f7.jpg",
      name: "Yangon",
      properties: 250,
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/63a1c6b7a91e5.jpg",
      name: "PyinOoLwin",
      properties: 150,
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/63a1c719c05b7.jpg",
      name: "Mandalay",
      properties: 120,
    },

    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632e859ccdcf6.jpg",
      name: "Kalaw",
      properties: 50,
    },
    {
      url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632e8782a9261.jpg",
      name: "Bagan",
      properties: 80,
    },
    // {
    //   url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632fce8fbdf60.jpg",
    // },
    // {
    //   url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632f1d87a21cd.jpg",
    // },
    // {
    //   url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632f2f5553e2d.jpg",
    // },
    // {
    //   url: "https://amrtago.sgp1.digitaloceanspaces.com/places/632f383e27bc3.jpg",
    // },
  ];

  return (
    <div className="max-w-[1400px] h-[280px] w-full p-2   mx-auto flex overflow-x-scroll no-scrollbar">
      {slides.map((slide, slideIndex) => (
        <Link href={`/towns/${slide.name}`} className="m-2 ">
          <div
            key={slideIndex}
            style={{ backgroundImage: `url(${slide.url})` }}
            className="w-[250px] h-[200px] bg-center bg-cover duration-500 "
          ></div>
          <h2 className="font-bold mt-1">{slide.name}</h2>
          <h2 className="text-gray-700">{slide.properties} properties</h2>
        </Link>
      ))}

      {/* Left Arrow */}
      {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      {/* Right Arrow */}
      {/* <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div> */}
    </div>

    // reserves
    //     <div className="max-w-[1400px] h-[480px] w-full m-auto pt-2 pb-10 px-4 relative group">
    //     <div
    //       style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    //       className="w-full h-full bg-center bg-cover duration-500"
    //     ></div>
    //     {/* Left Arrow */}
    //     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
    //       <BsChevronCompactLeft onClick={prevSlide} size={30} />
    //     </div>
    //     {/* Right Arrow */}
    //     <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
    //       <BsChevronCompactRight onClick={nextSlide} size={30} />
    //     </div>
    //     <div className="flex top-4 justify-center py-2">
    //       {slides.map((slide, slideIndex) => (
    //         <div
    //           key={slideIndex}
    //           onClick={() => goToSlide(slideIndex)}
    //           className="text-2xl cursor-pointer"
    //         >
    //           <RxDotFilled className="text-orange-400 hover:text-orange-700 text-3xl" />
    //         </div>
    //       ))}
    //     </div>
    //   </div>
  );
}
