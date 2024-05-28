import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo1.png"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <section className="w-full bg-primary-normal h-auto">
        <section className="mx-10 text-accent-white">
          <section className="flex flex-row items-center justify-between mb-14">
            <div className="w-1/2 lg:flex lg:flex-row flex flex-col lg:items-center gap-4 lg:gap-16 lg:-mt-4">
              <div className="flex flex-col items-start mt-10 text-xs lg:text-base">
                <h1 className="font-bold lg:text-lg mb-2 text-sm">Navigation</h1>
                <Link to="/home">Home</Link>
                <Link to="">Car Listing</Link>
                <Link to="">Search</Link>
                <Link to="">Testimonial</Link>
                <Link to="">Footer</Link>
              </div>

              <div className="flex flex-col items-start mt-10 text-xs lg:text-base">
                <h1 className="font-bold lg:text-lg mb-2 text-sm">About us</h1>
                <Link to="/about-us">About Us</Link>
                <Link to="">Our Services</Link>
                <Link to="">Car Appraisal</Link>
                <Link to="">Car Evaluation</Link>
                <Link to="">Car Insurance</Link>
              </div>

              <div className="lg:-mt-2 mt-2 flex flex-col items-start text-xs lg:text-base">
                <h1 className="font-bold lg:text-lg mb-2 text-sm">Features</h1>
                <Link to="">Sell Car</Link>
                <Link to="">Buy Car</Link>
                <Link to="">Platform Admin</Link>
              </div>
            </div>
            <div className="w-1/2 lg:w-1/3 lg:mt-10 lg:-mb-2 -mt-24 text-xs lg:text-base">
              <h1 className="text-start lg:text-end lg:text-lg font-bold mb-2 text-sm">
                Subscribe to our Newsletter
              </h1>
              <div className="lg:border lg:border-accent-white rounded-md flex lg:flex-row flex-col lg:h-[42px] justify-between">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="example@gmail.com"
                  className="mb-2 border border-gray-400 text-xs lg:h-full h-[42px] px-3 py-4 lg:rounded-l-md rounded-md lg:w-80 w-50"
                />
                <button
                  type="submit"
                  className=" lg:bg-primary-normal bg-primary-normal lg:h-full h-[42px] border border-accent-white lg:border-none lg:w-44 lg:pb-3 lg:pt-2 lg:px-4 lg:rounded-r-md rounded-md text-center"
                >
                  Subscribe
                </button>
              </div>

              <p className="lg:text-end text-start mt-5">
                Lorem ipsum dolor<br></br> sit amet consectetur. Amet<br /> adipiscing
                enim enim ac<br />aenean facilisis eget sit nibh.
              </p>
            </div>
          </section>
          <section className="-mt-8 flex flex-row items-center justify-between">
            <Link to="/home"><img src={Logo} alt="logo" className="-ml-12 lg:-ml-10 w-50 h-40" /></Link>
            <div className="flex flex-row gap-4">
              <FaFacebook />
              <FaInstagram />
              <FaLinkedin />
              <FaTwitter />
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Footer;
