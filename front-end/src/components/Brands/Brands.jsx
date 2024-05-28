import React from 'react'
import style from './brands.module.css'

const Brands = () => {
  return (
    <div className={style.main}>
        <div className={style.container}>
        <div className={style.logoContainer}>
            <img src='/logo/Ford.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 1.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 2.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 3.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 4.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 6.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 8.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
        <div>
            <img src='/logo/image 9.png' className={style.logo} alt='car_logo' />
            <span></span>
        </div>
    </div>
    </div>
    
  )
}

export default Brands