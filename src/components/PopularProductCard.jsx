import { star } from "../assets/icons";

const PopularProductCard = ({ price, imgURL, name }) => {
  return (
    <div className="flex flex-1 flex-col max-sm:w-full w-full">
      <img src={imgURL} alt="popular products w-[280px] h-[280px]" />
      <div className="mt-8 flex flex-col justify-start">
        <p className="leading-normal">
          <img
            src={star}
            alt="rating"
            className="inline-block mr-1"
            width={15}
          />
          (4.5)
        </p>
        <h3 className="mt-2 text-[1rem] leading-normal font-semibold">
          {name}
        </h3>
        <p className=" mt-2 font-semibold text-red-400">{price}</p>
      </div>
    </div>
  );
};

export default PopularProductCard;
