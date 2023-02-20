import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

export default function BacktoHome() {
  return (
    <Link href={"/"} className="flex gap-4 items-center px-4 pt-2 ">
      <MdOutlineArrowBack size={24} />
      <div className="px-2 py-1 bg-orange-700 text-white">Back</div>
    </Link>
  );
}
