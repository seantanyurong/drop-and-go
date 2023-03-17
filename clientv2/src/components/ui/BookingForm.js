import React from "react";
import {
  StarIcon,
  XCircleIcon,
  CheckCircleIcon,
  CalendarDaysIcon,
  PlusCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = (props) => {
  let [listing, setListing] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bags, setBags] = useState(1);
  const [paynow, setPaynow] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const id = props.listingID;
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

  async function confirmBooking() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    console.log("Submitting");

    await fetch("http://localhost:6003/booking/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        listing: props.listingID,
        startDate: startDate,
        endDate: endDate,
        paynow: paynow,
        bags: bags,
      }),
    }).catch((error) => {
      window.alert(error);
      return;
    });
  }

  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };

  return (
    <div>
      {listing && (
        <div className="z-20 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
          <div className=" relative max-w-5xl md:max-w-2xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
            <div className="border-[1px] border-border-mainrounded-md mb-4 shadow-md ">
              {/* Top Section */}
              <div className="bg-box-gray p-8">
                <div className=" flex items-center mb-1 justify-between">
                  <div className="flex space-x-3 items-center">
                    <h3 className="font-semibold">{listing.name}</h3>
                  </div>
                  <div className="flex items-center space-x-1">
                    <XCircleIcon
                      className="h-10 w-10 ml-1 "
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-light">
                    Wet Designs Pte Ltd, 22 New Industrial Road #06-11 Primax
                  </p>
                  <div className="flex items-center mt-1">
                    <p className="text-sm font-light">4.7</p>
                    <StarIcon
                      className="h-4 w-4 ml-1 text-yellow-400"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
              {/* Options */}
              <div className="p-8 bg-white">
                {/* Calendar */}
                <div className="flex space-x-6">
                  <div className="flex-auto border-[1px] border-border-main px-3 py-1 rounded-xl mb-4 shadow-md cursor-pointer hover:bg-box-hover">
                    <div className="flex items-center mb-1 justify-between">
                      <div className="flex space-x-3 items-center">
                        <h3 className="text-sm">Drop off</h3>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDaysIcon
                          className="h-6 w-6 ml-1 "
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <DatePicker
                        className="text-xl font-semibold bg-transparent"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      {/* <p className="text-2xl font-semibold">06 Mar</p> */}
                      <div className="flex items-center mt-1">
                        <CheckCircleIcon
                          className="h-4 w-4  text-green-300"
                          aria-hidden="true"
                        />
                        <p className="text-sm font-semibold ml-1">Open</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex-auto border-[1px] border-border-main px-3 py-1 rounded-xl mb-4 shadow-md cursor-pointer hover:bg-box-hover">
                    <div className="flex items-center mb-1 justify-between">
                      <div className="flex space-x-3 items-center">
                        <h3 className="text-sm">Pick up</h3>
                      </div>
                      <div className="flex items-center space-x-1">
                        <CalendarDaysIcon
                          className="h-6 w-6 ml-1 "
                          aria-hidden="true"
                        />
                      </div>
                    </div>
                    <div>
                      <DatePicker
                        className="text-xl font-semibold bg-transparent"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                      />
                      {/* <p className="text-2xl font-semibold">06 Mar</p> */}
                      <div className="flex items-center mt-1">
                        <CheckCircleIcon
                          className="h-4 w-4  text-green-300"
                          aria-hidden="true"
                        />
                        <p className="text-sm font-semibold ml-1">Open</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm font-light">
                  Choose your dates. You can cancel your booking until midnight
                  the day before arrival.
                </p>

                {/* Number of bags */}

                <div className="flex items-center mt-10 justify-between">
                  <div className="">
                    <h3 className="text-2xl text-text-dark font-semibold mb-1">
                      How many bags?
                    </h3>
                    <p className="text-sm font-light">
                      Suitcases, backpacks, shopping bags — we're not picky!
                    </p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MinusCircleIcon
                      className="h-7 w-7 ml-1 cursor-pointer"
                      aria-hidden="true"
                      onClick={() => setBags(bags - 1 === -1 ? 0 : bags - 1)}
                    />
                    <h3 className="text-4xl text-text-dark font-semibold ">
                      {bags}
                    </h3>
                    <PlusCircleIcon
                      className="h-7 w-7 ml-1 cursor-pointer"
                      aria-hidden="true"
                      onClick={() => setBags(bags + 1)}
                    />
                  </div>
                </div>

                {/* Payment Type */}
                <div className="flex space-x-6 mt-10">
                  <div
                    className={`flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer ${
                      paynow ? "bg-teal-500" : ""
                    }`}
                    onClick={() => setPaynow(true)}
                  >
                    <h3 className="text-sm font-semibold">Pay-as-you-go</h3>
                    <p className="text-xs font-light">
                      Hourly pricing for short term storage
                    </p>
                  </div>
                  <div
                    className={`flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer ${
                      paynow ? "" : "bg-teal-500"
                    }`}
                    onClick={() => setPaynow(false)}
                  >
                    <h3 className="text-sm font-semibold">Flat rate</h3>
                    <p className="text-xs font-light">
                      Pay less when storing longer
                    </p>
                  </div>
                </div>
              </div>
              {/* Summary */}
              <div className="bg-box-gray p-8">
                <h3 className="text-3xl text-text-dark font-semibold mb-6">
                  Booking Summary
                </h3>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm text-text-dark font-light">
                    {`Storage, ${
                      paynow ? "pay as you go" : days(endDate, startDate)
                    } x ${bags} bag(s)`}
                  </p>
                  <p className="text-sm text-text-dark font-light">
                    {`${
                      paynow
                        ? "$" + listing.pricePerHourSimple * bags + "/hour"
                        : "$" +
                          listing.pricePerDaySimple *
                            bags *
                            days(endDate, startDate)
                    }`}
                  </p>
                </div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-text-dark font-light">
                    Service fee
                  </p>
                  <p className="text-sm text-text-dark font-light">$1.00</p>
                </div>
                {/* <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-text-dark font-light">Insurance</p>
                  <p className="text-sm text-text-dark font-light">+ $0.35</p>
                </div> */}
                <div className="h-[1px] w-full bg-gray-200 mx-auto mb-6"></div>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-lg text-text-dark font-bold">Total</p>
                  <p className="text-lg text-text-dark font-bold">
                    {" "}
                    {`${
                      paynow
                        ? "$0.00"
                        : "$" +
                          (listing.pricePerDaySimple *
                            bags *
                            days(endDate, startDate) +
                            1)
                    }`}
                  </p>
                </div>
                <button
                  className="rounded-3xl bg-orange-500 text-white p-1.5 px-4 font-medium w-full"
                  onClick={() => confirmBooking()}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingForm;
