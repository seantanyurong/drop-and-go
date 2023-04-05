import { Link } from "react-router-dom";
import LogoImg from "../../../assets/Logo.png";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const Header = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

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
                  href="#about"
                  className="font-semibold text-text-main hover:text-main-hover px-5 flex items-center transition duration-150 ease-in-out underline"
                >
                  How does it work?
                </a>
              </li>
              <li>
                <Menu as="div" className="inline-block text-left">
                  <div>
                    <Menu.Button>
                      <UserCircleIcon className="h-8 w-8" aria-hidden="true" />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-4 text-center">
                        <div>
                          <p
                            className="text-text-dark
                              block px-4 text-xs"
                          >
                            Signed in as
                          </p>
                          <h3
                            className="text-text-dark
                              block px-4 text-lg font-semibold"
                          >
                            Sean Tan
                          </h3>
                        </div>
                      </div>
                      <div className="py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              href="/user/bookings"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-text-dark",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              My bookings
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-text-dark",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Account
                            </div>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              href="#"
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-text-dark",
                                "block px-4 py-2 text-sm"
                              )}
                            >
                              Logout
                            </div>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
