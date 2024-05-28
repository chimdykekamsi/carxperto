import { MdOutlinePeopleOutline } from "react-icons/md";

  
export function TransactionCard11({ color, icon, title, value, footer }) {
  return (
   <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg ">
      <div className="flex justify-between py-3 align-center text-primary-normal">
         
          <div className="bg-[#e6f9f8] text-[#00c6bc] p-2 rounded-md">
              <MdOutlinePeopleOutline />
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
      <div className=" mb-6 flex justify-between mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-primary-normal">Completed Transactions</h3>
              <p className="text-black-900 text-xl ">23</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">Pending Transactions</h3>
              <p className="text-black-900 text-xl">3</p>
          </div>
         
          
      </div>
   </div>
  );
}