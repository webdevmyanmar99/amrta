import Hotels from "./hotels/page";
import Places from "./places/page";
import Restaurents from "./restaurents/page";

import Banner from "./banner/page";
import Towns from "./towns/page";

export default function Home() {
  return (
    <main>
      <Banner />
      <div className="h-[3px] w-3/4 mx-auto bg-gradient-to-r from-orange-400 to-orange-800 rounded-full mt-2"></div>

      <h2 className="text-sm text-gray-800 font-bold mt-2">
        Popular destinations of Myanmar
      </h2>

      <Towns />
      <div className="h-[3px] w-3/4 mx-auto bg-gradient-to-r from-orange-400 to-orange-800 rounded-full mt-2"></div>
      <Places />
      <div className="h-[3px] w-3/4 mx-auto bg-gradient-to-r from-orange-400 to-orange-800 rounded-full mt-2"></div>
      <Hotels />
      <div className="h-[3px] w-3/4 mx-auto bg-gradient-to-r from-orange-400 to-orange-800 rounded-full"></div>
      <Restaurents />
    </main>
  );
}
