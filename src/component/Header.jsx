import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center w-full justify-around h-20">
      <h1 className="font-bold text-xl font-parizo">Comfort Boots</h1>
      <div className="flex">
        <ul className="flex gap-4 mr-8 items-center">
          <li className="transition-all ease-in-out hover:border-b hover:border-b-black">
            Home
          </li>
          <li className="transition-all ease-in-out hover:border-b hover:border-b-black">
            About
          </li>
          <li className="transition-all ease-in-out hover:border-b hover:border-b-black">
            Product
          </li>
          <li className="transition-all ease-in-out hover:border-b hover:border-b-black">
            Contact Us
          </li>
        </ul>
        <div className="flex gap-4">
          <NavLink to="/login" className="border border-black px-4 py-2">
            Login
          </NavLink>
          <NavLink
            to={"/register"}
            className="bg-black text-white px-4 py-2 border-black border "
          >
            Register
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
