import Carousel from "../carouselui";

async function getHotels() {
  const hotels = await fetch(
    "http://139.59.246.244/place/getplacebylimit/Hotel/15"
  );
  return await hotels.json();
}

export default async function Hotels() {
  var hotels = await getHotels();
  var [hotels] = await Promise.all([hotels]);

  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm text-gray-800 font-bold">Hotels in your area</h2>
        <h2 className="text-xs text-gray-600 font-bold">See More...</h2>
      </div>
      <Carousel fetchdata={hotels} />
    </div>
  );
}
