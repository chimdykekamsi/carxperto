
import { BsFillPeopleFill } from "react-icons/bs";

  
export function HistoryTransCard({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
      <div className="flex justify-between py-3 align-center text-white ">
          <div>
          Total Transactions
          </div>
          <div className="" >
          <select name="" id="" className="text-white  bg-[#003b6d]">
              <option value="">this week</option>
              <option value="">one month</option>
              <option value="">3 month</option>
              <option value="">6 months</option>
              <option value="">year</option>
          </select>
          </div>
      </div>
      <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-2 mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">Transactions</h3>
              <p className="text-white text-xl ">1250</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400 text-[15px]">Total Revenue</h3>
              <p className="text-white text-xl">$3500</p>
          </div>
      </div>
      
   </div>
  );
}