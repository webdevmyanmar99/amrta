import React from "react";

async function getPlaceDetails(id) {
  try {
    const res = await fetch(`http://139.59.246.244/place/${id}`, {
      cache: "no-store",
    });
    const place = await res.json();
    return place;
  } catch (error) {
    console.log(error);
  }
}

export default async function PlaceDetails({ params }) {
  const place = await getPlaceDetails(params.id);
  console.log(place);
  return (
    <div className="flex flex-col">
      <h1 className="text-center text-gray-800 text-2xl p-5 font-bold">
        {place?.localize?.name[0]}
      </h1>
      <div className="sm:flex-col flex">
        <div className="p-3 mb-8 max-w-[500px] max-h-[450px] mx-auto">
          <img
            src={place?.images[0]?.pathimages}
            className="rounded-lg w-full h-full pointer-events-none"
          />
        </div>
        <div className="w-full mx-auto ">
          <h2>{place?.localize?.address[1]?.fulladdress}</h2>
          <h2>{place.localize.address[1].town}</h2>
          <h2>{place.localize.address[1].township}</h2>
          <h2>{place.localize.address[1].fulladdress}</h2>
          <h2>{place.localize.description[1]}</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
