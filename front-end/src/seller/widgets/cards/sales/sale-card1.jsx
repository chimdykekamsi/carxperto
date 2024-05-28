
import { BsFillPeopleFill } from "react-icons/bs";

  
export function SaleCard1({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
      <div className="flex justify-between py-3 align-center text-white ">
          <div>
              <BsFillPeopleFill className="font-[55px]"/>
          </div>
          <div className="" >
          <select name="" id="" className="text-primary-normal">
              <option value="">this week</option>
              <option value="">one month</option>
              <option value="">3 month</option>
              <option value="">6 months</option>
              <option value="">year</option>
          </select>
          </div>
      </div>
      <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-3 mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">Customer</h3>
              <p className="text-white text-xl ">103</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">Active</h3>
              <p className="text-white text-xl">13</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400 text-bold">Active</h3>
              <p className="text-white text-xl">0</p>
          </div>
          
      </div>
   </div>
  );
}