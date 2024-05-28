import Footer from "./Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import { SiCmake } from "react-icons/si";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import CardD from "./Card_slider/CarDetailsSlider";
function CarDetails() {
  return (
    <section>
      <div className="w-full md:max-w-[1200px] md:mx-auto md:h-[499px] mt-8 mb-5">
        <CardD />
      </div>

      <div className="mt-16 mx-3 md:mx-0">
        <div className="flex items-center w-full md:max-w-[1200px] md:mx-auto justify-between mt-5 mb-5">
          <p className=" text-[18px] md:text-[30px] font-bold text-[#003B6D] md:mb-5">
            Quattro 2020
          </p>
          <p className="md:text-[30px] text-[18px] font-bold text-[#003B6D]">$25,000</p>
        </div>
        <section className=" w-full mt-6 md:mt-0 md:max-w-[1200px] md:mx-auto">
          <div className="grid grid-cols-3 md:grid-cols-6 mx-auto md:w-[90%] gap-3">
            <div className="flex items-center gap-2 ">
              <SiCmake className="" />
              <div>
                <h3 className="text-[10px]">Make</h3>
                <h3 className="text-[10px] font-bold">Audi</h3>
              </div>
            </div>
            <div className="flex items-center gap-2 ">
              <SiCmake className="" />
              <div>
                <h3 className="text-[10px]">Model</h3>
                <h3 className="text-[10px] font-bold">Quattro</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <SiCmake className="" />
              <div>
                <h3 className="text-[10px]">Year</h3>
                <h3 className="text-[10px] font-bold">2020</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <SiCmake className="" />
              <div>
                <h3 className="text-[10px]">Mileage</h3>
                <h3 className="text-[10px] font-bold">2000 miles</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <SiCmake className="" />
              <div>
                <h3 className="text-[10px]">Seats</h3>
                <h3 className="text-[10px] font-bold">4 seats</h3>
              </div>
            </div>
            <div className=" flex items-center gap-2 ">
              <SiCmake className="" />
              <div>
                <h3 className="text-[10px]">Consumptions</h3>
                <h3 className="text-[10px] font-bold">20-25 Mph</h3>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="flex  flex-col md:flex-row items-center w-full justify-between p-2 md:p-0 flex-wrap md:max-w-[1200px] md:mx-auto mt-10">
        <div className="md:w-[50%]  w-full text-center md:text-start ">
          <h3 className="text-[18px] text-[#003B6D] font-bold mb-1">
            Car Descriptions
          </h3>
          <p className="text-[12px] md:text-[14px] text-[#36454F] font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            vehicula justo ac mi fermentum, eget fermentum libero pharetra.
            Nullam euismod urna at justo scelerisque, ut cursus ipsum consequat.
            Integer at erat at turpis consequat vulputate. Sed vestibulum odio
            ut leo aliquam vehicula. Fusce laoreet arcu nec libero aliquet, vel
            auctor sapien venenatis. Sed non est id eros fringilla feugiat. Sed
            euismod, elit eu tincidunt sagittis, ipsum leo consequat quam, at
            placerat velit nisi non purus.
          </p>
        </div>
        <div className="md:w-[50%] w-full mt-4 md:mt-0">
          <h3 className="text-[18px]  text-[#003B6D] font-bold md:ml-[30px]">
            Features
          </h3>
          <div className="w-full md:w-[290px] md:ml-[275px] mt-3 flex  md:mx-auto flex-col gap-5">
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className=" w-[15px] h-[15px]" />
              <p className=" text-[14px] md:text-[15px] text-[#36454F] font-medium">
                All-wheel drive (Quattro)
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                Turbocharged engine
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                Leather interior
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                Bang & Olufsen sound system
              </p>
            </div>
            <div className="flex items-center gap-3 ">
              <FaRegCheckCircle className="w-[15px] h-[15px]" />
              <p className="text-[14px] md:text-[15px] text-[#36454F] font-medium">
                Navigation system
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full justify-between md:max-w-[1200px] md:mx-auto p-2 md:p-0 mt-10 text-start">
        <p className="text-[18px] text-center md:text-start text-[#003B6D] font-bold mb-2">
          Contact Information
        </p>
        <div className="grid grid-cols-2 md:grid md:grid-cols-4 gap-3">
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Seller Name</h3>
            <p>Jane Smith</p>
          </div>
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Location</h3>
            <p>Los Angeles CA</p>
          </div>
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Phone</h3>
            <p>224-5890000</p>
          </div>
          <div className="text-[#36454F] font-bold text-[12px]">
            <h3 className="mb-1">Email</h3>
            <p>jane@example.com</p>
          </div>
        </div>
      </section>
      
      <section className="w-full md:flex md:items-center md:justify-between md:max-w-[1200px] md:mx-auto mt-20 mb-10 md:mb-20 md:text-start ">
        <button
          type="submit"
          className="w-60 lg:w-[10%] bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300"
        >
          Contact Seller
        </button>

        <div className="p-3 rounded-full bg-slate-200 hidden md:block">
          <FaFacebookMessenger className="w-[20px] h-[20px]" />
        </div>
      </section>

      <Footer />
    </section>
  );
}

export default CarDetails;
