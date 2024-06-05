import React from "react";

const Cards = ({ content, title, img }) => {
  return (
    <div className="flex justify-center items-center flex-col px-10 py-2 max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5">
      <div className="flex items-center">
        <div className="flex flex-col justify-center items-center text-center">
          <img
            src={img}
            className="w-[50px] h-[50px] rounded-[8px] object-contain my-4"
            style={{ boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)" }}
          />
          <p className="font-bold text-[16px] leading-[32px]">{title}</p>
          <p className="font-normal text-secondary text-[14px] leading-[32px]">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
