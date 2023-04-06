import React from "react";
import { CheckCircleIcon, StarIcon } from "@heroicons/react/20/solid";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const UserBookingDetails = () => {
  let { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [listing, setListing] = useState(null);
  const [status, setStatus] = useState();
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const [finalPrice, setFinalPrice] = useState();

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `http://localhost:6003/booking/${bookingId}`
      );

      console.log(bookingId);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const bookingRes = await response.json();
      if (!bookingRes) {
        window.alert(`booking with id ${bookingId} not found`);
        return;
      } else {
        setBooking(bookingRes);
        setStatus(bookingRes.status);
        setStartTime(bookingRes.startTime);
        setEndTime(bookingRes.endTime);
        setFinalPrice(bookingRes.finalPrice || 0.0);

        const response2 = await fetch(
          `http://localhost:6003/listing/${bookingRes.listing_id}`
        );

        if (!response2.ok) {
          const message = `An error has occurred: ${response2.statusText}`;
          window.alert(message);
          return;
        }

        const listingRes = await response2.json();
        if (!listingRes) {
          window.alert(`listing with id ${bookingRes.listing_id} not found`);
          return;
        } else {
          setListing(listingRes);
        }
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  const hours = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalHours = Math.ceil(difference / (1000 * 3600));
    return TotalHours;
  };

  useEffect(() => {
    async function onStatusChange() {
      console.log(status);
      console.log(startTime);

      const editedBooking = {
        status: status,
        startTime: startTime,
        endTime: endTime,
        finalPrice: finalPrice,
      };

      // This will send a post request to update the data in the database.
      await fetch(`http://localhost:6003/booking/update/${bookingId}`, {
        method: "POST",
        body: JSON.stringify(editedBooking),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    onStatusChange();

    // eslint-disable-next-line
  }, [status, endTime, startTime, finalPrice]);

  return (
    <div>
      {listing && (
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
          {/* Location details */}
          <a
            target="_blank"
            href={`https://maps.google.com/?q=${listing.latitude},${listing.longitude}`}
            rel="noreferrer"
          >
            <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md cursor-pointer hover:bg-box-hover">
              <div className="flex items-center mb-1 justify-between">
                <div className="flex space-x-3 items-center">
                  <h3 className="font-semibold">{listing.name}</h3>
                </div>
                <div className="flex items-center space-x-1">
                  <p className="text-sm font-semibold text-primary-200">
                    Get Directions
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-light">{listing.address}</p>
                <div className="flex items-center mt-1">
                  <p className="text-sm font-light">4.7</p>
                  <StarIcon
                    className="h-4 w-4 ml-1 text-yellow-400"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </div>
          </a>
          <div className="flex justify-end">
            <button
              disabled={status === "Cancelled"}
              className={`rounded-md p-1.5 px-4 text-xs font-medium ${
                status === "Cancelled"
                  ? "bg-gray-100 text-slate-300"
                  : "bg-box-gray"
              }`}
              onClick={() => setStatus("Cancelled")}
            >
              Cancel Booking
            </button>
          </div>
          <h3 className="text-xl text-text-dark font-semibold py-6">
            Your booking timeline
          </h3>

          {/* Progress bar */}
          <div>
            <div className="flex space-x-4 items-center mb-10">
              <CheckCircleIcon
                className="h-10 w-10 text-emerald-400"
                aria-hidden="true"
              />
              <h4 className="font-semibold text-lg text-gray-300">
                Booking for {booking.bags} Bag today at {listing.name}
              </h4>
            </div>
            <div className="flex space-x-4 items-center mb-10">
              <CheckCircleIcon
                className={`h-10 w-10 ${
                  (status === "Handed over" || status === "Collected") &&
                  "text-emerald-400"
                }`}
                aria-hidden="true"
              />
              <h4 className="font-semibold text-lg">Hand over luggage</h4>
              <button
                disabled={
                  status === "Handed over" ||
                  status === "Collected" ||
                  status === "Cancelled"
                }
                className={`rounded-md p-1.5 px-4 text-md font-medium ${
                  status === "Handed over" ||
                  status === "Collected" ||
                  status === "Cancelled"
                    ? "bg-gray-100 text-slate-300"
                    : "bg-box-gray"
                }`}
                onClick={() => {
                  setStartTime(new Date());
                  setStatus("Handed over");
                }}
              >
                Handed Over
              </button>
              {(status === "Handed over" || status === "Collected") && (
                <h4 className="font-semibold text-sm">
                  Time Started: {startTime?.toLocaleString()}
                </h4>
              )}
            </div>
            <div className="flex space-x-4 items-center mb-10">
              <CheckCircleIcon
                className={`h-10 w-10 ${
                  status === "Collected" && "text-emerald-400"
                }`}
                aria-hidden="true"
              />
              <h4 className="font-semibold text-lg">Reclaim your baggage</h4>
              <button
                disabled={status === "Collected" || status === "Cancelled"}
                className={`rounded-md p-1.5 px-4 text-md font-medium ${
                  status === "Collected" || status === "Cancelled"
                    ? "bg-gray-100 text-slate-300"
                    : "bg-box-gray"
                }`}
                onClick={(e) => {
                  setEndTime(new Date());
                  if (booking.paynow) {
                    setFinalPrice(
                      listing.pricePerHour[0] *
                        booking.bags *
                        hours(endTime, startTime) +
                        1
                    );
                  }
                  setStatus("Collected");
                }}
              >
                Collected
              </button>
              {status === "Collected" && (
                <h4 className="font-semibold text-sm">
                  Time Ended: {endTime?.toLocaleString()}
                </h4>
              )}
            </div>

            {/* Summary */}
            <div className="bg-box-gray p-8">
              <h3 className="text-3xl text-text-dark font-semibold mb-6">
                Booking Summary
              </h3>
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm text-text-dark font-light">
                  {`Storage, ${
                    booking.paynow ? "pay as you go" : booking.days
                  } day(s) x ${booking.bags} bag(s)`}
                </p>
                <p className="text-sm text-text-dark font-light">
                  {" "}
                  {`${
                    booking.paynow
                      ? "$" + listing.pricePerHour[0] * booking.bags + "/hour"
                      : "$" +
                        listing.pricePerDay[0] * booking.bags * booking.days
                  }`}
                </p>
              </div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-text-dark font-light">Service fee</p>
                <p className="text-sm text-text-dark font-light">$1.00</p>
              </div>{" "}
              {/* <div className="flex items-center justify-between mb-6">
                <p className="text-sm text-text-dark font-light">Insurance</p>
                <p className="text-sm text-text-dark font-light">+ $0.35</p>
              </div> */}
              <div className="h-[1px] w-full bg-gray-200 mx-auto mb-6"></div>
              <div className="flex items-center justify-between mb-6">
                <p className="text-lg text-text-dark font-bold">Total</p>
                <p className="text-lg text-text-dark font-bold">
                  {`$${finalPrice || 0.0}`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBookingDetails;
