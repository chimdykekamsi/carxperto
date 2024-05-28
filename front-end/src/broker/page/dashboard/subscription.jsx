import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";


export function SubscriptionBroker() {
  
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
            <div className="w-[90%] bg-primary-normal text-white text-start px-3 py-3 rounded-md shadow-lg">
                <h1>Current Subscription Plan</h1>
                <p className="flex text-[25px]">$99/<h5 className="text-gray-400 text-[18px] pt-2">month</h5></p>
                <button className="bg-primary-light text-primary-normal px-3 py-2 mt-6 rounded-md"><Link to='/pricebroker'>Change Plan</Link></button>
            </div>

            <div className="flex lg:flex-row flex-col gap-8 ml-5 mt-6 ">
              <div className="lg:w-[43%] w-[90%] border mt-3 px-3 py-3 shadow-md">
                <div className="flex gap-2 text-start align-center">
                <IoIosCheckmarkCircleOutline className="mt-2 text-primary-normal text-[23px] font-bold" />
                 <h2 className="text-[23px] text-primary-normal font-bold">Access to listings</h2> 
                </div>
                <p className="text-start text-[15px] pt-3">
                Access to listings gives you to the ability to view, manage, and interact with listings of vehicles available for sale on the platform. Here's what access to listings entails:
                </p>
                <p>
                  <ol className="text-start py-3  text-[15px]">
                    <li>1. Viewing listings</li>
                    <li>2. Managing listings</li>
                    <li>3. Interacting with listings</li>
                    <li>3. Tracking Listing Performance</li>
                  </ol>
                </p>
              </div>
              <div className="lg:w-[43%] w-[90%] border mt-3 px-3 py-3 shadow-md">
                <div className="flex gap-2 text-start align-center">
                <IoIosCheckmarkCircleOutline className="mt-2 text-primary-normal text-[23px] font-bold" />
                 <h2 className="text-[23px] text-primary-normal font-bold">Featured Listings</h2> 
                </div>
                <p className="text-start text-[15px] pt-3">
                Featured listings are premium listings that receive special visibility and promotion on the platform. Here's what featured listings entail:
                </p>
                <p>
                  <ol className="text-start py-3  text-[15px]">
                    <li>1. Increased Visibility</li>
                    <li>2. Enhanced Exposure</li>
                    <li>3. Priority Placement</li>
                    <li>4. Increased Engagement</li>
                  </ol>
                </p>
              </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 ml-5 mt-6 mb-6">
              <div className="lg:w-[43%] w-[90%] border mt-3 px-3 py-3 shadow-md">
                <div className="flex gap-2 text-start align-center">
                <IoIosCheckmarkCircleOutline className="mt-1 text-primary-normal text-[23px] font-bold" />
                 <h2 className="text-[19px] text-primary-normal font-bold">Unlimited access to customer care </h2> 
                </div>
                <p className="text-start text-[15px] pt-3">
                Unlimited access to customer care service means that you can have unrestricted and continuous access to support and assistance from the platform's customer care team. Here's what unlimited access to customer care service entails
                </p>
                <p>
                  <ol className="text-start py-3  text-[15px]">
                    <li>1. 24/7 Support</li>
                    <li>2. Multiple Communication Channels</li>
                    <li>3. Prompt Response Times</li>
                    <li>4. Dedicated Support Representatives</li>
                  </ol>
                </p>
              </div>
              <div className="lg:w-[43%] w-[90%] border mt-3 px-3 py-3 shadow-md">
                <div className="flex gap-2 text-start align-center">
                <IoIosCheckmarkCircleOutline className="mt-2 text-primary-normal text-[23px] font-bold" />
                 <h2 className="text-[23px] text-primary-normal font-bold">Online helpline for buyers</h2> 
                </div>
                <p className="text-start text-[15px] pt-3">
                An online helpline for buyers is a dedicated support service provided by the platform to assist buyers in their car purchasing journey. Here's what an online helpline for buyers entails:
                </p>
                <p>
                  <ol className="text-start py-3  text-[15px]">
                    <li>1. Accessible Support</li>
                    <li>2. Live Chat or Messaging</li>
                    <li>3. Dedicated Support Team</li>
                    <li>4. Guidance and Advice</li>
                  </ol>
                </p>
              </div>
            </div>
        </div>
    </div>   
    </div>
   
  );
}

export default SubscriptionBroker;
