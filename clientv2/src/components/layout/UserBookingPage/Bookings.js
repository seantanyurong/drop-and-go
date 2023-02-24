import { useState } from "react";

const Bookings = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);

  const renderSwitch = () => {
    switch (activeMenuItem) {
      case 0:
        return (
          <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover">
            <div className="flex items-center mb-1 justify-between">
              <div className="flex space-x-3 items-center">
                <h3 className="font-semibold">Wet Designs Pte Ltd</h3>
                <p className="rounded-md bg-text-dark text-text-main p-1.5 text-xs font-medium">
                  Confirmed
                </p>
                <p className="rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium">
                  Singapore
                </p>
              </div>
              <div className="flex items-center space-x-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <p className="font-medium text-sm">1</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-light">
                <span className="font-semibold">You</span> confirmed booking a
                minute ago
              </p>
            </div>
          </div>
        );
      case 1:
        return <p>Completed bookings</p>;
      case 2:
        return <p>Cancelled bookings</p>;
      default:
        return <p>All bookings</p>;
    }
  };

  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">My bookings</p>
            </div>

            {/* Navigation */}
            <nav className="flex grow mt-16 sm:mt-0">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li
                  onClick={() => setActiveMenuItem(0)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 0
                      ? "bg-text-main text-text-dark"
                      : "text-text-main"
                  } `}
                >
                  Active
                </li>
                <li
                  onClick={() => setActiveMenuItem(1)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${
                    activeMenuItem === 1
                      ? "bg-text-main text-text-dark"
                      : "text-text-main"
                  } `}
                >
                  Completed
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {/* Results */}
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {renderSwitch()}
      </div>
    </div>
  );
};

export default Bookings;
