import { Link } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";

const Header = () => {
  return (
    <header className="z-30 bg-gradient-to-b from-primary-100 to-primary-200 pb-6 md:pb-0">
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Site branding */}
          <div className="shrink-0 mr-4 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img className="mx-auto h-8" src={LogoImg} alt="Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow mt-4 sm:mt-0">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="/AboutUs"
                  className="font-semibold text-text-main hover:text-main-hover px-5 flex items-center transition duration-150 ease-in-out underline"
                >
                  About Us
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
