import Link from "next/link";
import { BiUserCircle } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import Search from "./components/Search";
const NavBar = () => {
  return (
    <div className="flex gap-2 items-center justify-between px-5 bg-gradient-to-r from-orange-400 to-orange-800 py-2 relative">
      <Link href="/">
        <img src="amrtagologo1.png" width={"45px"} height="45px" alt="logo" />
      </Link>
      <Search/>

      <div className="flex justify-between gap-3 items-center">
        <div>
          <BsBellFill
            size={25}
            color="white"
            className="hidden md:inline-block"
          />
          {/* that change */}
        </div>
        <div>
          <BiUserCircle size={25} color="white" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
