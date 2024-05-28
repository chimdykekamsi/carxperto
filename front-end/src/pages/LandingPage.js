import React from "react";
import Footer from "../components/Footer/Footer";
import SearchComponent from "../components/Search/Search";
import Carousels from "../components/carousel/carousel";
import Cardholder from "../components/cardholder/cardholder";
import Brands from "../components/Brands/Brands";
import style from './landingpage.module.css'
import CategoryGrid from "../components/CategoryGrid.js";
import { Button } from '@material-tailwind/react';
import image1 from '../assets/image/bmw1.webp'
import { Link } from "react-router-dom/dist/index.js";

function LandingPage() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden ">
        <section className="relative">
        <div className="flex lg:flex-row flex-col  px-4 lg:mt-8 text-center lg:justify-start lg:items-start justify-center items-center mt-16">
        <div className="flex flex-col lg:justify-start lg:items-start lg:w-[40%] pr-8 w-[100%] justify-center items-center ">
          <h1 className="lg:text-[42px] text-primary-normal font-bold mb-5 pl-1 text-[23px] ">
            Welcome to CarXerpto
            <br />
            Your Car Marketplace
          </h1>
          <p className="text-gray-600 text-start w-[100%] text-[15px] pl-3">
            At CarXerpto, we believe that finding your dream car should be an exhilarating journey, not a tedious task. Whether you're a buyer, seller, or simply an enthusiast, our platform is designed to make car transactions seamless and exciting.
          </p>
          <div className="mt-6 space-x-4 flex gap-1 ml-3">
            <Button className="bg-primary-normal text-white lg:px-[50px] px-[10px]"><Link to="/car-listing"></Link>Buy Your Car</Button>
            <Button className="bg-transparent text-secondary-dark border-2 border-secondary-dark lg:px-[40px] px-[10px]"><Link to="/car-broker"></Link>Meet an Xerpto</Button>
          </div>
        </div>
        <div className="w-[60%] lg:block    sm:hidden">
          <img src={image1} alt="Hero Section" className="w-[50rem] px-[70px]" />
        </div>
      </div>
          <SearchComponent />
         
        </section>
        <div className="mx-auto lg:ml-12 ml-4">
        <Carousels />
        </div>
        
        <div className="mt-24 mb-12">
            <h1 className="text-4xl text-primary-normal font-bold mb-5 text-start lg:ml-[85px]">Latest Arrivals</h1>
        </div>
        <Cardholder />
        <div className="lg:max-w-[1122px]   mx-auto mt-24 mb-11 p-2 lg:p-0">
            <h1 className="text-4xl text-primary-normal font-bold mb-3 text-start lg:ml-[15px]">Categories</h1>
            <CategoryGrid/>
        </div>

        <div className="mt-24 mb-12">
            <h1 className="text-4xl text-primary-normal font-bold mb-5">Trusted Brands</h1>
        </div>
        <Brands/>
        <Footer />
      </section>
    </div>
  );
}

export default LandingPage;
