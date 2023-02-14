import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import Search from "./components/Search";
const NavBar = () => {
  return (
    <div className="flex items-center justify-between px-5 bg-gradient-to-r from-orange-400 to-orange-800 py-2">
      <div className="text-white text-xl font-bold">
        <Link href={"/"}>
          Amrta <span className="text-blue-800 text-2xl font-bold">G</span>o
        </Link>
      </div>

      <Search />

      <div className="flex justify-between gap-3 items-center">
        <div>
          <BsBellFill size={25} color="white" />
        </div>
        <div>
          <BiUserCircle size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
