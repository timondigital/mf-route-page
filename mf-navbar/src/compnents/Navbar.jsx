import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const activeClass = ({ isActive }) => {
    return ` py-2 rounded-md text-sm font-medium ${
      isActive
        ? "bg-gray-900 text-white"
        : "text-gray-300 hover:bg-gray-700 hover:text-white"
    }`;
  };

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink to="/" className="text-lg text-gray-300">
              DB App
            </NavLink>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                <NavLink
                  to="/home"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/personajes"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  Personajes
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) => activeClass(isActive)}
                >
                  About
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile menu, show/hide based on menu state. */}
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
          <NavLink
            to="/home"
            className={({ isActive }) => activeClass(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/personajes"
            className={({ isActive }) => activeClass(isActive)}
          >
            Personajes
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => activeClass(isActive)}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
