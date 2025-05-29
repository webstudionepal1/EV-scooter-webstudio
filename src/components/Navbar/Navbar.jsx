import { useState } from "react";

import SearchAndContact from "./SearchAndContact";
import { Icon } from "@iconify/react";
import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";

const Navbar = ({ navMenuItemColor, logo, hamburgerMenuColor }) => {
  const [showMenu, setShowMenu] = useState(false);
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Scooters", path: "/scooters" },
    { name: "Loaders", path: "/loaders" },
    { name: "Parts", path: "/features" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <>
      <div className="relative z-40 px-[16px] xl:px-30 lg:px-5 py-[2px]">
        <div className="flex justify-between items-center bg-transparent h-[94px] w-full">
          <nav className="hidden xl:block">
            <ul
              className="gap-6 text-sm 2xl:text-base font-Montserrat font-semibold flex-row flex"
              style={{ color: `${navMenuItemColor}` }}>
              {navItems.map(({ name, path }) => (
                <NavLink
                  key={name}
                  to={path}
                  className={({ isActive }) =>
                    isActive
                      ? "cursor-pointer text-[#00C853]"
                      : "cursor-pointer hover:text-[#00C853]"
                  }>
                  {name}
                </NavLink>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center mt-6">
            <img
              src={logo}
              alt="Logo of Electric charge"
              className="w-[137px] h-[90px] object-contain hidden xl:block"
            />
            <span className="hidden xl:block text-green-600 font-bold text-xl text-center leading-tight -mt-4 tracking-wide">
              Green Power
              <br />
              <span className="text-sm font-medium text-gray-700 italic">
                by Nata Enterprises
              </span>
            </span>
          </div>

          <div className="flex xl:hidden items-center gap-4">
            <Icon
              icon="material-symbols:menu-rounded"
              width="40"
              height="40"
              className="xl:hidden"
              style={{ color: `${hamburgerMenuColor}` }}
              onClick={() => setShowMenu(true)}
            />
            <img
              src={logo}
              alt="Logo of Electric charge"
              className="w-[137px] h-[94px] object-contain hidden md:block"
            />
          </div>

          <SearchAndContact />
        </div>
      </div>

      {/* mobile nav */}
      {showMenu ? (
        <div
          className={`fixed top-0 h-screen z-80 w-[18rem] bg-gray-300 rounded-r-3xl transition-all duration-500 ease-in-out transform ${
            showMenu
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}>
          <div className=" flex gap-10 items-center h-[94px]">
            <Icon
              icon="material-symbols:close-rounded"
              width="40"
              height="40"
              className="xl:hidden"
              onClick={() => setShowMenu(false)}
            />
            {/* <img
              src={logo}
              alt="Logo of Electric charge"
              className="w-[94px] h-[94px] object-contain md:hidden absolute left-1/2 -translate-x-1/2"
            /> */}
          </div>

          <ul className="flex flex-col gap-6 text-sm 2xl:text-base font-Montserrat font-semibold items-center justify-center px-3">
            {navItems.map(({ name, path }) => (
              <NavLink
                key={name}
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? "cursor-pointer text-[#00C853]"
                    : "cursor-pointer hover:text-[#00C853]"
                }>
                {name}
              </NavLink>
            ))}
            <li className="md:hidden">
              <SearchBar />
            </li>
          </ul>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
