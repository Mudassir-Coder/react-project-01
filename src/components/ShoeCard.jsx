const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-2xl ${
        bigShoeImg === imgURL.bigShoe ? "border-red-400" : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex bg-[url('assets/images/thumbnail-background.svg')] bg-cover bg-center justify-center items-center sm:w-40 h-30 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          className="object-contain"
          width={127}
          height={103.34}
        />
      </div>
    </div>
  );
};

export default ShoeCard;
