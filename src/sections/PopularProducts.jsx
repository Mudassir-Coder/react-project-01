import PopularProductCard from "../components/PopularProductCard";
import { products } from "../constants";
const PopularProducts = () => {
  return (
    <section id="products" className="w-full max-container">
      <div className="flex flex-col gap-6 justify-start">
        <h2 className="text-4xl font-bold">
          Our <span className="text-red-400">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg text-gray-500 ">
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort,design, and value
        </p>
      </div>
      <div className="grid mt-12  lg:gap-6 gap-8 max-sm:mt-15 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
        {products.map((item) => (
          <PopularProductCard
            key={item.imgURL}
            imgURL={item.imgURL}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  );
};

export default PopularProducts;
