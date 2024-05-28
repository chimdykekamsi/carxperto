import React from 'react'
import './preference.css'

const Preference = () => {
  return (
    <div>
        <div className="flex justify-between mt-5 mb-5">
            <div>
                <h2 className='text-start lg:text-xl text-[10px] font-bold text-primary-normal'>Language Preference</h2>
                <p className='text-start w-[80%] lg:text-[14px] text-[7px] text-slate-500' >Select English as your preferred language for all app communications and interactions. Enjoy a seamless user experience with content presented in English, tailored to your language preference. </p>
            </div>
            <select class="block w-sm text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 px-1 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none" >
            <option value="week">Eng</option>
            <option value="month">Fre</option>
            <option value="year">spn</option>
            </select>
        </div>
        <div className="flex justify-between mt-5 mb-5">
            <div>
                <h2 className='text-start lg:text-xl text-[10px] font-bold text-primary-normal'>Timezone</h2>
                <p className='text-start w-[80%] lg:text-[14px] text-[7px] text-slate-5000' >Set your timezone  to ensure that all time-related information displayed in the app is accurate and aligned with your local time zone. </p>
            </div>
            <select class="block w-sm text-sm font-medium transition duration-75 border border-gray-800 rounded-lg shadow-sm h-9 focus:border-blue-600 focus:ring-1 focus:ring-inset focus:ring-blue-600 bg-none px-1" >
            <option value="week">Est</option>
            <option value="month">GMT</option>
            <option value="year">WST</option>
            </select>
        </div>
        <div className="flex justify-between mt-5 mb-5">
            <div>
                <h2 className='text-start lg:text-xl text-[10px] font-bold text-primary-normal'>Email Notifications</h2>
                <p className='text-start w-[80%] lg:text-[14px] text-[7px] text-slate-500' >Receive important updates, reminders, and notifications directly to your email inbox in English. Stay informed about new messages, account activity, and relevant information without having to constantly check the app. </p>
            </div>
            <label class="relative mb-5 cursor-pointer">
                <input type="checkbox" value="" class="peer sr-only" />
                <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
            </label>
        </div>
        <div className="flex justify-between mt-5 mb-5">
            <div>
                <h2 className='text-start lg:text-xl text-[10px] font-bold text-primary-normal'>Push Notifications</h2>
                <p className='text-start w-[80%] lg:text-[14px] text-[7px] text-slate-500' >Opt-out of receiving push notifications to your device. Enjoy uninterrupted browsing without the distraction of constant alerts. You can always check for updates within the app at your convenience. </p>
            </div>
            <label class="relative mb-5 cursor-pointer">
                <input type="checkbox" value="" class="peer sr-only" />
                <div class="peer h-5 w-9 rounded-full bg-gray-400 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-indigo-900 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-200"></div>
            </label>
        </div>
        
        
    </div>
  )
}

export default Preference