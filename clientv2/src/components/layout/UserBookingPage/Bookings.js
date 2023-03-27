import { useState, useEffect } from "react";
import UserBooking from "../../ui/UserBooking";

const Bookings = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:6003/booking`);

      console.log(response);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const bookingsRes = await response.json();
      if (!bookingsRes) {
        window.alert(`Listings cannot be retrieved`);
        return;
      } else {
        setBookings(bookingsRes);
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  const renderSwitch = () => {
    switch (activeMenuItem) {
      case 0:
        return (
          <div>
            {bookings.map((booking, index) => {
              return <UserBooking booking={booking} key={index} />;
            })}
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
            <nav className="flex grow mt-4 sm:mt-0">
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
