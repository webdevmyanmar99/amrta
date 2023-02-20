import Carousel from "../carouseluiplace";

async function getPlaces() {
  const places = await fetch(
    "http://139.59.246.244/place/getplacebypage/Place?page=0"
  );
  return await places.json();
}
// hi there
export default async function Places() {
  var places = await getPlaces();
  var [places] = await Promise.all([places]);
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
