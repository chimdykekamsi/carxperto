import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import PricementBroker from "../../layouts/Price/Price";


export function Pricebroker() {
  
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
            <PricementBroker />
        </div>
    </div>
      
    </div>
   
  );
}

export default Pricebroker;
