const Button = ({ iconURL, label, backgroundColor, textColor }) => {
  const classes = `${
    backgroundColor
      ? `bg-${backgroundColor}`
      : "bg-red-400 border-red-400 text-white hover:bg-red-500 active:bg-red-500"
  } ${textColor ? `text-${textColor} border-gray-500` : "text-white"} `;

  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 transition-colors py-4 border  rounded-4xl text-lg leading-none cursor-pointer font-semibold ${classes}`}
    >
      {label}{" "}
      {iconURL && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconURL}
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
