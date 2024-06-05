import styles from "../../styles";
import Buttons from "../Buttons/Buttons";

const ServiceDeals = () => {
  return (
    <section id="ride" className={`my-10 font-montserrat`}>
      <div className="flex flex-col items-center">
        <div
          className={`flex-1 ${styles.flexCenter} w-full my-2 mx-auto text-center`}
        >
          <h4 className="text-secondary text-[14px] font-bold">BEST SERVICE</h4>
        </div>
        <div className="text-center">
          <h1 className="text-[34px] font-bold leading-10">
            Explore Our Top Deal From <br />
            Top-Rated Dealer
          </h1>
        </div>
      </div>
      <Buttons />
    </section>
  );
};

export default ServiceDeals;
