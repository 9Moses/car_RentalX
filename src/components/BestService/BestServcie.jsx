import styles from "../../styles";
import { experience } from "../../assets";
import ServiceButtons from "../serviceButtons/serviceButtons";

const BestServcie = () => {
  return (
    <section id="service" className={`my-10 font-montserrat`}>
      <div className="flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-[34px] font-bold leading-10">
            We Are Ensuring The Best <br />
            Customer Experience
          </h1>
        </div>
        <div
          className={`flex-1 ${styles.flexCenter} w-full my-2 mx-auto text-center`}
        >
          <h4 className="text-secondary text-[14px] ">
            You cannot put a price on your {"family's"} safety and security{" "}
            <br /> on the road.Find a lower price?
          </h4>
        </div>
        <div>
          <img
            src={experience}
            alt="customer"
            className={`${styles.flexCenter} w-3/4 my-2 mx-auto `}
          />
        </div>
      </div>
      <ServiceButtons />
    </section>
  );
};

export default BestServcie;
