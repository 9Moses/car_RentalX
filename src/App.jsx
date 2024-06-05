import styles from "./styles";
import {
  Hero,
  Navbar,
  PartnerShip,
  Business,
  Service,
  ServiceDeals,
  BestServcie,
  RentalApp,
  Footer,
} from "./components";

const App = () => {
  return (
    <>
      <div className=" bg-primary w-full sticky z-30 top-0 overflow-hidden">
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <PartnerShip />
          <Business />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Service />
        </div>
      </div>

      <div className={`${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ServiceDeals />
          <BestServcie />
          <RentalApp />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
