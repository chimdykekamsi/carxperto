import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

function Features() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownButtonRef = useRef(null);

  // Close dropdown when clicking outside the button
  useEffect(() => {
    const handleClickOutside = event => {
      if (
        dropdownButtonRef.current &&
        !dropdownButtonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative inline-block items-center text-primary-dark hover:text-secondary-normal text-center">
        {/* Trigger button */}
        <button
          ref={dropdownButtonRef}
          onClick={toggleDropdown}
          className="flex items-center text-primary-dark px-4 py-2 rounded-md focus:outline-none hover:text-secondary-normalhover"
        >
          Features <FaAngleDown className=" font-extralight" />
        </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white border border-gray-300 py-2 rounded-md shadow-md">
          <Link to="/feature" className="block px-4 py-2 text-gray-900 hover:bg-primary-normalhover hover:text-accent-white">Features</Link>
          <Link to="/car-apprasial" className="block px-4 py-2 text-gray-900 hover:bg-primary-normalhover hover:text-accent-white">Car Appraisal</Link>
          <Link to="/car-insurance" className="block px-4 py-2 text-gray-900 hover:bg-primary-normalhover hover:text-accent-white">Car Insurance</Link>
          <Link to="/dashboard/home" className="block px-4 py-2 text-gray-900 hover:bg-primary-normalhover hover:text-accent-white">Sellers</Link>
          <Link to="/car-broker" className="block px-4 py-2 text-gray-900 hover:bg-primary-normalhover hover:text-accent-white">Car Broker</Link>
          <Link to="/car-category" className="block px-4 py-2 text-gray-900 hover:bg-primary-normalhover hover:text-accent-white">Car Category</Link>
        </div>
      )}
    </div>
    </div>
  );
}

export default Features;
