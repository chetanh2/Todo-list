import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between px-8 py-2">
      <ul className="flex justify-between items-center gap-6 uppercase">
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 underline underline-offset-4"
                : "text-black"
            }
            to={"/"}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 underline underline-offset-4"
                : "text-black"
            }
            to={"/about"}
          >
            About US
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 underline underline-offset-4"
                : "text-black"
            }
            to={"/contact-us"}
          >
            Contact Us
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? "text-red-500 underline underline-offset-4"
                : "text-black"
            }
            to={"/grocery"}
          >
            Grocery
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
