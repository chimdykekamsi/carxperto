import React from 'react'
import { Button } from "@material-tailwind/react";
import person from '../../assets/woman.png'
import { Link } from 'react-router-dom';

const Brokercard = () => {
  return (
    <div className="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
    <div className="p-4">
      <div className="flex items-center">
        <img className="w-12 h-12 rounded-full mr-4" src={person} alt="profile" />
        <p className="text-gray-800 font-bold text-lg">Josh Freeman</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-start">
        <div>
          <h3 className="text-gray-600">Experience</h3>
          <p className="text-gray-800 font-semibold">4 years+</p>
        </div>
        <div>
          <h3 className="text-gray-600">Reviews</h3>
          <p className="text-gray-800 font-semibold">4.0+</p>
        </div>
        <div>
          <h3 className="text-gray-600">Location</h3>
          <p className="text-gray-800 font-semibold">San Jose, CA, USA</p>
        </div>
        <div>
          <h3 className="text-gray-600">Language</h3>
          <p className="text-gray-800 font-semibold">English, Spanish, & French</p>
        </div>
      </div>
      <div className="mt-4 text-start">
        <h3 className="text-gray-600">About</h3>
        <p className="text-gray-800">
          Offers comprehensive assistance in buying and selling vehicles. With a focus on personalized guidance, we excel in sourcing the perfect vehicle for each client, leveraging our negotiation expertise to secure the best deals. Through in-depth market analysis, we provide insights to empower informed decisions, ensuring maximum value for every transaction. Our dedication to exceptional customer service means tailored support at every step, cementing our reputation for integrity and results.
        </p>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 text-start">
        <div>
          <h3 className="text-gray-600">Specialties</h3>
          <ul className="list-disc list-inside">
            <li>Luxury Cars</li>
            <li>Commercial Vehicles</li>
            <li>Vintage Classics</li>
          </ul>
        </div>
        <div>
          <h3 className="text-gray-600">Expertise</h3>
          <ul className="list-disc list-inside">
            <li>Negotiation Skills</li>
            <li>Market Analysis</li>
            <li>Client Relationship Management</li>
          </ul>
        </div>
      </div>
      <div className="mt-4 flex justify-end">
        <Link to='/broker-contact'>
            <Button className="bg-primary-light text-primary-dark font-semibold rounded focus:outline-none">Contact</Button>
        </Link>
        
      </div>
    </div>
  </div>
  )
}

export default Brokercard