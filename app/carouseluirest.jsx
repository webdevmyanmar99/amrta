"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Carousel({ fetchdata }) {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  console.log(fetchdata);
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div>
      <motion.div
        ref={carousel}
        className="overflow-hidden cursor-grab"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="flex"
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
        >
          {fetchdata.map((data) => (
            <motion.div
              key={data._id}
              className="p-3 mb-6 min-w-[200px] h-[250px] relative"
            >
              <Image
                src={data?.images[0]?.pathimages}
                alt={data._id}
                width={400}
                height={400}
                className="rounded-lg w-full h-full pointer-events-none"
              />
              <div className="flex-col items-center justify-between">
                <h2 className="text-xs text-gray-700 font-bold block min-h-[45px] align-middle text-center px-2 py-1">
                  {data.localize.name[0]}
                </h2>
              </div>
              <Link
                href={`/restaurents/${data._id}`}
                className="absolute bottom-4 right-4"
              >
                <div className="px-2 py-1 text-xs font-bold text-white border-2 border-white rounded-lg z-20">
                  view details
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
