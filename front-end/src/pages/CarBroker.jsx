import React from "react";
import Footer from "../components/Footer/Footer";
import Suv from "../assets/hero.png";
import Brokercard from "../components/brokercard/brokercard";



function CarBroker() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">
        <section>
        <div className="relative">
  <img
    src={Suv}
    alt="car"
    className="object-cover w-full h-[550px] md:h-[400px] lg:h-[550px]"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-4 md:px-8 lg:px-16 xl:px-24">
    <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 leading-tight">Connect with a Broker for Personalized Assistance</h1>
    <p className="text-sm md:text-base lg:text-lg xl:text-xl font-semibold mb-8 max-w-xl">Explore our network of experienced brokers who can help you find the perfect vehicle.</p>
   
  </div>
</div>
          <div className="mt-20 mb-14 mx-[20px]">
            <h2 className="text-primary-normal text-start font-bold text-[20px] ">Broker Listings</h2>
            <div className="grid gap-y-10 gap-x-6 md:grid-cols-2 xl:grid-cols-2 mt-10">
                <Brokercard />
                <Brokercard />
                <Brokercard />
                <Brokercard />
            </div>

            
          </div>
          
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default CarBroker;
