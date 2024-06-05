import styles from "../../styles";
import { steps } from "../../constants";
import Cards from "../Cards/Cards";

const Business = () => {
  return (
    <section id="share" className={`my-10 font-montserrat`}>
      <div className="flex flex-col items-center">
        <div
          className={`flex-1 ${styles.flexCenter} w-full my-2 mx-auto text-center`}
        >
          <h4 className="text-secondary text-[14px] font-bold">HOW IT WORKS</h4>
        </div>
        <div className="text-center">
          <h1 className="text-[34px] font-semibold">
            Rentgo following 3 working Steps
          </h1>
        </div>
        <div
          className={`flex justify-between items-center md:flex-col flex-row`}
        >
          <div className="flex flex-wrap sm:justify-start justify-center w-full">
            {steps.map((step) => (
              <Cards key={step.id} {...step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
