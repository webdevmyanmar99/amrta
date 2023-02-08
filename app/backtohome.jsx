import Link from "next/link";
import React from "react";
import { MdOutlineArrowBack } from "react-icons/md";

export default function BacktoHome() {
  return (
    <Link href={"/"} className="flex gap-4 items-center">
      <MdOutlineArrowBack size={24} />
      Back
    </Link>
  );
}
