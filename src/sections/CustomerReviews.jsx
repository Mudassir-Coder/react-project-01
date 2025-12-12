import ReviewCard from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <div className="flex flex-col gap14 justify-center items-center">
      <h2 className="font-bold text-4xl max-md:text-center">
        What Our <span className="text-red-400">Customers</span> Say?
      </h2>
      <p className="max-w-lg text-center mt-5 text-gray-500 max-md:text-center">
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </p>
      <div className="flex max-lg:flex-col max-lg:gap-14 mt-10 justify-evenly w-full">
        {reviews.map((review) => {
          return (
            <ReviewCard
              imgURL={review.imgURL}
              rating={review.rating}
              feedback={review.feedback}
              customerName={review.customerName}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CustomerReviews;
