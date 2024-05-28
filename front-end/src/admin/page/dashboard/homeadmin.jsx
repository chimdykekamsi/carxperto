import React from 'react'
import Sidenav from '../../widgets/layout/sidenav'
import DashboardNavbar from '../../widgets/layout/dashboard-navbar'
import { TransactionCard } from '../../widgets/cards/customercard/transaction-card1'
import { TransactionCard11 } from '../../widgets/cards/customercard/transaction--card2'
import {Line }from'../../widgets/chart/line'
import { Revenue } from '../../widgets/chart/revenue'
import { Revenuelisting } from '../../widgets/chart/revenuelisting'
import { TransChart } from '../../widgets/chart/transaction'



export function Homeadmin() {
  return (
    <div className="">
      <DashboardNavbar />
      <div className="flex flex-row  overflow-hidden">
        <div className="">
        <Sidenav/>
        </div>
      <div className=" mt-7 w-[90%] lg:ml-[20%] ml-[15px]">
      <div className=" mb-6 grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2 mr-5">
        <TransactionCard />
        <TransactionCard11 />
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2 lg:mt-[50px] mt-[10px]">
        <Line />
        <Revenue/>
      </div>
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-2 lg:mt-[50px] mt-[10px]">
        <Revenuelisting />
        <TransChart/>
      </div>
    </div>
    </div>
      
    </div>
  )
}

export default Homeadmin