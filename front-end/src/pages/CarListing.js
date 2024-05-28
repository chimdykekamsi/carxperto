import Footer from "../components/Footer/Footer";

import Hero from "../assets/carList.jpg";
import BrandLink from "../components/BrandGrid.js";
import List from "../components/ListingCard.js";
import CategoryGrid from "../components/CategoryGrid.js";
import SearchComponent from "../components/Search/Search.js";

function CarListing() {
  return (
    <section className="">

      <div className="w-full h-[500px] relative  bg-gradient-to-t from-[#002C52] to-[#034885] inset-0 opacity-85  bg-cover bg-no-repeat flex items-center justify-center">
        <img
          src={Hero}
          alt="bannerIcon"
          className="w-full h-full absolute lg:object-cover object-bottom mix-blend-overlay"
          fetchpriority="high"
        />
        <div className="w-full max-w-[663px] md:h-[130px] absolute mx-auto top-[300px] md:top-[217px] text-white flex flex-col gap-1">
          <p className="lg:w-[217px]  mx-auto text-[16px] font-bold leading-[26.6px] ">
            Discover Your Dream Car
          </p>
          <h3 className="text-[32px] font-bold leading-[48px] ">
            Browse Thousands of Cars for Sale
          </h3>
          <p className="text-[16px] md:text-[20px] font-normal leading-[32px] lg:w-[377px] mx-auto">
            Find the Perfect Car at the Best Price
          </p>
        </div>
        <SearchComponent />
      </div>
      <div className="flex flex-col lg:h-[322.58px] mt-14  max-w-[1280px] mx-auto">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Trusted Brand</h3>
        <BrandLink />
      </div>
      <div className="lg:max-w-[1122px] lg:h-[968px]  mx-auto mt-9 mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Listings</h3>
        <List />
      </div>
      <div className="lg:max-w-[1122px] mb-16  mx-auto mt-9 mb-11 p-2 lg:p-0">
        <h3 className="text-[36px] text-[#003B6D] font-bold">Category</h3>
        <CategoryGrid/>
      </div>

      <Footer />
    </section>
  );
}
export default CarListing;
