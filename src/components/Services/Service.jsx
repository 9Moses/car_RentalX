import React from "react";
import { service } from "../../assets";
import styles, { layout } from "../../styles";
import { services } from "../../constants";

const ServiceCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row py-2 rounded-[20px] ${
      index !== services.length - 1 ? "mb-2" : "mb-0"
    }`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-[14px] border-[4px] border-white ${styles.flexCenter} bg-primary shadow shadow-sm`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex-col ml-3 ">
      <h4 className="font-bold text-[16px] leading-[25px] mb-1">{title}</h4>
      <p className=" w-2/3 font-normal  text-[12px] text-secondary leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Service = () => {
  return (
    <section className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img src={service} alt="car" className="w-full h-full" />
      </div>

      <div className={`${layout.sectionImg} flex-col font-montserrat `}>
        <div className={`my-2`}>
          <h4 className="text-secondary text-[14px] font-bold">BEST SERVICE</h4>
        </div>
        <div className="">
          <h1 className="text-[34px] font-semibold leading-[40px] mb-2">
            Feel the best experience <br /> with our rental deals
          </h1>
        </div>
        <div className="w-[45px] h-[20px] border-t-[5px] rounded-b-lg border-d_orange"></div>
        {services.map((feature, index) => (
          <ServiceCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Service;
