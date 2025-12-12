import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="w-full max-container flex justify-between items-center max-xl:flex-col-reverse gap-10">
      <div>
        <img src={offer} alt="special offer" width={773} height={687} />
      </div>
      <div className="flex flex-1 flex-col gap-12 max-md:text-center">
        <h2 className=" font-bold text-5xl">
          <span className="text-red-400">Special</span> Offer
        </h2>
        <p className="text-gray-500 ">
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart
        </p>
        <p className="text-gray-500 ">
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>
        <div className="my-5 flex gap-5">
          <Button iconURL={arrowRight} label="Shop Now" />
          <Button
            backgroundColor="white"
            textColor="gray-500"
            label="Learn More"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
