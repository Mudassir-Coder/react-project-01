const ServiceCards = ({ label, imgURL, subText }) => {
  return (
    <div className="flex flex-col justify-center gap-4 rounded-2xl items-center shadow-2xl px-15 py-15">
      <div className="rounded-full w-11 h-11 flex justify-center items-center bg-red-400">
        <img src={imgURL} width={26} alt="icon" />
      </div>
      <p className="font-semibold">{label}</p>
      <p className="max-w-xs text-center text-gray-500">{subText}</p>
    </div>
  );
};

export default ServiceCards;
