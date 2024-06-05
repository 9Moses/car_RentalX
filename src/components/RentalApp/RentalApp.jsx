import { apple, google, phone } from "../../assets";

const RentalApp = () => {
  return (
    <section className=" font-montserrat flex flex-row justify-center items-center my-10 bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl relative overflow-hidden">
      {/* First div */}
      <div className="flex flex-col justify-center items-center px-10 py-10 mr-14">
        {/* First text div */}
        <div className="flex flex-row justify-center item-center w-full">
          <h1 className="flex-1  font-normal text-[24px] sm:text-[30px]  leading-[35px] text-white">
            Download the free
            <br className="sm:block hidden" /> <span>RentalX app</span>
          </h1>
        </div>
        <div className="">
          <p
            className={` font-normal text-primary leading-[20.8px] max-w-[270px] mt-2 text-[14px] `}
          >
            for faster, easier booking and exclusive deals.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-5 mt-6">
            <img
              src={apple}
              alt="apple_store"
              className="w-[129px] h-[42px] object-contain mr-5 cursor-pointer"
            />
            <img
              src={google}
              alt="google_play"
              className="w-[129px] h-[42px] object-contain cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="absolute hidden lg:flex right-0 top-0 bottom-0 py-10 mr-14">
        <img src={phone} alt="Image" className="h-[544px] object-cover" />
      </div>
    </section>
  );
};

export default RentalApp;
