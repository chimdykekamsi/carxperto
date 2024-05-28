import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import { BsArrowDown } from "react-icons/bs";
import { Link } from "react-router-dom";
function Success() {
  return (
    <section>
      <Navbar />
      <div className="mt-8 p-3 md:p-0">
        <h3 className="text-[24px] font-bold text-[#003B6D] mb-2">
          Yes, you’ve successfully ordered!
        </h3>
        <p className="text-[14px] text-[#36454F] font-normal lg:max-w-[423px] mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="mt-10 mb-32 w-full lg:max-w-[644px] md:h-[500px] md:mx-auto md:rounded-xl md:shadow-2xl p-4 md:p-8">
        <svg
          width="60"
          height="60"
          viewBox="0 0 120 121"
          fill="none"
          className="mx-auto mb-5 "
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.0751953" width="120" height="121" rx="60" fill="#E6F9F8" />
          <path
            d="M106.869 33.6098L46.8691 93.6098C46.3466 94.1342 45.7256 94.5502 45.0419 94.8342C44.3581 95.1181 43.6251 95.2642 42.8848 95.2642C42.1444 95.2642 41.4114 95.1181 40.7277 94.8342C40.0439 94.5502 39.423 94.1342 38.9004 93.6098L12.6504 67.3598C12.1271 66.8365 11.7121 66.2154 11.4289 65.5317C11.1457 64.8481 11 64.1154 11 63.3754C11 62.6354 11.1457 61.9027 11.4289 61.2191C11.7121 60.5354 12.1271 59.9143 12.6504 59.391C13.1736 58.8678 13.7948 58.4527 14.4784 58.1696C15.1621 57.8864 15.8948 57.7406 16.6348 57.7406C17.3747 57.7406 18.1074 57.8864 18.7911 58.1696C19.4747 58.4527 20.0959 58.8678 20.6191 59.391L42.8894 81.6613L98.9098 25.6504C99.9665 24.5937 101.4 24 102.894 24C104.389 24 105.822 24.5937 106.879 25.6504C107.935 26.7071 108.529 28.1403 108.529 29.6348C108.529 31.1292 107.935 32.5624 106.879 33.6191L106.869 33.6098Z"
            fill="#00958D"
          />
        </svg>

        <div>
          <h3 className="text-[18px] text-[#020246] font-medium mb-5">
            Thanks a lot for putting up this order
          </h3>
          <p className="text-[14px] text-[#36454F] font-normal">
            Thank you for choosing Autobuy Insurance! Your insurance policy has
            been <br /> successfully purchased.
          </p>
        </div>
        <section className="bg-transparent border border-gray-400  mt-3 text-xs px-3 py-2 rounded w-full outline-none">
          <div className="flex items-center mb-2 justify-between">
            <span className="text-[14px] text-[#36454F] font-medium">
              Order review
            </span>
            <BsArrowDown />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-[14px] text-[#36454F] font-medium">1 items</p>
            <span className="text-[13px] text-gray-400 font-medium">
              $24,0000
            </span>
          </div>
        </section>
        <section className="w-full  mt-5 text-start">
          <p className="text-[12px] text-[#36454F] font-normal mb-2">
            Policy Documents
          </p>
          <Link to="">
            <p className="text-[18px] text-[#36454F] font-medium underline">
              Download Policy Documents
            </p>
          </Link>
        </section>
        <button
          type="submit"
          className="w-60 lg:w-[90%] mt-10  bg-primary-normal text-white py-3 rounded hover:bg-secondary-normalhover hover:text-accent-white transition duration-300"
        >
          Back to HomePage
        </button>
      </div>
      <Footer />
    </section>
  );
}
export default Success;
