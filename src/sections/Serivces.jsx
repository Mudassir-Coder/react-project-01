import ServiceCards from "../components/ServiceCards";
import { services } from "../constants";

const Serivces = () => {
  return (
    <section className="max-container gap-8 w-full flex flex-wrap justify-center items-center">
      {services.map((card) => (
        <ServiceCards
          key={card.label}
          label={card.label}
          subText={card.subtext}
          imgURL={card.imgURL}
        />
      ))}
    </section>
  );
};

export default Serivces;
