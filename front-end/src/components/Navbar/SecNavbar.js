import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import Features from "./Features";
import Logo from "../../assets/Logo2.png"
import usercircle from "../../assets/UserCircle.png";
import { IoMdCloseCircleOutline } from "react-icons/io";

function SecNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleClickOutside = event => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <section className="bg-#FFFEF9 shadow-md w-full h-16 flex flex-row items-center justify-between px-12 relative">
      <Link to="/home"><img src={Logo} alt="logo" className="-ml-14 lg:-ml-10 w-50 h-40" /></Link>

        {/* Hamburger Icon */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="ml-44 block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <svg
              className={`h-6 w-6 fill-current ${isMenuOpen
                ? "hidden"
                : "block"}`}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            </svg>
          </button>
          <button
            onClick={closeMenu}
            className="ml-44 block text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          >
            <IoMdCloseCircleOutline
              className={`h-6 w-6 fill-current ${isMenuOpen
                ? "block"
                : "hidden"}`}
            />
          </button>
        </div>

        {/* Navigation Links */}
        <section
          ref={menuRef}
          className={`w-48 p-4 absolute z-10 top-16 lg:left-0 lg:top-0 left-[222px] md:left-[675px] bg-white lg:w-auto lg:p-0 lg:shadow-none shadow-lg lg:relative lg:flex lg:flex-row items-center justify-center lg:gap-14 ${isMenuOpen
            ? "block"
            : "hidden"}`}
        >
          <div
            className={`lg:flex lg:flex-row flex flex-col items-center gap-4 ${isMenuOpen
              ? "block"
              : "hidden"}`}
          >
            <Link
              to="/home"
              className="text-primary-dark hover:text-secondary-normalhover text-center lg:mr-4"
            >
              Home
            </Link>
            <Link
              to="/car-listing"
              className="text-primary-dark hover:text-secondary-normalhover text-center lg:mr-4 lg:flex lg:gap-1 gap-1"
            >
              Car<span className="ml-1 lg:ml-0">Listing</span>
            </Link>
            <Link
              to="/about-us"
              className="text-primary-dark hover:text-secondary-normalhover text-center lg:flex lg:gap-1 gap-1"
            >
              About<span className="ml-1 lg:ml-0">Us</span>
            </Link>

            <Features className="text-primary-dark hover:text-secondary-normalhover text-center " />
          </div>
        </section>

        <section className={`lg:${isMenuOpen ? "hidden" : "flex"} hidden`}>
          <img
            src={usercircle}
            alt="UserCircle"
            className="lg:w-10 lg:h-10 w-8 h-8"
          />
        </section>
      </section>
    </div>
  );
}

export default SecNavbar;
