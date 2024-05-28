import Footer from "../components/Footer/Footer"
import { Link } from "react-router-dom";
function CarInsur() {
  return (
    <section className="">

      <form className=" lg:max-w-[800px]  md:mx-auto sm:h-[1000px] lg:h-[800px] bg-white md:shadow-2xl md:mt-8 md:mb-10">
        <div className="flex flex-col text-center w-full">
          <h1 className="text-[22px] font-bold text-[#003B6D] mt-8 mb-2">
            Car Insurance
          </h1>
          <p className="text-[16px] text-[#36454F] font-normal">
            Find the Right Insurance Coverage for Your Car
          </p>
        </div>

        <section className="w-full mt-3 md:mt-8 text-wrap flex flex-col flex-wrap">
          <h1 className="text-[20px] text-[#36454F] font-bold mb-6">
            Personal details
          </h1>
          <div className="flex flex-col  md:flex md:flex-row md:items-center w-full ">
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="text"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                FullName
              </label>
              <input
                type="text"
                id="text"
                name="text"
                required
                placeholder="John Doe"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="number"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                ID Number
              </label>
              <input
                type="text"
                id="text"
                name="text"
                required
                placeholder="Enter 17 Digits Number"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col  md:flex md:flex-row md:items-center w-full ">
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="email"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Email
              </label>
              <input
                type="text"
                id="text"
                name="text"
                required
                placeholder="example@gmail.com"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="number"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Driving Lincense issued Date
              </label>
              <input
                type="number"
                id="number"
                required
                placeholder="01/01/2012"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col  md:flex md:flex-row md:items-center w-full ">
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="text"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Additional Drivers
              </label>
              <input
                type="text"
                id="text"
                name="text"
                required
                placeholder="No"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="number"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Driving Lincense issued Date
              </label>
              <input
                type="number"
                id="number"
                required
                placeholder="01/01/2012"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
          </div>
        </section>
        <section className="w-full  mt-3 text-wrap flex flex-col flex-wrap">
          <h1 className="text-[20px] text-[#36454F] font-bold mb-2 md:mb-6">
            Vehicle details
          </h1>
          <div className="flex flex-col  md:flex md:flex-row md:items-center w-full ">
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10">
              <label
                htmlFor="text"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Make
              </label>
              <select className="bg-transparent border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none">
                <option
                  value=""
                  className="text-[12px] text-[#36454F] font-medium"
                >
                  BMW
                </option>
                <option
                  value=""
                  className="text-[12px] text-[#36454F] font-medium"
                >
                  Audi
                </option>
              </select>
            </div>
            <div className=" flex items-center mb-4 relative   md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="Model"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Model
              </label>
              <input
                type="text"
                id="text"
                name="text"
                required
                placeholder="6 Series"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col  md:flex md:flex-row md:items-center w-full">
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="Number"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Munufacture Year
              </label>
              <select className="bg-transparent border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none">
                <option
                  value=""
                  className="text-[12px] text-[#36454F] font-medium"
                >
                  2009
                </option>
                <option
                  value=""
                  className="text-[12px] text-[#36454F] font-medium"
                >
                  2010
                </option>
              </select>
            </div>
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="text"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Registration Area
              </label>
              <input
                type="text"
                id="text"
                required
                placeholder="New York"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col  md:flex md:flex-row md:items-center w-full">
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="Number"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                VIN
              </label>
              <input
                type="number"
                id="number"
                required
                placeholder="Enter 17 Digits Number"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
            <div className=" flex items-center mb-4 relative  md:w-[50%] mx-2  md:mx-10 ">
              <label
                htmlFor="text"
                className="absolute top-0 left-2 -mt-2 px-1 text-xs text-gray-400 bg-white"
              >
                Primary Use
              </label>
              <input
                type="text"
                id="text"
                required
                placeholder="Personal"
                className="border border-gray-400 text-xs px-3 py-3 rounded w-full outline-none"
              />
            </div>
          </div>
        </section>
        <Link to="/car-quota">
          <button
            type="submit"
            className="w-40  mb-10 md:mt-6 bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300"
          >
            Next
          </button>
        </Link>
      </form>
      <Footer />
    </section>
  );
}

export default CarInsur;
