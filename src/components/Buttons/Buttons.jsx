import { buttons } from "../../constants";
import { useState } from "react";
import Card from "../Card/Card";

const Buttons = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);

  const handleButtonClick = (index) => {
    setActiveButtonIndex(index);
  };

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ">
        {buttons.map((button, index) => (
          <div key={button.id}>
            <button
              className={`flex items-center justify-center px-4 py-2 mx-4 rounded-md ${
                activeButtonIndex === index
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 hover:text-white shadow shadow-orange-500"
                  : "bg-primary"
              }`}
              onClick={() => handleButtonClick(index)}
            >
              <img src={button.image} alt="Image" className="w-8 h-6 mr-2" />
              <span>{button.text}</span>
            </button>
          </div>
        ))}
      </div>
      <div className=" ml-20 overflow-x-hidden  bg-gray-100">
        <Card activeButtonIndex={activeButtonIndex} />
      </div>
    </>
  );
};

export default Buttons;
