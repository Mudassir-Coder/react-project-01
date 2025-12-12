import { shoe8 } from "../assets/images";
import Button from "../components/Button";

const SuperQuality = () => {
  return (
    <section
      id="abou-us"
      className="flex justify-between items-center max-lg:flex-col "
    >
      <div className="flex flex-col gap-6 max-w-lg">
        <h2 className="capitalize text-[3rem] leading-15 font-bold">
          we provide you <span className="text-red-400">super</span> quality
          <span className="text-red-400"> shoes</span>
        </h2>
        <p className="lg:max-w-lg leading-8 text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          perspiciatis, dicta, at exercitationem recusandae quaerat omnis beatae
          neque ullam similique excepturi vel maiores qui repellendus enim
          libero, explicabo corporis aspernatur.
        </p>
        <p className="leading-8 text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet sunt
          provident aliquam earum animi sed.
        </p>
        <div className="mt-8">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex mt-12 justify-center items-center">
        <img src={shoe8} alt="shoe8" width={550} height={527} />
      </div>
    </section>
  );
};

export default SuperQuality;
