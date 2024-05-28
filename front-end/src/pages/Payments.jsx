import React from "react";
// import Table from '../components/Subscription/Table';
import Footer from "../components/Footer/Footer";
import SecNavbar from "../components/Navbar/SecNavbar";
import Price from "../components/Price/Price";
import PaymentCard from "../components/payment/paymentCard";

function Payment() {
  return (
    <div>
      <section className="w-full h-full">
        <SecNavbar />
        <section className="flex flex-col items-center mb-10">
        <div className="mt-24 mb-12">
            <h1 className="text-3xl text-primary-normal font-bold mb-5">How would you like to pay?</h1>
            <h5 className=" text-slate-500 text-center text-[10px] w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime fugiat sequi, nostrum in hic esse molestias vel at, tenetur inventore fugit, dicta ea. Incidunt autem fuga iure maiores facilis officiis?</h5>
        </div>
          <PaymentCard />
        </section>
        <Footer />
      </section>
    </div>
  );
}

export default Payment;