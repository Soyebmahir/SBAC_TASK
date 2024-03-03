/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";

const Nav = ({ path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive, isPending }) =>
        isActive
          ? "active text-[#8d2713] hover:text-white transition-colors duration-700 ease-in-out "
          : "  "
      }
      style={{
        fontSize: "16px",
        fontFamily: "Helvetica-W01-Light, Helvetica-W02-Light, ",
      }}
    >
      {children}
    </NavLink>
  );
};

export default Nav;
