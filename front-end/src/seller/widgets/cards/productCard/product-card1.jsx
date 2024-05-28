

import { FaBars } from "react-icons/fa";

  
export function ProductCard1({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
      <div className="flex justify-between py-3 align-center text-white ">
          <div>
              <FaBars  className="font-[55px]   "/>
          </div>
          <div className="" >
            ...
          </div>
      </div>
      <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-2 mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">All Products</h3>
              <p className="text-white text-xl ">320</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">Active</h3>
              <p className="text-white text-xl">200</p>
          </div>
          
          
      </div>
   </div>
  );
}