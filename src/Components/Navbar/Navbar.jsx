import { AiOutlineLineChart } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { RiHome2Line } from "react-icons/ri";
import { NavLink } from "react-router";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="border-b border-base-300 bg-[#FFFFFF]">
      <div className="container mx-auto flex justify-between py-4 px-2 items-center">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-2 text-[#64748B] text-xs md:text-[16px] font-mono">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              (isActive ? "bg-[#244D3F] text-white" : "") +
              " flex items-center gap-1 p-1 md:p-2 rounded-md"
            }
          >
            <RiHome2Line /> Home
          </NavLink>
          <NavLink
            to={"/timeline"}
            className={({ isActive }) =>
              (isActive ? "bg-[#244D3F] text-white" : "") +
              " flex items-center gap-1 p-1 md:p-2 rounded-md"
            }
          >
            <FiClock /> Timeline
          </NavLink>
          <NavLink
            to={"/stats"}
            className={({ isActive }) =>
              (isActive ? "bg-[#244D3F] text-white" : "") +
              " flex items-center gap-1 p-1 md:p-2 rounded-md"
            }
          >
            <AiOutlineLineChart /> Stats
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
