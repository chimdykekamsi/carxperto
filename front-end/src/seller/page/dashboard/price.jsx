import React from "react";
import DashboardNavbar from "../../widgets/layout/dashboard-navbar";
import Sidenav from "../../widgets/layout/sidenav";
import Prices from "../../../pages/price";
import Pricement from "../../layouts/Price/Price";


export function Price() {
  
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
        <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
            <Pricement />
        </div>
    </div>
      
    </div>
   
  );
}

export default Price;
