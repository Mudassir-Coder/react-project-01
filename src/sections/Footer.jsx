import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container flex flex-col gap-12">
      <div className="flex flex-col items-start gap-6">
        <img src={footerLogo} width={167} alt="Nike" />
        <p className="text-gray-300 max-w-xs leading-7 text-sm">
          Get Shoes ready for the new term at your nearest Nike store. Find Your
          Perfect Size in Store. Get rewards
        </p>
        <div className="flex gap-4">
          {socialMedia.map((item) => {
            return (
              <div className="bg-white w-11 h-11 flex justify-center items-center rounded-full">
                <img src={item.src} alt={item.alt} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-wrap  gap-[20rem] max-md:gap-8 ">
        {footerLinks.map((link) => {
          return (
            <div>
              {" "}
              <h3 className="text-white text-2xl">{link.title}</h3>
              <ul className="mt-4">
                {link.links.map((link) => (
                  <li key={link.name} className="my-1">
                    <a className="text-gray-300" href="/">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
      <div className="flex max-md:justify-between  max-sm:gap-4 items-center">
        <p className="text-gray-300 text-sm flex-1 font-semibold">
          <img
            src={copyrightSign}
            className="inline-block mr-1"
            width={17}
            alt="copyright"
          />{" "}
          Copyright. MudassirDev All rights reserved
        </p>
        <a href="/" className="text-gray-300 font-semibold text-sm">
          Terms and conditions
        </a>
      </div>
    </footer>
  );
};

export default Footer;
