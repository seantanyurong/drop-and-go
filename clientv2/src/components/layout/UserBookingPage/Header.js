import { Link } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";

const Header = () => {
  return (
    <header className="z-30 bg-gradient-to-b from-primary-100 to-primary-200">
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex-col sm:flex-row flex items-center justify-between h-16 md:h-20 relative">
          {/* Site branding */}
          <div className="shrink-0 mr-4 py-2">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img className="mx-auto h-8" src={LogoImg} alt="Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow mt-16 sm:mt-0">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                <a
                  href="#about"
                  className="font-semibold text-text-main hover:text-main-hover px-5 flex items-center transition duration-150 ease-in-out underline"
                >
                  How does it work?
                </a>
              </li>
              <li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8 text-text-main"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
