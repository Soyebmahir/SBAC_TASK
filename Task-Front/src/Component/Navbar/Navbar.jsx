import React from "react";
import logo from "../../assets/img/SBAC_Bank_Ltd.png";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-start items-center font-bold">
        <img src={logo} className="w-[200px] " alt="logo" />
        <ul
          className="flex flex-grow justify-center gap-10  
         items-center font-bold"
        >
          <li>Home</li>
          <li>
            <NavLink
              to={"form"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-white transition-colors duration-700 ease-in-out "
                  : "  "
              }
              style={{
                fontSize: "16px",
              }}
            >
              Form
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"form"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-white transition-colors duration-700 ease-in-out "
                  : "  "
              }
              style={{
                fontSize: "16px",
                fontFamily: "Helvetica-W01-Light, Helvetica-W02-Light, ",
              }}
            >
              Status
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"form"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-white transition-colors duration-700 ease-in-out "
                  : "  "
              }
              style={{
                fontSize: "16px",
                fontFamily: "Helvetica-W01-Light, Helvetica-W02-Light, ",
              }}
            >
              Manager
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"form"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-white transition-colors duration-700 ease-in-out "
                  : "  "
              }
              style={{
                fontSize: "16px",
                fontFamily: "Helvetica-W01-Light, Helvetica-W02-Light, ",
              }}
            >
              IT
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
