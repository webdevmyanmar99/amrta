"use client";
import { BiSearch } from "react-icons/bi";
// import DateRangeComponent from "./DateRangePicker";
export default function Search() {
  return (
    // <div className="absolute top-10 z-10 left-40">
    <div className="flex items-center max-w-[450px] mx-auto">
      <input
        type="text"
        placeholder="Search"
        className="px-4 py-2 rounded-l-full bg-white outline-none w-full"
      />
      <BiSearch className="h-10 w-10 font-bold bg-white rounded-r-full text-orange-700 px-2 cursor-pointer" />
    </div>
    // <DateRangeComponent />
    // </div>
  );
}
