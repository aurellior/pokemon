import React from "react";
import Logo from "../assets/logo.webp";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="flex items-center w-full px-[60px] py-[24px] justify-between fixed z-50  text-[18px] font-inter">
      <div className="flex flex-row items-center font-semibold text-[24px]">
        <img
          className="w-[40px] h-[40px] cursor-pointer mr-[16px] "
          src={Logo}
          alt="Pokemon Logo"
        />
        Pokémon
      </div>
      <div className="flex items-center gap-6">
        <ion-icon
          onclick="onToggleMenu(this)"
          name="menu"
          class="text-3xl cursor-pointer md:hidden"
        ></ion-icon>
      </div>
      <div className="nav-links duration-500 md:static absolute bg-transparent md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
        <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 md:visible invisible">
          <li>
            <Link to="/" className="text-black hover:text-[#ED1B24]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/mainpoke" className="text-black hover:text-[#ED1B24]">
              Pokédex
            </Link>
          </li>
          <li>
            <a className="text-black hover:text-[#ED1B24]" href="#news">
              News
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
