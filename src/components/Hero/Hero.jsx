import { useState } from "react";
import styles from "../../styles";
import { apple, google, car, location, time } from "../../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const locationsArray = [
  "New York",
  "Los Angeles",
  "Chicago",
  "Miami",
  "San Francisco",
];

const Hero = () => {
  const [selectedLocation, setSelectedLocation] = useState("");
  const [pickupDate, setPickupDate] = useState(null);
  const [returnDate, setReturnDate] = useState(null);

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handlePickupDateChange = (date) => {
    setPickupDate(date);
  };

  const handleReturnDateChange = (date) => {
    setReturnDate(date);
  };

  return (
    <section
      id="rent"
      className={`font-montserrat flex md:flex-row flex-col px-6 md:px-14`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col md:px-16 px-6 relative`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-semibold ss:text-[72px] text-[42px] ss:leading-[100px] leading-[55px]">
            Looking to save more
            <br className="sm:block hidden" /> <span>on rental car?</span>
            <div className="w-[45px] h-[20px] border-t-[5px] rounded-b-lg border-d_orange"></div>
          </h1>
        </div>
        <div className="">
          <p className={`${styles.paragraph} max-w-[470px] mt-5 text-[14px]`}>
            Discover RentalX car rental options in USA with Rent Car.{" "}
            <br className="sm:hidden" />
            Select from a range of car options and local specials.
          </p>

          <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
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
      <div
        className={`flex-1 xl:flex hidden ${styles.flexCenter} md:my-0 my-6`}
      >
        <img
          src={car}
          alt="car"
          className="w-[100%] h-[100%] md:w-auto md:h-auto"
        />
      </div>

      <form className="hidden absolute bottom-[4rem] left-1/2 transform -translate-x-1/2 w-full md:w-[70%] xl:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 shadow-md text-gray p-4 bg-white rounded-[10px] items-center">
        <div className="flex flex-col sm:flex-row items-center w-full">
          <div className="relative w-full">
            <img
              src={location}
              alt="Location"
              className="absolute h-6 w-6 top-1/2 transform -translate-y-1/2 left-3"
            />
            <select
              id="location"
              name="location"
              className="block w-full pl-10 pr-3 py-2 focus:outline-none focus:border-blue-300 focus:rounded-md focus:ring focus:ring-blue-200"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="">Choose a location</option>
              {locationsArray.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Date Picker - Pick-up */}
        <div className="flex flex-col sm:flex-row items-center w-full">
          <div className="relative flex items-center w-full">
            <img src={time} alt="time" className="h-6 w-6 mr-2" />
            <DatePicker
              id="pickupDate"
              selected={pickupDate}
              onChange={handlePickupDateChange}
              className="block w-full pl-2 pr-3 py-2 rounded-md focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholderText="Pick-up time"
            />
          </div>
        </div>

        {/* Date Picker - Return */}
        <div className="flex flex-col sm:flex-row items-center w-full">
          <div className="relative flex items-center w-full">
            <img src={time} alt="time" className="h-6 w-6 mr-2" />
            <DatePicker
              id="returnDate"
              selected={returnDate}
              onChange={handleReturnDateChange}
              className="block w-full pl-2 pr-3 py-2 rounded-md focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
              placeholderText="Return date"
            />
          </div>
        </div>

        <div className="flex w-full">
          <button className="w-full h-full bg-blue-900 text-white text-[18px] font-bold py-2 px-4 rounded-md">
            Search
          </button>
        </div>
      </form>
    </section>
  );
};

export default Hero;
