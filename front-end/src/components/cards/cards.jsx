import React from 'react'
import style from './cards.module.css'
import { SiCmake } from "react-icons/si";
import { IoCarSportSharp } from "react-icons/io5";
import { IoLocationSharp } from "react-icons/io5";
import { SlCalender } from "react-icons/sl";
import { BsFuelPumpDiesel } from "react-icons/bs";
import { MdAirlineSeatLegroomExtra } from "react-icons/md";
import { FaRegBookmark } from "react-icons/fa";
import Cars from  '../../assets/hans-isaacson.png'
import { Link } from 'react-router-dom';
import axios from 'axios';

import { useState, useEffect } from 'react';
const Cards = () => {
    const [car, setCars] = useState([]);

    useEffect(() => {
        const fetchCars = async () => {
            try {
                const response = await axios.get('https://api-v1.carxperto.com/cars');
                setCars(response.data);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching cars:', error);
            }
        };
        fetchCars();
    }, []);
    
  return (
    <>
        {
            car.map((cars, index) => {
                return (
                    <div key={cars} className={style.container}>
                    <Link to='/car-details' >
                    
                    <img src={cars.carImages[0].url} className={style.img} alt={`Car ${index + 1}`} />
                <div className={style.containerBody}>
                <div className={style.header}>
                    <h2 className={style.brand}>{cars.brand}</h2>
                    <h2 className={style.price}>{cars.price}</h2>
                </div>
                <div className={style.iconCon}>
                    <div className={style.iconMain}>
                        <SiCmake className={style.icon}/>
                        <div>
                            <h3 className={style.icondescription}>Make</h3>
                            <h3 className={style.iconProduct}>{cars.model}</h3>
                        </div>
                    </div>
                    <div className={style.iconMain}>
                        <IoCarSportSharp className={style.icon}/>
                        <div>
                            <h3 className={style.icondescription}>Model</h3>
                            <h3 className={style.iconProduct}>quatrro</h3>
                        </div>
                    </div>
                    <div className={style.iconMain}>
                        <IoLocationSharp className={style.icon}/>
                        <div>
                            <h3 className={style.icondescription}>Mileage</h3>
                            <h3 className={style.iconProduct}>20Km</h3>
                        </div>
                    </div>
                    <div className={style.iconMain}>
                        <SlCalender className={style.icon} />
                        <div>
                            <h3 className={style.icondescription}>Year</h3>
                            <h3 className={style.iconProduct}>2020</h3>
                        </div>
                    </div>
                </div>
                <div className={style.iconCon2}>
                    <div className={style.iconMain}>
                    <BsFuelPumpDiesel className={style.icon} />
                    <div>
                        <h3 className={style.icondescription}>Consumption</h3>
                        <h3 className={style.iconProduct}>20 -25Mph</h3>
                    </div>
                    </div>
                    <div className={style.iconMain}>
                    <MdAirlineSeatLegroomExtra className={style.icon} />
                    <div>
                        <h3 className={style.icondescription}>Seats</h3>
                        <h3 className={style.iconProduct}>4 seats</h3>
                    </div>
                    </div>
                </div>
                <div className={style.detail}>
                    <h2  className={style.detailView}>View Details</h2>
                    <FaRegBookmark className={style.icon}/>
                </div>
                </div> 
                
                    </Link>
                    </div>
                )
            })
        }
    </>   
   
  )
}

export default Cards