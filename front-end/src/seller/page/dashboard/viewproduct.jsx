import React,{useState}from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import { IconButton } from "@material-tailwind/react";
import { useCopyToClipboard } from "usehooks-ts";
import { CheckIcon, DocumentDuplicateIcon } from "@heroicons/react/24/outline";

import { FaEye } from "react-icons/fa";

import { GiOctogonalEye } from "react-icons/gi";
import Cars from '../../../assets/CarE.jpg'

export function Viewproduct() {
    const [value, copy] = useCopyToClipboard();
    const [copied, setCopied] = useState(false);
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
        <div className=" mb-6  flex justify-between mr-4">
            <div>
                <h3 className="text-3xl text-primary-normal pb-3 text-start">Audi Quattro 2020</h3>
                <p className="flex gap-2 text-gray-400 pb-2"><h3 className="text-primary-normal">Date Added:</h3> 12 March 2024 - 12:55 pm</p>
                <p className="flex gap-2 text-gray-400"><h3 className="text-primary-normal">Product URL:</h3> jannysmit.com/audi quattro<IconButton className="bg-primary-normal  h-[25px]"
                onMouseLeave={() => setCopied(false)}
                onClick={() => {
                    copy("jannysmit.com/audi quattro");
                    setCopied(true);
          }}
        >
          {copied ? (
            <CheckIcon className="h-5 w-5 text-white " />
          ) : (
            <DocumentDuplicateIcon className="h-5 w-5 text-white" />
          )}
        </IconButton></p>
            </div>
            <div className="flex gap-4 align-center">
                <div>
                    <button className="flex items-center gap-2 bg-secondary-normal text-white px-4 py-2 round-md">
                        {/* <IoMdAdd className="h-5 w-5" /> */}
                        Edit Product
                    </button>
                </div>
               <div>
                <button className="flex items-center gap-2 bg-red-500 text-white px-3 py-2 round-md ">
                        {/* <IoMdAdd className="h-5 w-5" /> */}
                        Delete Product
                    </button>
               </div>
                
            </div>
        </div>
        <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-4 mr-3">
            <div className="">
                <img src={Cars} className="object-cover w-[200px] h-[180px] rounded-md shadow-lg " alt="" />
            </div>
            <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg ">
      <div className="flex justify-between py-3 align-center text-primary-normal">
          <div>
              <FaEye className="font-[55px]"/>
          </div>
          <div className="" >
          <p className="text-secondary-normal bg-secondary-light py-1 px-3 rounded-md">Publish</p>
          </div>
      </div>
      <div className=" mb-6 flex justify-between mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">Price</h3>
              <p className="text-black-900 text-xl ">$25,000.00</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">instock</h3>
              <p className="text-black-900 text-xl">20</p>
          </div>
      </div>
   </div>
            <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg ">
      <div className="flex justify-between py-3 align-center text-primary-normal">
          <div>
              <GiOctogonalEye className="font-[55px]"/>
          </div>
          <div className="" >
          <select name="" id="">
              <option value="">All time</option>
              <option value="">one month</option>
              <option value="">3 month</option>
              <option value="">6 months</option>
              <option value="">year</option>
          </select>
          </div>
      </div>
      <div className=" mb-6 flex justify-between mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">Total order</h3>
              <p className="text-black-900 text-xl ">$25,000.00</p>
          </div>
      </div>
   </div>
            
   <div className="border border-primary-normal pt-4 pb-1 px-3 rounded-md shadow-lg ">
      <div className="flex justify-between py-3 align-center text-primary-normal">
          <div>
              <FaEye className="font-[55px]"/>
          </div>
          <div className="" >
          <select name="" id="">
              <option value="">All time</option>
              <option value="">one month</option>
              <option value="">3 month</option>
              <option value="">6 months</option>
              <option value="">year</option>
          </select>
          </div>
      </div>
      <div className=" mb-6 flex justify-between mt-5 text-primary-normal">
          <div className="text-start ">
              <h3 className="text-gray-400">Views</h3>
              <p className="text-black-900 text-xl ">1,200</p>
          </div>
          <div className="text-start ">
              <h3 className="text-gray-400">Favourite</h3>
              <p className="text-black-900 text-xl">23</p>
          </div>
      </div>
   </div>
        </div>
        
        
        </div>
    </div>
      
    </div>
   
  );
}

export default Viewproduct;
