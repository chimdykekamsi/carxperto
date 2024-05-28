import React from "react";
// import Table from '../components/Subscription/Table';
import Footer from "../components/Footer/Footer";
import SecNavbar from "../components/Navbar/SecNavbar";
import Price from "../components/Price/Price";

function Prices() {
  return (
    <div>
      <section className="w-full h-full">
        <SecNavbar />
        <section className="flex flex-col items-center mb-10">
          <Price />
        </section>
        <Footer />
      </section>
    </div>
  );
}

export default Prices;
