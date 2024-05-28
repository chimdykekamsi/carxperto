import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const PricementBroker = () => {
    const [showYearly, setShowYearly] = useState(false);

    const toggleYearly = () => {
      setShowYearly(true);
    };
  
    const toggleMonthly = () => {
      setShowYearly(false);
    };
      
  return (
    <div className="sm:flex sm:flex-col sm:align-center p-10">
      <div className="lg:max-w-[1122px]   mx-auto mt-1 mb-1 p-2 lg:p-0">
            <h1 className="text-3xl text-primary-normal font-bold mb-5">Choose Your Plan</h1>
            
        </div>
        <div className="relative self-center border border-primary-normal bg-gray-100 rounded-lg p-0.5 flex">
      <button
        type="button"
        className={`relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
          !showYearly ? 'bg-white border-gray-50 text-gray-900 shadow-sm' : 'border-transparent text-slate-900'
        }`}
        onClick={toggleMonthly}
      >
        Monthly billing
      </button>
      <button
        type="button"
        className={`ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 ${
          !showYearly ? 'border-transparent text-slate-900' : 'bg-white border-slate-50 text-slate-900 shadow-sm'
        }`}
        onClick={toggleYearly}
      >
        Yearly (25% off)
      </button>
    </div>
  {
    !showYearly && (
        <div  className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
        <div className="border border-primary-normal rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-primary-normal">Starter</h2>
            
            <p className="mt-8 ">
              <span className="text-4xl font-bold text-primary-normal tracking-tighter">
                $5
              </span>
              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            
          </div>
          <div className="pt-6 pb-12 px-6"> 
            <ul  className="mt-4 space-y-3 mb-12">
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
              
                <span className="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-start text-slate-700">
                  50 conversion actions included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
            <Button className=" bg-primary-normal text-white  hover:bg-secondary-normalhover  mt-[10px]">
            <a
            href="/sign-up"
            
          >
            Choose Plan
          </a>
            </Button>
            
          </div>
          
        </div>
        <div className="border bg-primary-light border-primary-normal rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-primary-normal">Pro</h2>
            
            <p className="mt-8 ">
              <span className="text-4xl font-bold text-primary-normal tracking-tighter">
                $15
              </span>
              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            
          </div>
          <div className="pt-6 pb-12 px-6"> 
            <ul  className="mt-4 space-y-3 mb-12">
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
              
                <span className="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-start text-slate-700">
                  50 conversion actions included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
            <Button className=" bg-primary-normal text-white  hover:bg-secondary-normalhover  mt-[10px]">
            <a
            href="/sign-up"
            
          >
            Choose Plan
          </a>
            </Button>
          </div>
          
        </div>
        <div className="border border-primary-normal rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-primary-normal">Professionals</h2>
            
            <p className="mt-8 ">
              <span className="text-4xl font-bold text-primary-normal tracking-tighter">
                $45
              </span>
              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            
          </div>
          <div className="pt-6 pb-12 px-6"> 
            <ul  className="mt-4 space-y-3 mb-12">
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
              
                <span className="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700 text-start">
                  50 conversion actions included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
            <Button className=" bg-primary-normal text-white  hover:bg-secondary-normalhover  mt-[10px]">
            <a
            href="/sign-up"
            
          >
            Choose Plan
          </a>
            </Button>
          </div>
          
        </div>
        
      </div>
    )
  }
  {
    showYearly && (
        <div  className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-5xl md:mx-auto xl:grid-cols-3">
        <div className="border border-primary-normal rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-primary-normal">Starter</h2>
            
            <p className="mt-8 ">
              <span className="text-4xl font-bold text-primary-normal tracking-tighter">
                $50
              </span>
              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            
          </div>
          <div className="pt-6 pb-12 px-6"> 
            <ul  className="mt-4 space-y-3 mb-12">
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
              
                <span className="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  50 conversion actions included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
            <Button className=" bg-primary-normal text-white  hover:bg-secondary-normalhover  mt-[10px]">
            <a
            href="/sign-up"
            
          >
            Choose Plan
          </a>
            </Button>
          </div>
          
        </div>
        <div className="border bg-primary-light border-primary-normal rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-primary-normal">Pro</h2>
            
            <p className="mt-8 ">
              <span className="text-4xl font-bold text-primary-normal tracking-tighter">
                $150
              </span>
              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            
          </div>
          <div className="pt-6 pb-12 px-6"> 
            <ul  className="mt-4 space-y-3 mb-12">
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
              
                <span className="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  50 conversion actions included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
            <Button className=" bg-primary-normal text-white  hover:bg-secondary-normalhover  mt-[10px]">
            <a
            href="/sign-up"
            
          >
            Choose Plan
          </a>
            </Button>
          </div>
          
        </div>
        <div className="border border-primary-normal rounded-lg shadow-sm divide-y divide-slate-200">
          <div className="p-6">
            <h2 className="text-xl leading-6 font-bold text-primary-normal">Professionals</h2>
            
            <p className="mt-8 ">
              <span className="text-4xl font-bold text-primary-normal tracking-tighter">
                $450
              </span>
              <span className="text-base font-medium text-slate-500">/mo</span>
            </p>
            
          </div>
          <div className="pt-6 pb-12 px-6"> 
            <ul  className="mt-4 space-y-3 mb-12">
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
              
                <span className="text-base text-slate-700">
                  1 landing page included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">1,000 visits/mo</span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Access to all UI blocks
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  50 conversion actions included
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  5% payment commission
                </span>
              </li>
              <li className="flex space-x-3">
              <IoCheckmarkCircleOutline className='font-[54px] text-primary-normal mt-2'  color='primary-normal' />
                <span className="text-base text-slate-700">
                  Real-time analytics
                </span>
              </li>
            </ul>
            <Button className=" bg-primary-normal text-white  hover:bg-secondary-normalhover  mt-[10px]">
            <a
            href="/sign-up"
            
          >
            Choose Plan
          </a>
            </Button>
          </div>
          
        </div>
        
      </div>
    )
  }
  
</div>
  )
}

export default PricementBroker