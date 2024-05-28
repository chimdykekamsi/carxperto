import React from "react";

import Footer from "../components/Footer/Footer";
import Suv from "../assets/hero.png";
import SearchComponent from "../components/Search/Search";
import Cardholder from "../components/cardholder/cardholder";


function CarCategory() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">
        <section>
          <div className="w-full h-[500px]">
            <img
              src={Suv}
              alt="car"
              className="w-full h-full absolute lg:object-cover object-bottom mix-blend-overlay"
            />
            <div className="top-40 absolute lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white pb-24">
              <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl mb-2">Categories</h1>
              <p className="text-sm md:text-base lg:text-4xl font-bold mb-2">Find the Perfect SUV for your Lifestyle</p>
              <p className="text-sm md:text-base lg:text-lg font-semibold">Explore SUVs for your next Adventure</p>
            </div>
          </div>
          <SearchComponent />
          <div className="mt-36 mb-24">
            <h1 className="text-4xl text-primary-normal pb-12 font-bold mb-5">Latest Arrivals SUV Cars</h1>
            <Cardholder  />
          </div>
          
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default CarCategory;
