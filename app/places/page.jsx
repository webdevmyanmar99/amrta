import Carousel from "../carouseluiplace";

async function getPlaces() {
  const places = await fetch(
    "http://139.59.246.244/place/getplacebylimit/Place/15",
    { cache: "no-store" }
  );
  return await places.json();
}
// hi there
export default async function Places() {
  const places = await getPlaces();

  return (
    <div>
      <div className="flex justify-between items-center mt-2">
        <h2 className="text-sm text-gray-800 font-bold">Most visited places</h2>
        <h2 className="text-xs text-gray-600 font-bold">See More...</h2>
      </div>
      <Carousel fetchdata={places} />
    </div>
  );
}
