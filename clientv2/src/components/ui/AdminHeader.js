import { Link, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/Logo.png";
import { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { UserCircleIcon } from "@heroicons/react/20/solid";

const AdminHeader = () => {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  let navigate = useNavigate();

  const credentials = {
    loggedIn: "",
    id: "",
    name: "",
  };

  const [authState, setAuthState] = useState(credentials);

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login/admin");
  };

  const handleAccount = () => {
    navigate(`/admin/profile/${authState.id}`);
  };

  useEffect(() => {
    async function fetchData() {
      console.log("Check If Logged In");
      const settings = {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      };

      const responseAuth = await fetch(
        "https://is3106-dropandgo.herokuapp.com/admin/authenticate",
        settings
      );

      if (!responseAuth) {
        const message = `An error has occurred: ${responseAuth.message}`;
        window.alert(message);
        return;
      }

      const authRes = await responseAuth.json();
      console.log(authRes);

      if (!authRes) {
        const message = `An error has occurred: ${authRes.message}`;
        window.alert(message);
        return;
      }

      if (authRes.isLoggedIn) {
        console.log("Fetch Data Triggered");
        const responseDetails = await fetch(
          `https://is3106-dropandgo.herokuapp.com/admin/${authRes.id}`
        );

        if (!responseDetails) {
          const message = `An error has occurred: ${responseDetails.message}`;
          window.alert(message);
          return;
        }

        const detailsRes = await responseDetails.json();
        console.log(detailsRes);

        if (detailsRes === null) {
          navigate("/login/admin");
        } else {
          setAuthState(authRes);
        }
      } else {
        navigate("/login/admin");
      }
    }

    fetchData();
    return;
    // eslint-disable-next-line
  }, []);

  return (
    <header className="z-30 bg-gradient-to-b from-primary-100 to-primary-200 pb-6 md:pb-0">
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20 relative">
          {/* Site branding */}
          <div className="shrink-0 mr-4 py-2">
            {/* Logo */}
            <Link to="/admin/dashboard" className="flex items-center">
              <img className="mx-auto h-8" src={LogoImg} alt="Logo" />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="flex grow mt-4 sm:mt-0">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              <li>
                {/* 
                <Link to="/about-us" className="flex-none rounded-full bg-white-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                  About Us
                </Link>
                */}
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
                            {authState.name}
                          </h3>
                        </div>
                      </div>
                      <div className="py-1">
                        <Menu.Button>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-text-dark",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={handleAccount}
                            >
                              My Account
                            </div>
                          )}
                        </Menu.Button>
                        <br />
                        <Menu.Button>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-gray-900"
                                  : "text-text-dark",
                                "block px-4 py-2 text-sm"
                              )}
                              onClick={handleLogout}
                            >
                              Logout
                            </div>
                          )}
                        </Menu.Button>
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

export default AdminHeader;
