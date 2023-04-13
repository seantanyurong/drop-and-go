import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserBookingProvider from "../../ui/UserBookingProvider";

const ProviderBookings = () => {
    let [activeMenuItem, setActiveMenuItem] = useState(0);
    const [specificListing, setSpecificListing] = useState(null);
    const [bookings, setBookings] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(
                `http://localhost:6003/booking/listings/${id}`
            );

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
                console.log(bookingsRes);
                setBookings(bookingsRes);
            }
        }

        fetchData();

        return;
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        async function fetchData() {

            const response = await fetch(
                `http://localhost:6003/listing/${id}`
            );

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const listingRes = await response.json();
            if (!listingRes) {
                window.alert(`Listing cannot be retrieved`);
                return;
            } else {
                console.log(listingRes.name);
                setSpecificListing(listingRes.name);
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
                            if (
                                booking.status !== "Collected" &&
                                booking.status !== "Cancelled"
                            )
                                return <UserBookingProvider booking={booking} key={index} />;
                        })}
                    </div>
                );
            case 1:
                return (
                    <div>
                        {bookings.map((booking, index) => {
                            if (booking.status === "Collected")
                                return <UserBookingProvider booking={booking} key={index} />;
                        })}
                    </div>
                );
            case 2:
                return (
                    <div>
                        {bookings.map((booking, index) => {
                            if (booking.status === "Cancelled")
                                return <UserBookingProvider booking={booking} key={index} />;
                        })}
                    </div>
                );
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
                            <p className="text-text-main text-xl">Bookings at: {specificListing}</p>
                        </div>

                        {/* Navigation */}
                        <nav className="flex grow mt-4 sm:mt-0">
                            <ul className="flex grow justify-end flex-wrap items-center">
                                <li
                                    onClick={() => setActiveMenuItem(0)}
                                    className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 0
                                        ? "bg-text-main text-text-dark"
                                        : "text-text-main"
                                        } `}
                                >
                                    Active
                                </li>
                                <li
                                    onClick={() => setActiveMenuItem(1)}
                                    className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 1
                                        ? "bg-text-main text-text-dark"
                                        : "text-text-main"
                                        } `}
                                >
                                    Completed
                                </li>
                                <li
                                    onClick={() => setActiveMenuItem(2)}
                                    className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 2
                                        ? "bg-text-main text-text-dark"
                                        : "text-text-main"
                                        } `}
                                >
                                    Cancelled
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

export default ProviderBookings;
