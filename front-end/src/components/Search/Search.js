import React, { useEffect, useState } from "react";

const SearchComponent = () => {
  const [category, setCategory] = useState([]);
  const [make, setMake] = useState("");
  const [bodyType, setBodyType] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");

  useEffect(()=>{
    fetch("https://api-v1.carxperto.com/categories")
    .then(res => res.json())
    .then(category => setCategory(category))
    console.log(category)

  },[])
  const handleSearch = () => {
    // Implement your search logic here
    console.log("Searching...");
  };

  return (
    <div className="absolute z-10 lg:top-[400px] top-[330px] grid lg:flex lg:flex-row lg:grid-cols-6 md:flex md:flex-row md:grid-cols-3 flex flex-row grid-cols-2 gap-4 w-full lg:w-[1200px] lg:justify-between  lg:mx-10 border border-primary-light px-6 py-8 bg-primary-light shadow-2xl rounded-md overflow-x-hidden">
      <div className="flex flex-col border border-l-4 border-r-gray-900">
        <label htmlFor="category" className="mb-1 -ml-8 font-light text-base">Category</label>
        <select
          id="category"
          value={category}
          className="px-8 py-1 bg-primary-lighthover lg:mr-8 text-base"
          onChange={e => setCategory(e.target.value)}
        >
          <option value="">Category</option>
          {/* Add options for categories */}
        </select>
      </div>

      <div className="flex flex-col lg:-ml-14 border border-l-4 border-r-gray-900">
        <label htmlFor="make" className="mb-1  font-light text-base">Make</label>
        <select id="make" value={make} className="px-4 py-1 bg-primary-lighthover lg:mr-8 text-base" onChange={e => setMake(e.target.value)}>
          <option value="">Select Make</option>
          {/* Add options for makes */}
        </select>
      </div>

      <div className="flex flex-col lg:-ml-14 border border-l-4 border-r-gray-900">
        <label htmlFor="bodyType" className="mb-1 -ml-8 font-light text-base">Body Type</label>
        <select
          id="bodyType"
          value={bodyType}
          className="px-8 py-1 bg-primary-lighthover lg:mr-8 text-base"
          onChange={e => setBodyType(e.target.value)}
        >
          <option value="">Select Body Type</option>
          {/* Add options for body types */}
        </select>
      </div>

      <div className="flex flex-col lg:-ml-14 border border-l-4 border-r-gray-900">
        <label htmlFor="year" className="mb-1 -ml-8 font-light text-base">Year</label>
        <select
          id="year"
          value={year}
          className="px-8 bg-primary-lighthover lg:mr-8 text-base "
          onChange={e => setYear(e.target.value)}
        >
          <option value="" className="">2019</option>
          {/* Add options for body types */}
        </select>
        {/* <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} /> */}
      </div>

      <div className="flex flex-col">
        <label htmlFor="price" className="mb-1 -ml-8 font-light text-base">Price range</label>
        <select
          id="price"
          value={price}
          className="px-8 py-1 bg-primary-lighthover text-base"
          onChange={e => setPrice(e.target.value)}
        >
          <option value="">$10000</option>
          {/* Add options for body types */}
        </select>
        {/* <input
          type="text"
          id="price"
          value={price}
          onChange={e => setPrice(e.target.value)}
        /> */}
      </div>

      <div className="flex items-end">
        <button
          onClick={handleSearch}
          className="bg-primary-normal hover:bg-secondary-normal text-white font-bold py-2 px-4 rounded"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;

// import React, { useState, useEffect } from 'react';

// const SearchComponent = ({ cars }) => {
//   const [category, setCategory] = useState('');
//   const [make, setMake] = useState('');
//   const [bodyType, setBodyType] = useState('');
//   const [year, setYear] = useState('');
//   const [price, setPrice] = useState('');
//   const [filteredCars, setFilteredCars] = useState([]);

//   useEffect(() => {
//     // Filter cars based on selected criteria
//     let filtered = cars;
//     if (category) {
//       filtered = filtered.filter(car => car.category === category);
//     }
//     if (make) {
//       filtered = filtered.filter(car => car.make === make);
//     }
//     if (bodyType) {
//       filtered = filtered.filter(car => car.bodyType === bodyType);
//     }
//     if (year) {
//       filtered = filtered.filter(car => car.year === year);
//     }
//     if (price) {
//       filtered = filtered.filter(car => car.price === price);
//     }
//     // Set filtered cars
//     setFilteredCars(filtered);
//   }, [category, make, bodyType, year, price, cars]);

//   const handleSearch = () => {
//     // You can perform additional actions here if needed
//     console.log('Search button clicked');
//   };

//   return (
//     <div className="absolute z-10 top-[560px] right-20 flex flex-wrap gap-4 mx-10 border border-primary-light px-6 py-8 bg-primary-light rounded-md ">
//       <div className="flex flex-col">
//         <label htmlFor="category">Category:</label>
//         <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
//           <option value="">Select Category</option>
//           {/* Add options for categories */}
//         </select>
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="make">Make:</label>
//         <select id="make" value={make} onChange={(e) => setMake(e.target.value)}>
//           <option value="">Select Make</option>
//           {/* Add options for makes */}
//         </select>
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="bodyType">Body Type:</label>
//         <select id="bodyType" value={bodyType} onChange={(e) => setBodyType(e.target.value)}>
//           <option value="">Select Body Type</option>
//           {/* Add options for body types */}
//         </select>
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="year">Year:</label>
//         <input type="text" id="year" value={year} onChange={(e) => setYear(e.target.value)} />
//       </div>

//       <div className="flex flex-col">
//         <label htmlFor="price">Price:</label>
//         <input type="text" id="price" value={price} onChange={(e) => setPrice(e.target.value)} />
//       </div>

//       <div className="flex items-end">
//         <button onClick={handleSearch} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
//           Search
//         </button>
//       </div>

//       {/* Render filtered cars */}
//       <div className="w-full">
//         <h2 className="text-xl font-bold mb-4">Search Results</h2>
//         {filteredCars.map((car, index) => (
//           <div key={index} className="border border-gray-300 p-4 rounded-md mb-2">
//             <p>Make: {car.make}</p>
//             <p>Category: {car.category}</p>
//             <p>Body Type: {car.bodyType}</p>
//             <p>Year: {car.year}</p>
//             <p>Price: {car.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchComponent;
