import React from "react";
import { Link } from "react-router-dom";
import illustration1 from "../assets/image/Illustration.webp";
import illustration2 from "../assets/image/illustration (1).webp";
import illustration3 from "../assets/image/illustration (2).webp";
import { Button } from "@material-tailwind/react";



function OnboardingPage() {
  return (
    
      <section className="bg-white w-full h-screen">
        
        <section className="flex flex-col items-center justify-center mt-10">
          <h1 className="text-center text-primary-normal font-bold text-3xl">
            Why Choose Carxperto
          </h1>
          <div className="flex lg:flex-row flex-col items-center gap-16 mt-16">
            <Link to="/signup">
              <div className="flex flex-col items-center  w-72 h-72 border-white shadow-md">
                <img
                  src={illustration1}
                  alt="illustration"
                  className="w-45 h-30"
                />
                <h1 className="text-base text-primary-darker font-bold mt-10">
                  Buy Your Dream Car
                </h1>
                <p className="text-base text-primary-darker">
                  Explore a vast selection of cars from <br />trusted sellers and Xperto
                  all in one place.
                </p>
              </div>
            </Link>

            <Link to="/signup">
              <div className="flex flex-col items-center w-72 h-72 border-white shadow-md">
                <img
                  src={illustration2}
                  alt="illustration"
                  className="w-36 h-30"
                />
                <h1 className="text-base text-primary-darker font-bold mt-11">
                  Sell Your Car with Ease
                </h1>
                <p className="text-base text-primary-darker">
                  {" "}Showcase your car to thousands<br />of potential buyers
                  across the<br /> platform.
                </p>
              </div>
            </Link>

            <Link to="/signup">
              <div className="flex flex-col items-center w-72 h-72 border-white shadow-md">
                <img
                  src={illustration3}
                  alt="illustration"
                  className="w-36 h-30"
                />
                <h1 className="text-base text-primary-darker font-bold mt-14">
                  Find Your Dream Car
                </h1>
                <p>
                  {" "}With our experienced xperto <br />finding your dream car with ease. <br />register has an xperto.
                </p>
              </div>
            </Link>
          </div>
          <div className="flex flex-row mt-16 gap-2 mb-6">
            <Button className="text-accent-white bg-primary-normal hover:bg-secondary-normalhover px-10">
            <Link
              to="/signup" 
            >
              Sign Up
            </Link>
            </Button>
           
            <Button className="text-accent-white bg-secondary-darker hover:bg-secondary-normalhover px-12">
            <Link
              to="/signin"
            
            >
              Login
            </Link>
            </Button>
            
          </div>
        </section>
      </section>
  );
}

export default OnboardingPage;
