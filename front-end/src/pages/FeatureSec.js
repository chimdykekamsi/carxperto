
import carbroker from "../assets/system.jpg";
import car from "../assets/car.webp";
import insurance from "../assets/insurance.jpg";
import data from "../assets/data.jpg";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";

function FeatureSec() {
  return (
    <section className="bg-[#e6ebf0] z-0 ">
      <div className=" w-full bg-white ">
      </div>

      <section className="max-w-[1276px] mx-auto mt-3 lg:mt-8 w-full mb-20">
        <section className=" mt-3 lg:mt-[80px]  flex flex-col gap-8 p-4 sm:p-4 ">
          <div className=" w-full md:w-full lg:w-full  h-[320px] rounded-md relative overflow-hidden bg-gradient-to-r from-[#003B6D] via-[#003B6D] to-[#BEE1FF] inset-0 bg-opacity-[56%] cursor-pointer">
            <img
              src={data}
              alt="dataIcon"
              className="absolute h-full w-full object-cover mix-blend-overlay"
              fetchPriority="high"
            />
            <div className="flex  flex-col text-left p-8 gap-3">
              <h1 className="text-white text-[27px] lg:text-[36px] font-bold">
                Seller Dashboard
              </h1>
              <p className="lg:w-[393px] text-accent-white text-[18px] leading-[25.6px] font-normal ">
                Manage your car listings with ease using our Seller Dashboard.
                Create, edit, and monitor your listings, communicate with
                interested buyers, and track your sales performance all in one
                place.
              </p>
              <p className="text-[18px] font-bold leading-[28.8px] text-white">
                Get started
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-5 justify-between mt-[20px]">
            <Link to="/car-apprasial">
              <div className=" w-full md:w-full lg:w-[838px]  h-[283px] rounded-md relative overflow-hidden bg-gradient-to-r from-[#003B6D] via-[#003B6D] to-[#BEE1FF] inset-0 bg-opacity-95 cursor-pointer">
                <img
                  src={car}
                  alt="carIcon"
                  className="absolute h-full w-full object-cover mix-blend-overlay"
                  fetchPriority="high"
                />

                <div className="flex  flex-col text-left p-8 gap-3 flex-wrap ">
                  <h1 className="text-white text-[36px] leading-[54px] font-bold">
                    Car Appraisal
                  </h1>
                  <p className="text-left text-white text-[15px] md:text-[18px] leading-[32px] font-normal md:w-[610px] flex-wrap opacity-100">
                    Get an instant appraisal of your car's value by entering
                    your vehicle details, including make, model, year, mileage,
                    and condition. Receive a quick estimate of your car's worth
                    to make informed decisions about selling or trading.
                  </p>
                  <p className="text-[18px] font-bold leading-[28.8px] text-white">
                    Appraise My Car
                  </p>
                </div>
              </div>
            </Link>
            <Link to="/car-insurance">
            <div className=" md:w-full lg:w-[412px]  h-[320px] rounded-md relative overflow-hidden bg-gradient-to-t from-[#012e57] via-[#012e57] to-[#537083] inset-0 opacity-[100%] cursor-pointer">
              <img
                src={insurance}
                alt="insuranceIcon"
                className="absolute h-full w-full object-cover mix-blend-overlay"
                fetchPriority="high"
              />
              <div className="flex  flex-col text-left p-8 gap-3">
                <h1 className="text-white text-[36px] leading-[54px] font-bold">
                  Car Insurance
                </h1>
                <p className="md:w-[368px] text-white text-[18px] leading-[25.6px] font-normal ">
                  Find the best insurance coverage for your car with our Car
                  Insurance feature. Fill out a simple form, compare quotes from
                  top insurance providers, and select the policy that best fits
                  your needs and budget.
                </p>
                <p className="text-[18px] font-bold leading-[28.8px] text-white">
                  Get started
                </p>
              </div>
            </div>
            </Link>
          </div>

          <div className=" rounded-md relative overflow-hidden bg-gradient-to-r from-[#003B6D] via-[#003B6D] to-[#BEE1FF] inset-0 bg-opacity-95 mt-[20px] cursor-pointer">
            <img
              src={carbroker}
              alt="carBroker"
              className="absolute h-full w-full object-cover mix-blend-overlay"
              fetchPriority="high"
            />
            <div className="flex  flex-col text-left p-8 gap-3">
              <h1 className="text-white text-[36px] font-bold leading-[54px]">
                Car Broker
              </h1>
              <p className="text-[20px] font-normal leading-[32px]  text-white hidden lg:block">
                As a car broker, streamline your operations with our Car <br />
                Broker Dashboard. Manage client accounts, create and
                <br /> manage listings on their behalf, communicate effectively,
                <br />
                and gain insights into client preferences and sales
                <br />
                performance.
              </p>
              <p className="text-[14.8px] block lg:hidden text-accent-white">
                As a car broker, streamline your operations with our Car Broker
                Dashboard. Manage client accounts, create and manage listings on
                their behalf, communicate effectively, and gain insights into
                client preferences and sales performance.
              </p>
              <p className="text-[18px] font-bold leading-[28.8px] text-white">
                Get started
              </p>
            </div>
          </div>
        </section>
      </section>
      <Footer />
    </section>
  );
}
export default FeatureSec;
