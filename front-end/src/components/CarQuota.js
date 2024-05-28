import Footer from "./Footer/Footer";
import Navbar from "./Navbar/Navbar";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
function CarQuota() {
  return (
    <section className="">
      <Navbar />
      <section className="w-full lg:max-w-[1000px] lg:h-[632px] mx-auto  mb-10 mt-8 px-4">
        <div className="flex flex-col text-center w-full">
          <h1 className="text-[22px] font-bold text-[#003B6D] mt-8 mb-2">
            Car Insurance Quota
          </h1>
          <p className="text-[16px] text-[#36454F] font-normal">
            Find the Right Insurance Coverage for Your Car
          </p>
        </div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
          <div className="md:h-[480px] bg-white shadow-lg p-4 border border-[#003B6D] rounded-md">
            <div>
              <h3 className="text-[25px] md:text-[36px] font-bold text-[#003B6D]">
                Basic Plan
              </h3>
              <p className="text-[18.5px]  font-medium text-[#003B6D] mt-2">
                $500 <span className="text-gray-300 font-medium">/year</span>
              </p>
            </div>

            <div className="w-full h-[164px] mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className=" w-[15px] h-[15px] md:w-[18px] md:h-[18px]" />
                <p className= " text-[14px] md:text-[15px] font-medium">
                  Comprehensive Coverage
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Non-deductible</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Standard customer support service</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegTrashAlt  className="w-[15px] h-[15px]md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Deductible</p>
              </div>
            </div>
            <Link to ="/car-quota-insurance">
            <button
              type="submit"
              className="w-40  mb-10 md:mt-20 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
            >
              Choose Plan
            </button>
            </Link>
          </div>
          <div className="md:h-[480px] bg-[#E6EBF0]  shadow-md p-4 rounded-md">
            <div>
              <h3 className="text-[25px] md:text-[36px] font-bold text-[#003B6D]">
                Standard Plan
              </h3>
              <p className="text-[18.5px] font-medium text-[#003B6D] mt-2">
                $700 <span className="text-gray-300 font-medium">/year</span>
              </p>
            </div>

            <div className="w-full h-[164px] mt-8 flex flex-col gap-5 ">
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className=" w-[15px] h-[15px] md:w-[18px] md:h-[18px]" />
                <p className="text-[14px] md:text-[15px] font-medium">
                  Comprehensive 
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Collision coverage</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegTrashAlt  className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Roadside assistance</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegTrashAlt  className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-mediumm">Deductible</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-40  mb-10 md:mt-20 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
            >
              Choose Plan
            </button>
          </div>
          <div className="md:h-[480px] bg-white shadow-lg p-4 border border-[#003B6D] rounded-md">
            <div>
              <h3 className="text-[25px] md:text-[36px] font-bold text-[#003B6D]">
                Premium Plan
              </h3>
              <p className="text-[18.5px] font-medium text-[#003B6D] mt-2">
                $800 <span className="text-gray-300 font-medium">/year</span>
              </p>
            </div>

            <div className="w-full h-[164px] mt-8 flex flex-col gap-5">
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]" />
                <p className="text-[14px] md:text-[15px] font-medium">
                  Comprehensive Coverage
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Non-deductible</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegCheckCircle className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Standard customer support service</p>
              </div>
              <div className="flex items-center gap-3 ">
                <FaRegTrashAlt  className="w-[15px] h-[15px] md:w-[18px] md:h-[18px]"/>
                <p className="text-[14px] md:text-[15px] font-medium">Deductible</p>
              </div>
            </div>
            <button
              type="submit"
              className="w-40  mb-10 md:mt-20 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
            >
              Choose Plan
            </button>
          </div>
         
        </section>
      </section>
      <Footer />
    </section>
  );
}
export default CarQuota;
