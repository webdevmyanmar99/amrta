import Image from "next/image";
import React from "react";

async function fetchHotelDetail(id) {
  const hoteldetail = await fetch(`http://139.59.246.244/place/${id}`, {
    cache: "no-store",
  });
  return await hoteldetail.json();
}

export default async function HotelDetails({ params }) {
  const data = await fetchHotelDetail(params.id);

  return (
    <div className="grid grid-cols-1 gap-3 m-5 md:grid-cols-2 items-center justify-center">
      <div
        key={data._id}
        className="p-3 mb-6 w-[350px] h-[250px] relative mx-auto"
      >
        <Image
          src={data?.images[0]?.pathimages}
          alt={data._id}
          // width={300}
          // height={250}
          fill
          className="rounded-lg w-full h-full pointer-events-none"
        />
      </div>
      <div className="mx-5 text-sm text-gray-700">
        <h2 className=" font-bold block min-h-[35px] align-middle text-center px-2 py-1">
          {data.localize.name[1]}
        </h2>
        <h5>
          {data.localize.address[1].town} /{" "}
          {data.localize.address[1].stateanddiv}
        </h5>

        <h5>{data.localize.description[1]}</h5>
      </div>
    </div>
  );
}
