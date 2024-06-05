import { experience } from "../../constants";

const ButtomCard = ({ icon, title, img, index }) => (
  <div
    className={`flex justify-center items-center bg-primary h-[70px] shadow-md rounded-[10px] mx-2 ${
      index !== experience.length - 1 ? "mb-2" : "mb-0"
    } `}
  >
    <div className={`flex justify-center items-center px-2 `}>
      <div className="flex justify-center items-center w-[45px] h-[45px] mx-1 border border-primary rounded-[10px] bg-white">
        <img className="p-2" src={icon} alt="icon_engine" />
      </div>
      <h4 className="text-[12px] px-1">{title}</h4>
      {/* Conditionally render the image */}

      <div className="flex justify-center items-center w-[35px] h-[35px]">
        <img className="px-[10px]" src={img} alt="check mark" />
      </div>
    </div>
  </div>
);

const serviceButtons = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 gap-4 my-10">
      {experience.map((experiences, index) => (
        <ButtomCard key={experiences.id} {...experiences} index={index} />
      ))}
    </div>
  );
};

export default serviceButtons;
