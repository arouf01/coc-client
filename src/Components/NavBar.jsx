import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const menu = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/members">All Members</NavLink>
      </li>

      <li>
        <NavLink to="/war">War Info</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar relative bg-base-100 shadow-sm">
      {/* Logo and hamburger */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {menu}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">COC</a>
      </div>

      {/* Centered menu using absolute positioning */}
      <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{menu}</ul>
      </div>
    </div>
  );
};

export default NavBar;
