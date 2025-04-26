import { Outlet, Link, NavLink } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <div className="flex justify-center px-8 py-4 shadow-lg bg-[#0F0F0F] ">
        <ul className="flex justify-between items-center gap-6 uppercase">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline underline-offset-4"
                  : "text-white"
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
                  : "text-white"
              }
              to={"/pagination"}
            >
              Pagination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline underline-offset-4"
                  : "text-white"
              }
              to={"/client-side-pagination"}
            >
              Client Side Pagination
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline underline-offset-4"
                  : "text-white"
              }
              to={"/starReview"}
            >
              Star with Hover
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline underline-offset-4"
                  : "text-white"
              }
              to={"/infiniteScroll"}
            >
              Infinite Scroll
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline underline-offset-4"
                  : "text-white"
              }
              to={"/transferList"}
            >
              Transfer List
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "text-red-500 underline underline-offset-4"
                  : "text-white"
              }
              to={"/countdownTimer"}
            >
              Countdown Timer
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <hr className="divider" /> */}
      <Outlet />
    </>
  );
};

export default Layout;
