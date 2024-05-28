import Footer from "./Footer/Footer";
import Nav from "./Navbar/Navbar";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

function CarInsurQ() {
  return (
    <form>
      <Nav />
      <section className="flex flex-col md:flex md:flex-row  p-3 w-full md:max-w-[1200px] mx-auto gap-10 md:mt-6">
        <div className="p-2 md:w-2/4 w-full shadow-2xl rounded-md md:p-4">
          <div className="flex items-center justify-between mt-4 mb-3 md:mb-5 md:mt-3">
            <h3 className="text-[#003B6D] text-[18px] font-semibold">
              Personal details
            </h3>
            <p className="text-[16px] text-[#00B2A9] font-medium">Edit</p>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="name"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              FullName
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="text"
              placeholder="Joe Doe"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="Id"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              ID Number
            </label>
            <input
              type="number"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="id-number"
              placeholder="1234565869"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="email"
              className="mb-2  text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Email
            </label>
            <input
              type="email"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="email"
              placeholder="example@gmail.com"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="driving lincense"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Driving Lincense Date
            </label>
            <input
              type="number"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="driving-number"
              placeholder="01/02/2020"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="driving history"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Driving History
            </label>
            <input
              type="text"
              name="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              placeholder="12 years"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="Additional History"
              className="mb-2 text-[14px] md:text-[16px] text-[#36454F] font-medium"
            >
              Additional History
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px]  text-[#36454F] font-medium"
              name="text"
              placeholder="true"
            ></input>
          </div>
        </div>
        <div className="p-2 md:w-2/4 w-full shadow-2xl rounded-md md:p-4">
          <div className="flex items-center justify-between  mt-4 mb-3 md:mb-5 md:mt-3">
            <h3 className="text-[#003B6D] text-[18px] font-semibold">
              Car Details
            </h3>
            <p className="text-[16px] text-[#00B2A9] font-medium">Edit</p>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="make"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Make
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="text"
              placeholder="BMW"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="model"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Model
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="model"
              placeholder="6 Series"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="text"
              className="mb-2  text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Manufactuer Year
            </label>
            <input
              type="number"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="year"
              placeholder="2019"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="Registartion"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Registration area
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="text"
              placeholder="New York"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="Vin"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Vin
            </label>
            <input
              type="text"
              name="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              placeholder="xxxxxxxxx"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="primary-use"
              className="mb-2 text-[14px] md:text-[16px] text-[#36454F] font-medium"
            >
              Primary use
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px]  text-[#36454F] font-medium"
              name="text"
              placeholder="Personal"
            ></input>
          </div>
        </div>
      </section>
      <section className="flex flex-col md:flex md:flex-row  p-3 w-full md:max-w-[1200px] mx-auto gap-10 md:mt-6">
        <div className="p-2 md:w-2/4 w-full shadow-2xl rounded-md md:p-4">
          <div className="flex items-center justify-between mt-4 mb-3 md:mb-5 md:mt-3">
            <h3 className="text-[#003B6D] text-[18px] font-semibold">
              Coverage Details
            </h3>
            <p className="text-[16px] text-[#00B2A9] font-medium">Edit</p>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="coverage-details"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Coverage
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="text"
              placeholder="Comprehensive"
            ></input>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
            <label
              for="Additional-info"
              className="mb-2 text-[15px] md:text-[16px] text-[#36454F] font-medium"
            >
              Additional Info
            </label>
            <input
              type="text"
              className="border-gray-400 text-xs px-2 py-3 rounded outline-none bg-transparent text-[15px] md:text-[17px] text-[#36454F] font-medium"
              name="text"
              placeholder="6 Series"
            ></input>
          </div>
        </div>
        <div className="p-2 md:w-2/4 w-full shadow-2xl rounded-md md:p-4">
          <div className="flex items-center justify-between  mt-4 mb-3 md:mb-5 md:mt-3">
            <h3 className="text-[#003B6D] text-[18px] font-semibold">
              Standard plan
            </h3>
            <p className="text-[16px] text-[#00B2A9] font-medium">
              Change plan
            </p>
          </div>
          <div className="flex flex-col text-start mb-2 md:mb-5">
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
          
        </div>
      </section>
      <Link to ="/checkout-payment">
            <button
              type="submit"
              className="w-40  mt-5 mb-10 md:mt-20 bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover transition duration-300"
            >
              Proceed to pay
            </button>
            </Link>
      <Footer />
    </form>
  );
}
export default CarInsurQ;
