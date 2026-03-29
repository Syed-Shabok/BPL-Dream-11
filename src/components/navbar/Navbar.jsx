import React from "react";
import coinIcon from "../../assets/DoubleDollar.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-5 flex items-center justify-between container mx-auto  lg:px-4">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Link</a>
            </li>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Fixture</a>
            </li>
            <li>
              <a>Teams</a>
            </li>
            <li>
              <a>Schedules</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost flex items-center h-fit">
          <img src={logo} className="w-13 md:w-15 lg:w-17" alt="Logo" />
        </a>
      </div>

      <div className="navbar-end hidden lg:flex items-center gap-2">
        <ul className="menu menu-horizontal px-1 text-base text-[#131313]/70">
          <li>
            <a>Link</a>
          </li>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>Fixture</a>
          </li>
          <li>
            <a>Teams</a>
          </li>
          <li>
            <a>Schedules</a>
          </li>
        </ul>
      </div>
      <button className="font-semibold border border-gray-300 rounded-md text-[#131313] flex items-center justify-center gap-2  w-30 lg:w-35 px-2 py-2">
        0 Coins
        <img src={coinIcon} className="h-5 w-5" alt="Coin Icon" />
      </button>
    </div>
  );
};

export default Navbar;
