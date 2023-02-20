import Link from "next/link";
import TownPlaceDetails from "./[placetype]/page";
import BacktoHome from "@/app/backtohome";

async function gethotelbytown(name) {
  const town = await fetch(
    `http://139.59.246.244/place/getplacebytown/${name}`,
    {
      cache: "no-store",
    }
  );

  return await town.json();
}

export default async function TownDetails({ params }) {
  const town = await gethotelbytown(params.name);
  console.log(town);
  return (
    <div>
      <BacktoHome />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 shadow-lg pb-3">
        <h1 className="font-bold text-orange-700 text-xl text-center hidden md:block">
          Properties: {town.count}
        </h1>
        <h1 className="font-bold text-orange-700 text-xl text-center">
          {params.name}
        </h1>

        <div className="flex justify-around items-center gap-3">
          <div className="px-2 py-1 text-white bg-orange-600 font-bold mr-5 hover:bg-orange-800 rounded-lg">
            <Link href={`/towns/${params.name}/Hotel`}>Hotels</Link>
          </div>
          <div className="px-2 py-1 text-white bg-orange-600 font-bold mr-5 hover:bg-orange-800 rounded-lg">
            <Link href={`/towns/${params.name}/Rest`}>Restaurents</Link>
          </div>
          <div className="px-2 py-1 text-white bg-orange-600 font-bold mr-5 hover:bg-orange-800 rounded-lg">
            <Link href={`/towns/${params.name}/Place`}>Attractions</Link>
          </div>
        </div>
      </div>

      <div className="px-5">
        {town.places.map((place) => (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center p-5 my-5">
            <div
              style={{ backgroundImage: `url(${place.images[0].pathimages})` }}
              className="w-[300px] h-[250px] bg-center bg-cover duration-500 mx-auto"
            />
            <div className="md:col-span-2 flex-col justify-start items-start">
              <h4 className="text-2xl font-bold text-gray-700">
                {place.localize.name[1]}
              </h4>
              <p className="text-gray-700 flex-grow">
                {place.localize.description[1]}
              </p>
              <p className="text-blue-700 text-sm font-semibold">
                {place.localize.address[1].fulladdress}{" "}
                {place.localize.address[1].township}{" "}
                {place.localize.address[1].stateanddiv}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
