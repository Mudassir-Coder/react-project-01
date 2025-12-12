import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";
const Nav = () => {
  return (
    <header className="padding-x py-8  fixed top-0 left-0 z-20 w-full bg-white">
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} width={130} height={29} alt="header logo" />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                className="text-lg text-gray-500 leading-normal"
                href={link.href}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
