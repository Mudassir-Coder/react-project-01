import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import { useState } from "react";
const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);
  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center items-center min-h-screen gap-10 max-container p-2"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl text-red-400">Our Summer Collection</p>
        <h1
          className="mt-10 text-8xl max-sm:text-[72px]
        max-sm:leading-[82px] font-bold"
        >
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">
            The New Arrival
          </span>
          <br />
          <span className="text-red-400 mt-3 inline-block">Nike</span> Shoes
        </h1>
        <p className="text-lg leading-8 text-gray-500 mt-6 mb-14 sm:max-w-sm">
          Discover stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full gap-16 mt-20">
          {statistics.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-bold">{item.value}</p>
              <p className="leading-7 ">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 bg-[url('assets/images/collection-background.svg')]  flex justify-center items-center min-h-svh max-xl:min-h-[80vh] max-sm:min-h-[60vh] max-sm:py-4 bg-hero bg-cover bg-center w-full">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="object-contain relative z-10"
        />
        <div className="flex sm:gap-6 gap-4 absolute  -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe, index) => (
            <ShoeCard
              key={index}
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
