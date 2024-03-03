import React, { useContext } from "react";
import logo from "../../assets/img/SBAC_Bank_Ltd.png";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="flex justify-start items-center font-bold">
        <img src={logo} className="w-[200px] " alt="logo" />
        <ul
          className="flex flex-grow justify-center gap-10  
         items-center font-bold"
        >
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-gray-600 transition-colors duration-700 ease-in-out "
                  : "  "
              }
              style={{
                fontSize: "16px",
              }}
            >
              Home
            </NavLink>
          </li>
          {user?.role === "normalUser" && (
            <li>
              <NavLink
                to={"form"}
                className={({ isActive }) =>
                  isActive
                    ? "active text-[#8d2713] hover:text-gray-600 transition-colors duration-700 ease-in-out "
                    : "  "
                }
                style={{
                  fontSize: "16px",
                }}
              >
                Form
              </NavLink>
            </li>
          )}

          {user?.role === "normalUser" && (
            <li>
              <NavLink
                to={"Status"}
                className={({ isActive }) =>
                  isActive
                    ? "active text-[#8d2713] hover:text-gray-600 transition-colors duration-700 ease-in-out "
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
          )}

          <li>
            <NavLink
              to={"Manager"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-gray-600 transition-colors duration-700 ease-in-out "
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
              to={"it"}
              className={({ isActive }) =>
                isActive
                  ? "active text-[#8d2713] hover:text-gray-600 transition-colors duration-700 ease-in-out "
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
          {user.email && <button onClick={logOut}>Logout</button>}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
