import React from 'react'
import style from './paymentCard.module.css'
import { Link } from 'react-router-dom'
import { FaRegCircle } from "react-icons/fa";
import { FaCcStripe } from "react-icons/fa";
import { GrPaypal } from "react-icons/gr";
import { SiZelle } from "react-icons/si";
import { FaLock } from "react-icons/fa";


const PaymentCard = () => {
  return (
    <div className={style.container}>
        <h1 className={style.header}>Payment</h1>
        <div>
            <button to='' className={style.btn}>
                <Link to='/home'>
                    <div className={style.card}>
                        <FaRegCircle className={style.icon}/>
                        <span className={style.iconBox}>
                            <div>
                                <h3 className='text-start text-[19px] text-primary-normal'>Stripe</h3>
                                <p className='text-[12px] text-slate-500'>Unlimited users and unlimited individual data.</p>
                            </div>
                            <FaCcStripe className={style.icon2} />
                        </span>
                    </div>
                </Link>
            </button>
            <button to='' className={style.btn}>
                <Link to='/home'>
                    <div className={style.card}>
                        <FaRegCircle className={style.icon}/>
                        <span className={style.iconBox2}>
                            <div>
                                <h3 className='text-start text-[19px] text-primary-normal'>Paypal</h3>
                                <p className='text-[12px] text-slate-500'>You will be redirected to the PayPal after submitting your order</p>
                            </div>
                            <GrPaypal className={style.icon2} />
                        </span>
                    </div>
                </Link>
            </button>
            <button to='' className={style.btn}>
                <Link to='/home'>
                    <div className={style.card}>
                        <FaRegCircle className={style.icon}/>
                        <span className={style.iconBox}>
                            <div>
                                <h3 className='text-start text-[19px] text-primary-normal'>Zelle</h3>
                                <p className='text-[12px] text-slate-500'>Unlimited users and unlimited individual data.</p>
                            </div>
                            <SiZelle  className={style.icon2} />
                        </span>
                    </div>
                </Link>
            </button>
        </div>
        <div className={style.lock}>
            <FaLock className={style.lockIcon}/>
            <h5 className={`text-slate-500 ${style.lockText}`}>We protect your payment information using encryption to provide bank-level security.</h5>

        </div>
        <div className={style.btnBox}>
            <button>
                <a
                href="/sign-up"
                className="w-28 h-[47px] mb-1 bg-primary-light  py-5 rounded px-10 hover:bg-secondary-normalhover  mt-[10px]"
            >
                Back
            </a>
            </button>
            <button>
                    <a
                    href="/sign-up"
                    className="w-28 h-[47px] mb-1 bg-primary-normal text-white py-5 rounded px-5 hover:bg-secondary-normalhover  mt-[10px]"
                    >
                    Continue
                </a>
            </button>
       
        </div>
    </div>
  )
}

export default PaymentCard