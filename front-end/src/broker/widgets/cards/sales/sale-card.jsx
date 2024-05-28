import { IoBagHandleOutline } from "react-icons/io5";
import { TiEdit } from "react-icons/ti";
import { Link } from "react-router-dom";
import { PiCertificateThin } from "react-icons/pi";
import { TfiCup } from "react-icons/tfi";
import { MdOutlineReviews } from "react-icons/md";
  
export function HomeCard({ color, icon, title, value, footer }) {
  return (
    <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg">
      <div className="flex justify-between py-3 align-center text-primary-normal">
        <div>
          <p className="p"></p>
          <h3>Jammie Chan</h3>
        </div>
        <div className="">
          <Link to="/dashboard/brokerprofileedit">
            <div className="flex gap-2 text-primary-normal"> 
              Edit profile <TiEdit className="mt-1" />
            </div>
          </Link>
        </div>
      </div>
      <div className="mb-4 grid gap-y-6 grid-cols-2 md:grid-cols-3 text-primary-normal">
        <div className="flex gap-2 items-center">
          <div>
            <PiCertificateThin fontSize={30} className="mt-2" />
          </div>
          <div className="text-start">
            <h3 className="text-gray-400 text-[13px]">Sales</h3>
            <p className="text-black-900 text-lg">$25,000</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <TfiCup fontSize={27} className="mt-2" />
          </div>
          <div className="text-start">
            <h3 className="text-gray-400 text-[13px]">Success rate</h3>
            <p className="text-black-900 text-lg">80%</p>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <div>
            <MdOutlineReviews fontSize={27} className="mt-2" />
          </div>
          <div className="text-start">
            <h3 className="text-gray-400 text-[13px]">Review</h3>
            <p className="text-black-900 text-lg">20+</p>
          </div>
        </div>
      </div>
    </div>
  );
}
