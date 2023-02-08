async function getHotelDetails(id) {
  try {
    const res = await fetch(`http://139.59.246.244/place/${id}`, {
      cache: "no-store",
    });
    const hotel = await res.json();
    return hotel;
  } catch (error) {
    console.log(error);
  }
}

export default async function HotelDetails({ params }) {
  const hotelId = params.id;
  const hotel = await getHotelDetails(hotelId);
  console.log(hotel);
  return (
    <div className="flex-col">
      <h1 className="text-center text-gray-800 text-2xl p-5 font-bold">
        {hotel?.localize?.name[0]}
      </h1>
      <div className="sm:flex-col flex">
        <div className="p-3 mb-8 max-w-[500px] max-h-[450px] mx-auto">
          <img
            src={hotel?.images[0]?.pathimages}
            className="rounded-lg w-full h-full pointer-events-none"
          />
        </div>
        <div>
          <h2>{hotel.localize.address[1].fulladdress}</h2>
          <h2>{hotel.localize.address[1].town}</h2>
          <h2>{hotel.localize.address[1].township}</h2>
          <h2>{hotel.localize.address[1].fulladdress}</h2>
          <h2>{hotel.localize.description[1]}</h2>
          <h2>စျေးနှုန်း {hotel.price[0]} ကျပ်</h2>
        </div>
      </div>
      <div></div>
    </div>
  );
}
