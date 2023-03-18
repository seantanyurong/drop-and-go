import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBooking = (props) => {
  let navigate = useNavigate();
  const [listing, setListing] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const id = props.booking.listingID;
      const response = await fetch(`http://localhost:6003/listing/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const listingRes = await response.json();
      if (!listingRes) {
        window.alert(`Listing with id ${id} not found`);
        return;
      } else {
        setListing(listingRes);
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {listing && (
        <div
          className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover"
          onClick={() => navigate(`/user/bookings/${props.booking.listingID}`)}
        >
          <div className="flex items-center mb-1 justify-between">
            <div className="flex space-x-3 items-center">
              <h3 className="font-semibold">{listing.name}</h3>
              <p className="rounded-md bg-text-dark text-text-main p-1.5 text-xs font-medium">
                Confirmed
              </p>
              <p className="rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium">
                {listing.address}
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
              <p className="font-medium text-sm">{props.booking.bags}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-light">
              <span className="font-semibold">From:</span>{" "}
              {props.booking.startDate}
            </p>
            <p className="text-sm font-light">
              <span className="font-semibold">To:</span> {props.booking.endDate}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBooking;
