import React from 'react'
import style from './profilecon.module.css'

const Profilecon = () => {
  return (
    <div className={style.container}>
        <div className="lg:mx-[36px] mx-[5px] flex justify-center lg:w-[121px] lg:h-[121px] w-[50px] h-[50px] bg-blue-300/20 rounded-full bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw4fHxwcm9maWxlfGVufDB8MHx8fDE3MTEwMDM0MjN8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-center bg-no-repeat">
              <div className="bg-white/90 rounded-full w-6 h-6 text-center lg:ml-28 ml-5 mt-4">
                <input
                  type="file"
                  name="profile"
                  id="upload_profile"
                  hidden="true"
                />
                <label htmlFor="upload_profile">
                  <svg
                    data-slot="icon"
                    className="w-6 h-5 text-blue-700"
                    fill="none"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z"
                    ></path>
                  </svg>
                </label>
              </div>
            </div>
          <div>
          <form>
        
        <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
          <div className="w-full  mb-1 mt-1">
            <label htmlFor="" className={`${style.label}`}>
              Full Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full  mb-1 lg:mt-1">
            <label htmlFor="" className={`  ${style.label}`}>
              User Name
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="UserName"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
          <div className="w-full  mb-1 mt-1">
            <label htmlFor="" className={`mb-1  ${style.label}`}>
              Email
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="Full Name"
            />
          </div>
          <div className="w-full  mb-1 lg:mt-1">
            <label htmlFor="" className={`mb-1  ${style.label}`}>
              Password
            </label>
            <input
              type="password"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="UserName"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
          <div className="w-full  mb-1 mt-1">
            <label htmlFor="" className={`mb-1  ${style.label}`}>
              Present Address
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="Present Address"
            />
          </div>
          <div className="w-full  mb-1 lg:mt-1">
            <label htmlFor="" className={`mb-1  ${style.label}`}>
              Permanent Address
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="Permanent Address"
            />
          </div>
        </div>
        <div className="flex lg:flex-row md:flex-row sm:flex-row xs:flex-col gap-2 justify-center lg:w-[600px] w-[190px] md:w-[400px]">
          <div className="w-full  mb-1 mt-1">
            <label htmlFor="" className={`mb-1  ${style.label}`}>
              City
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="Please enter City"
            />
          </div>
          <div className="w-full  mb-1 lg:mt-1">
            <label htmlFor="" className={`mb-1  ${style.label}`}>
              Town
            </label>
            <input
              type="text"
              className="mt-1 p-2 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
              placeholder="Town"
            />
          </div>
        </div>

        
        
        <div className=" mt-4 text-white text-lg font-semibold  flex justify-end" >
        <button type="submit" className="p-3 rounded-lg bg-primary-normal  w-[100px]">
          Submit
        </button>
      </div>
      </form>
      
          </div>
    </div>
  )
}

export default Profilecon