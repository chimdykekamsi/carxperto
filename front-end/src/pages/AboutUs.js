import React from "react";
import Footer from "../components/Footer/Footer";
import aboutimage1 from "../assets/aboutimage1.jpg";
import aboutimage2 from "../assets/aboutimage2.jpg";
import Sealcheck from "../assets/SealCheck.png";
import Target from "../assets/Target.png"

function AboutUs() {
  return (
    <div>
      <section className="bg-white w-full h-screen">
   
        <section className=" flex flex-col lg:flex lg:flex-row items-center gap-6 mx-10">
          <div className="mt-20 relative rounded-md w-full lg:w-2/3 h-[530px] overflow-hidden">
            <div className="w-full h-[530px]">
                {/* Use background image */}
                <img
                    src={aboutimage1}
                    alt="car"
                    fetchPriority="high"
                    className="w-full h-full object-cover"
                />
                {/* Overlay with background color */}
                <div className="absolute inset-0 bg-blue-600 opacity-50" />
            </div>            
            {/* Text placed on top */}
            <div className="absolute inset-0 flex flex-col justify-end p-8 text-white">
              <h1 className="text-3xl font-bold text-start">
                Welcome to AutoBuy
              </h1>
              <p className="mt-4 text-start">
                At AutoBuy, we're passionate about connecting car enthusiasts<br />
                with their dream vehicles. Whether you're buying, selling, or<br />
                exploring the latest automotive trends, we're here to make your<br />
                journey seamless and enjoyable.
              </p>
            </div>
          </div>

          <div className="mt-20 flex flex-col gap-4 lg:w-1/3  h-auto">
            <div className="bg-primary-light border border-primary-light">
              <div className="m-8 flex flex-col ">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <img src={Sealcheck} alt="icon" className="w-10 h-10" />
                  <h1 className="text-primary-normal text-xl font-bold">Experience</h1>
                </div>
                <p className="text-gray-900 text-start">
                  With years of experience in the automotive industry, our team
                  is dedicated to providing a user-friendly platform where
                  buyers and sellers can connect with confidence. We strive to
                  offer comprehensive listings, valuable resources, and
                  exceptional customer service to meet your every need.
                </p>
              </div>
            </div>

            <div className="bg-primary-light border border-primary-light">
              <div className="m-8 flex flex-col ">
                <div className="flex flex-row items-center gap-2 mb-2">
                  <img src={Target} alt="icon" className="w-10 h-10" />
                  <h1 className="text-primary-normal text-xl font-bold">Our Mission</h1>
                </div>
                <p className="text-gray-900 text-start">
                  With years of experience in the automotive industry, our team
                  is dedicated to providing a user-friendly platform where
                  buyers and sellers can connect with confidence. We strive to
                  offer comprehensive listings, valuable resources, and
                  exceptional customer service to meet your every need.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="mt-10 mb-20 flex flex-col lg:flex lg:flex-row items-center gap-6 mx-10">
            <div className="mt-20 relative rounded-md lg:w-1/2 w-full h-[600px] overflow-hidden">
                <div className="w-full h-[600px]">
                    {/* Use background image */}
                    <img
                        src={aboutimage2}
                        alt="car"
                        fetchPriority="high"
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay with background color */}
                    <div className="absolute inset-0 bg-blue-600 opacity-50" />
                </div>            
                {/* Text placed on top */}
                <div className="absolute inset-0 flex flex-col justify-between p-8 text-white">
                    <h1 className="text-3xl font-bold text-start">
                        Carxperto
                    </h1>
              
                </div>
            </div>
            <div className="mt-20 relative rounded-md lg:w-1/2 w-full h-[600px] overflow-hidden">
                <form className="p-8 bg-primary-light border border-primary-light h-full w-full">
                    <h1 className="text-primary-normal mt-5 mb-5 text-4xl font-bold">Contact Us</h1>
                    <br/>
                    <div className="mx-10 flex items-center mb-10 relative">
                        <label
                        htmlFor="email"
                        className="absolute top-0 left-2 -mt-2 px-1 text-sm text-gray-400 bg-white"
                        >
                        Fullname
                        </label>
                        <input
                        type="text"
                        id="name"
                        name="fullName"
                        required
                        placeholder="John Jane Doe"
                        className="border border-gray-400 text-lg w-full px-3 py-3 rounded"
                        />
                    </div>
                    <div className="mx-10 flex items-center mb-10 relative">
                        <label
                        htmlFor="email"
                        className="absolute top-0 left-2 -mt-2 px-1 text-sm text-gray-400 bg-white"
                        >
                        Email
                        </label>
                        <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="example@gmail.com"
                        className="border border-gray-400 text-lg w-full px-3 py-3 rounded"
                        />
                    </div>
                    <div className="mx-10 flex items-center mb-10 relative">
                        <label
                        htmlFor="email"
                        className="absolute top-0 left-2 -mt-2 px-1 text-sm text-gray-400 bg-white"
                        >
                        Message
                        </label>
                        <textarea
                        type="text"
                        id="message"
                        name="message"
                        required
                        placeholder="start typing..."
                        className="border border-gray-400 text-lg w-full h-[100px] px-3 py-3 rounded"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-[200px] lg:w-[440px] h-[50px] bg-primary-normal text-white py-3 rounded hover:bg-primary-normalhover transition duration-300"
                    >
                        Send
                    </button>
                
                </form>
            </div>
        </section>
        <Footer />
      </section>
    </div>
  );
}

export default AboutUs;
