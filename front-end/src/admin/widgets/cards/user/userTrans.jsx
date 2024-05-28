import { FaBasketballBall } from "react-icons/fa"; 
export function UserTrans({ color, icon, title, value, footer }) {
    return (
     <div className="border border-primary-normal pt-4 pb-1 px-3 text-white bg-primary-normal rounded-md shadow-lg">
        <div className="flex justify-between py-3 align-center text-white ">
            <div className="bg-[#3c5d79] p-2 rounded-md">
                <FaBasketballBall />
            </div>
        </div>
        <div className=" mb-6 grid gap-y-10 gap-x-6 grid-cols-2 mt-5 text-primary-normal">
            <div className="text-start ">
                <h3 className="text-gray-400 lg:text-[15px] ">All Users</h3>
                <p className="text-white text-xl ">350</p>
            </div>
            <div className="text-start ">
                <h3 className="text-gray-400">Active</h3>
                <p className="text-white text-xl">216</p>
            </div>
   
        </div>
     </div>
    );
  }