import React from "react";

async function getRestaurentDetails(id) {
  try {
    const res = await fetch(`http://139.59.246.244/place/${id}`, {
      cache: "no-store",
    });
    const restaurent = await res.json();
    return restaurent;
  } catch (error) {
    console.log(error);
  }
}

export default async function RestaurentDetails({ params }) {
  const restaurent = await getRestaurentDetails(params.id);
  console.log(restaurent);
  return (
    <div className="flex-col">
      <h1 className="text-center text-gray-800 text-2xl p-5 font-bold">
        {restaurent?.localize?.name[0]}
      </h1>
      <div className="sm:flex-col flex">
        <div className="p-3 mb-8 max-w-[500px] max-h-[450px] mx-auto">
          <img
            src={restaurent?.images[0]?.pathimages}
            className="rounded-lg w-full h-full pointer-events-none"
          />
        </div>
        <div>
          <h2>{restaurent.localize.address[1].fulladdress}</h2>
          <h2>{restaurent.localize.address[1].town}</h2>
          <h2>{restaurent.localize.address[1].township}</h2>
          <h2>{restaurent.localize.address[1].fulladdress}</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
