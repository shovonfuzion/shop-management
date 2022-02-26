import Image from "next/image";
import banner from "../../../public/678.jpg";
import banner1 from "../../../public/remove-bg-678.jpg";
import banner2 from "../../../public/bg-image.png";

const ShopBanner = () => {
  return (
    <div className="container mx-auto relative">
      <Image
        src={banner2}
        // className="opacity-80"
        alt="Banner"
        width={1250}
        height={900}
      />
      <div className="absolute top-0 md:top-5 bg-slate-300 p-4 rounded-lg bg-opacity-40">
        <h3 className="text-center text-xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-700 py-2">
          Swadesh Shop Pannel
        </h3>
        <p className="md:text-lg text-blue-500">Your future is here</p>
      </div>
      <div className="absolute bottom-60 w-full">
        <div className="w-1/2 float-right bg-slate-400 text-center lg:p-4 rounded-lg bg-opacity-50">
          <h4 className="text-4xl font-bold">Search:</h4>
          <input
            type="text"
            placeholder="Shop Name/ID No./Mobile Number"
            className="my-3 w-2/3 px-3 py-2 border border-green-400 rounded-lg"
          />
          <br />
          <button className="px-10 py-3 bg-yellow-400 rounded-lg font-bold">
            ADD Store
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShopBanner;
