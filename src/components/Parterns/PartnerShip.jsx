import styles from "../../styles";
import { clients } from "../../constants";

const PartnerShip = () => {
  return (
    <section
      id="partners-container"
      className={`${styles.flexCenter} my-4 overflow-x-hidden `}
    >
      <div className="container py-2 px-[128px]">
        <div className=" px-12">
          <div className={`${styles.flexCenter} w-full`}>
            {clients.map((client) => (
              <div
                key={client.id}
                className={`flex ${styles.flexCenter} sm:min-w-[192px] min-w-[100px]`}
              >
                <img
                  src={client.logo}
                  alt="logo"
                  className="sm:w-[80px] w-[50px] object-contain cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerShip;
