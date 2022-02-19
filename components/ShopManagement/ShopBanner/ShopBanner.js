import Image from "next/image";
import banner from "../../../public/678.jpg";

const ShopBanner = () => {
  return (
    <div className="my-5 banner w-full h-96">
      {/* <Image src={banner} alt="Banner" layout="responsive" /> */}
      <div className="container mx-auto ">
        <h3 className="text-5xl text-gray-700 py-10">
          This is Swadesh Bangladesh Shop Management
        </h3>
        <p>Your future is here</p>
      </div>
    </div>
  );
};

export default ShopBanner;
