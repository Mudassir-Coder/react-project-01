import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex max-md:flex-col gap-12 justify-center items-center"
    >
      <h3 className="text-4xl font-bold md:max-w-md leading-12">
        {" "}
        Sign up for <span className="text-red-400">Updates</span> & News Letters
      </h3>
      <div className="border flex-1 border-gray-400 flex justify-between items-center max-md:justify-start gap-5  rounded-full px-2 py-1 w-full">
        <input
          type="email"
          name="email"
          className="px-5 py-2 text-gray-500 rounded-full flex-1 outline-none focus:ring ring-red-400 "
          placeholder="eg.subscribe@nike.com"
        />
        <Button label="Sign Up" />
      </div>
    </section>
  );
};

export default Subscribe;
