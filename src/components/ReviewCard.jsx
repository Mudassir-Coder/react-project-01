import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, feedback, customerName, rating }) => {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <img src={imgURL} width={127} className="rounded-full" alt="costumer" />
      <p className="text-gray-500 max-w-sm text-center">{feedback}</p>
      <img src={star} alt="rating" />
      <h4 className="font-bold text-xl">{customerName}</h4>
    </div>
  );
};

export default ReviewCard;
