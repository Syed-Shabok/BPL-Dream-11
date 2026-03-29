import React from "react";
import coinIcon from "../../assets/DoubleDollar.png";
import logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 py-5 flex items-center justify-between container mx-auto px-4">
      <div className="">
        <a className="btn btn-ghost flex items-center h-fit">
          <img src={logo} className="w-17" alt="Logo" />
        </a>
      </div>
      <div className="">
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
          <li>
            <button className="font-semibold border border-gray-300 text-[#131313] flex items-center gap-2 px-3 py-1 ">
              0 Coins
              <img src={coinIcon} className="h-5 w-5" alt="Coin Icon" />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
