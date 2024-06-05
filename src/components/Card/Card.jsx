import { useRef } from "react";
import styles from "../../styles";
import { cardContents } from "../../constants/carContents";

const Card = ({ activeButtonIndex }) => {
  const containerRef = useRef(null);

  const handleClickNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const handleClickPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="max-w-[1200px] relative">
      <div
        className="flex items-center justify-start px-2 py-2 mx-2 bg-gray-100 overflow-hidden"
        ref={containerRef}
        style={{ overflowX: "scroll", scrollbarWidth: "none" }}
      >
        {cardContents[activeButtonIndex]?.map((card, index) => (
          <div key={index} className="mx-4" style={{ flex: "0 0 300px" }}>
            {" "}
            <div className="flex flex-col justify-left py-2 overflow-hidden rounded-md shadow-md">
              <div className="relative p-2">
                <img
                  src={card.image}
                  alt="Placeholder"
                  className="w-full h-48 object-cover rounded-[10px]"
                />
              </div>
              <div className="px-4">
                <div className="flex flex-col items-start mb-2">
                  <div className="bg-gray-200 border rounded-[5px] px-1 text-[8px] mr-2">
                    {card.year}
                  </div>
                  <p className="text-[14px] font-semibold">{card.title}</p>
                </div>
                <div className="flex flex-row md:flex-col justify-between">
                  <div className="flex flex-col md:flex-row justify-between">
                    <p className="text-[14px] font-semibold">{card.price}</p>|
                    <p className="text-[14px]">{card.monthly}</p>
                  </div>
                  <div className="mt-4 md:mt-0"></div>
                </div>
              </div>
              <hr className="mx-4" />
              <div className="flex flex-col items-center p-2">
                <button className="mt-2 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className={`flex-1 ${styles.flexCenter} w-full my-2 mx-auto text-center`}
      >
        <button
          className={`${styles.flexCenter} w-[50px] h-[50px] mt-4 mr-4
  rounded-full border border-secondary p-[2px] cursor-pointer `}
          onClick={handleClickPrev}
        >
          <span className="font-bold text-[24px] text-secondary">{"<"}</span>
        </button>
        <button
          className={`${styles.flexCenter} w-[40px] h-[40px] mt-4 mr-4
  rounded-full border border-secondary p-[2px] cursor-pointer `}
          onClick={handleClickNext}
        >
          <span className="font-bold text-[18px] text-secondary"> {">"}</span>
        </button>
      </div>
    </div>
  );
};

export default Card;
