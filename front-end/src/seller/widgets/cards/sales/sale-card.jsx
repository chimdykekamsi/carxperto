
import { IoBagHandleOutline } from "react-icons/io5";

  
export function SaleCard({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg ">
      <div className="flex justify-between py-3 align-center text-primary-normal">
          <div>
              <IoBagHandleOutline className="font-[55px]"/>
          </div>
          <div className="" >
          <select name="" id="">
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
              <h3 className="text-gray-400">Sales</h3>
              <p className="text-black-900 text-xl ">$25,000</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">Voulme</h3>
              <p className="text-black-900 text-xl">10</p>
          </div>
          
          
      </div>
   </div>
  );
}