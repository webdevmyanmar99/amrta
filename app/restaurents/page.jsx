import Carousel from "../carouseluirest";

async function getRestaurents() {
  const restaurents = await fetch(
    "http://139.59.246.244/place/nearbytype/96.4717/22.0385372498799207/Rest"
  );
  return await restaurents.json();
}

export default async function Restaurents() {
  var restaurents = await getRestaurents();
  var [restaurents] = await Promise.all([restaurents]);
  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm text-gray-800 font-bold">
          Restaurents in your area
        </h2>
        {/* <h2 className="text-xs text-gray-600 font-bold">See More...</h2> */}
      </div>
      <Carousel fetchdata={restaurents} />
    </div>
  );
}
