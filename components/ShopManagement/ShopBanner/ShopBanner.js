import Image from "next/image";
import banner from "../../../public/admin.png";
import banner1 from "../../../public/remove-bg-678.jpg";
import banner2 from "../../../public/bg-image.png";

const ShopBanner = () => {
  return (
    <div className="bg-gradient-to-tl from-gray-200 via-slate-200 to-gray-400 relative">
      <Image
        src={banner}
        className="absolute mix-blend-multiply"
        height={700}
        alt="Banner"
        layout="responsive"
      />
      <div className="absolute top-10 w-full flex justify-start items-start px-20 py-24">
        <div className="w-1/2">
          <h4 className="text-4xl mr-4 font-semibold text-gray-800">
            Search Your Shop:
          </h4>
          <input
            type="text"
            placeholder="Shop Name/ID No./Mobile Number"
            className="mt-3 mb-32 w-full px-3 py-2 border border-green-400 rounded-lg focus:outline-none"
          />
          <br />
          <div className="">
            <h3 className="font-semibold text-xl md:text-3xl lg:text-4xl xl:text-4xl text-gray-700 py-2">
              Swadesh Bangladesh Shop Pannel
            </h3>
            {/* <p className="md:text-lg my-5">
              The Administration Panel (or the admin panel for short) is the
              primary tool for you to work with your online store. Here you can
              manage products and orders, offer discounts, interact with your
              customers, change the look of your store and do much more.
            </p> */}
          </div>
          <div className="w-full mt-10">
            <button className="mr-4 px-10 py-3 bg-yellow-300 rounded-lg font-bold hover:bg-yellow-400 hover:text-white">
              ADD STORE
            </button>
            <button className="px-10 py-3 bg-green-300 rounded-lg font-bold hover:bg-green-400 hover:text-white">
              ABOUT SWADESH
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
