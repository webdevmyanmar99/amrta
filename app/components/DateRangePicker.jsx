"use client";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function DateRangeComponent() {
  const router = useRouter();

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };
  const handleSelect = (ranges) => {
    setDate([ranges.selection]);
  };
  const handleSearch = () => {
    router.push("/hotels", { state: { destination, date, options } });
  };
  return (
    <div className="max-w-[1300px] grid grid-cols-1 lg:grid-cols-4 relative gap-0">
      <div className="flex items-center gap-2  w-full">
        <icon></icon>
        <input
          type={"text"}
          placeholder="Where are u going"
          onChange={(e) => setDestination(e.target.value)}
          className="text-gray-700 px-4 py-2 outline-none "
        />
      </div>
      <div className="flex items-center gap-2 w-full relative">
        <icon></icon>
        <span
          onClick={() => setOpenDate(!openDate)}
          className="min-w-[250px] text-center border-[1px]  px-4 py-2"
        >{`${format(date[0].startDate, "dd/MMM/yyyy")} - ${format(
          date[0].endDate,
          "dd/MMM/yyyy"
        )}`}</span>
        {openDate && (
          <DateRange
            ranges={date}
            onChange={(item) => setDate([item.selection])}
            months={2}
            direction={"horizontal"}
            moveRangeOnFirstSelection={false}
            editableDateInputs={true}
            minDate={new Date()}
            className="z-20 absolute top-12 left-0"
          />
        )}
      </div>
      <div className="flex items-center gap-2  w-full relative">
        <icon></icon>
        <span
          onClick={() => setOpenOptions(!openOptions)}
          className="block min-w-[250px] border-[1px] px-4 py-2"
        >{`${options.adult} adult . ${options.children} children . ${options.room} room`}</span>
        {openOptions && (
          <div className="absolute top-12 left-0 z-20 bg-white w-[250px]  border-red-800 flex-col gap-2 px-10 py-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-700">Adult</span>
              <div className="flex items-center gap-[5px] font-sm text-gray-900">
                <button
                  disabled={options.adult <= 1}
                  className="w-[30px] h-[30px]  cursor-pointer bg-white"
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.adult}</span>
                <button
                  className="w-[30px] h-[30px]  cursor-pointer bg-white"
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="optionText">Children</span>
              <div className="flex items-center gap-[5px] font-sm text-gray-900">
                <button
                  disabled={options.children <= 0}
                  className="w-[30px] h-[30px] border-1 cursor-pointer bg-white"
                  onClick={() => handleOption("children", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.children}</span>
                <button
                  className="w-[30px] h-[30px] border-1 cursor-pointer bg-white"
                  onClick={() => handleOption("children", "i")}
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-gray-700">Room</span>
              <div className=" border-orange-700 border-[1px]">
                <button
                  disabled={options.room <= 1}
                  className="w-[30px] h-[30px] border-1 cursor-pointer bg-white"
                  onClick={() => handleOption("room", "d")}
                >
                  -
                </button>
                <span className="optionCounterNumber">{options.room}</span>
                <button
                  className="w-[30px] h-[30px] border-1 cursor-pointer bg-white"
                  onClick={() => handleOption("room", "i")}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <button
        className=" text-orange-700 font-bold  min-w-[240px] py-2 bg-white"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
}
