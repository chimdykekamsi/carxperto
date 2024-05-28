import React from "react";
import Footer from "../components/Footer/Footer";
import { Button } from "@material-tailwind/react";



function BrokerContact() {
  return (
    <div>
      <section className="w-full h-full overflow-x-hidden">

        <section>
        <div className="mt-7 w-full sm:w-[85%] mx-auto   border shadow-lg p-3 mb-3 rounded-lg">
  <div className="flex justify-between border-b border-gray-300">
    <div className="text-primary-normal">
      Profile Overview
    </div>
  </div>
  <div className="flex flex-col sm:flex-row mt-4">
    <div className="w-full sm:w-[20%]">
      <img class="object-cover object-center w-full mb-8 lg:h-48 md:h-36 rounded-xl" src="https://via.placeholder.com/150" alt="blog"/>
    </div>
    <div className="w-full sm:w-[80%] ml-3">
      <div className="grid grid-cols-2 mt-2">
        <div className="text-start">
          <label htmlFor="fullname" className="text-gray-400">Fullname</label>
          <p className="py-2">John Doe</p>
        </div>
        <div className="text-start">
          <label htmlFor="Username" className="text-gray-400">Username</label>
          <p className="py-2">Jammie Chann</p>
        </div>
      </div>
      <div className="text-start my-4">
        <div className="text-gray-400 my-2">Contact Information</div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3">
          <div className="">
            <label htmlFor="email" className="text-gray-400">Email</label>
            <p className="py-2">9kS6H@example.com</p>
          </div>
          <div className="">
            <label htmlFor="phone" className="text-gray-400">Phone</label>
            <p className="py-2">08123456789</p>
          </div>
          <div className="">
            <label htmlFor="location" className="text-gray-400">Location</label>
            <p className="py-2">San Jose, California, USA</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex justify-between border-b border-gray-300">
    <div className="text-primary-normal">
      Experience and Expertise
    </div>
  </div>
  <div className="text-start mt-5 ">
    <label htmlFor="" className="text-gray-400">Description</label>
    <p className="py-2">Offers comprehensive assistance in buying and selling vehicles. With a focus on personalized guidance, we excel in sourcing the perfect vehicle for each client, leveraging our negotiation expertise to secure the best deals. Through in-depth market analysis, we provide insights to empower informed decisions, ensuring maximum value for every transaction. Our dedication to exceptional customer service means tailored support at every step, cementing our reputation for integrity and results.  </p>
  </div>
  <div className="mt-4 text-start">
    <label htmlFor="" className="text-gray-400">Years in the Industry</label>
    <p>3 years +</p>
  </div>
  <div className="grid grid-cols-2 mt-4">
    <div className="text-start">
      <label htmlFor=""  className="text-gray-400 py-2">Specialties</label>
      <ul>
        <li>Luxury Cars, </li>
        <li>Commercial Vehicles</li>
        <li>Vintage Classics</li>
      </ul>
    </div>
    <div className="text-start">
      <label htmlFor="" className="text-gray-400 py-2">Expertise</label>
      <ul>
        <li>Negotiation Skills, </li>
        <li>Market Analysis, </li>
        <li>Client Relationship Managemen</li>
      </ul>
    </div>
  </div>

  <div className="flex justify-between border-b border-gray-300 mt-5">
    <div className="text-primary-normal">
      Successful Transactions
    </div>
  </div>
  <div className="text-start my-4">
    <div className="grid grid-cols-3 gap-3">
      <div className="">
        <label htmlFor="email" className="text-gray-400">Total Transactions</label>
        <p className="py-2">30</p>
      </div>
      <div className="">
        <label htmlFor="phone" className="text-gray-400">Average Sales Price</label>
        <p className="py-2">$30,000</p>
      </div>
      <div className="">
        <label htmlFor="location" className="text-gray-400">Client Satisfaction Rate</label>
        <p className="py-2">80% </p>
      </div>
    </div>
  </div>
    <div className="flex justify-between">
        <div>
            <Button className="bg-primary-normal">Chat Now</Button>
        </div>
        <div>
        <Button className="bg-primary-light text-primary-dark">Leave a review</Button>
        </div>
    </div>
</div>
        </section>

        <Footer />
      </section>
    </div>
  );
}

export default BrokerContact;
