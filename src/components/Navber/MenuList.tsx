//
import React from "react";
import { FaGift } from "react-icons/fa6";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa6";

const MenuList = () => {
  return (
    <div className="hidden xl:flex items-center justify-evenly  h-16 ">
      {/* menu item list */}
      <div className="hover:text-green-500 h-16 hover:border-b-4 text-2xl font-medium  border-green-500 dropdown inline-block relative group px-2">
      <span className="flex items-center gap-4 group"> 
         Project Kits
        <span className=" rotate-90 group-hover:rotate-0 transition-transform duration-500 block"><FaAngleDown /></span>
      </span> 
       
        <div className="dropdown-content absolute hidden bg-white shadow-lg rounded w-40 z-10 mt-3 group-hover:block">
          <Link
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Link 1
          </Link>
        </div>
      </div>

      <div className="hover:text-green-500 h-16 hover:border-b-4 text-2xl font-medium  border-green-500 dropdown inline-block relative group px-2">
      <span className="flex items-center gap-4 group"> 
           Robotics
        <span className=" rotate-90 group-hover:rotate-0 transition-transform duration-500 block"><FaAngleDown /></span>
      </span> 
     
        <div className="dropdown-content absolute hidden bg-white shadow-lg rounded w-40 z-10 mt-3 group-hover:block">
          <Link
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Link 1
          </Link>
        </div>
      </div>

      <div className="hover:text-green-500 h-16 hover:border-b-4 text-2xl font-medium  border-green-500 dropdown inline-block relative group px-2">
      <span className="flex items-center gap-4 group"> 
         Components
        <span className=" rotate-90 group-hover:rotate-0 transition-transform duration-500 block"><FaAngleDown /></span>
      </span> 
       
        <div className="dropdown-content absolute hidden bg-white shadow-lg rounded w-40 z-10 mt-3 group-hover:block">
          <Link
            href="#"
            className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
          >
            Link 1
          </Link>
        </div>
      </div>

      <div className="hover:text-green-500 h-16 hover:border-b-4 text-2xl font-medium  border-green-500 dropdown inline-block relative group px-2">
        Sensors
      </div>

      <div className="hover:text-green-500 h-16 hover:border-b-4 text-2xl font-medium  border-green-500 dropdown inline-block relative group px-2">
        Innovation Kit
      </div>

      <div className="hover:text-green-500 h-16 hover:border-b-4 text-2xl font-medium  border-green-500 dropdown inline-block relative group px-2">
        Gadgets & Electronics
      </div>

      <div className=" text-2xl font-medium  h-16 self-start  flex  gap-3 text-orange-500  px-2">
        <FaGift className="text-3xl text-orange-500" />
        Offers
      </div>
    </div>
  );
};

export default MenuList;
