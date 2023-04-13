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
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const BookingForm = (props) => {
  let navigate = useNavigate();

  let [listing, setListing] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [bags, setBags] = useState(1);
  const [size, setSize] = useState(1);
  const [paynow, setPaynow] = useState(false);
  const [userID, setUserID] = useState("");
  const [reviewScore, setReviewScore] = useState(3);

  useEffect(() => {
    async function fetchData() {
      const settings = {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      };

      const getUserID = await fetch(
        `https://is3106-dropandgo.herokuapp.com/user/authenticate`,
        settings
      );

      if (!getUserID.ok) {
        const message = `An error has occurred: ${getUserID.statusText}`;
        window.alert(message);
        return;
      }

      const getUserIDRes = await getUserID.json();

      setUserID(getUserIDRes.id);

      const id = props.listing_id;
      const response = await fetch(
        `https://is3106-dropandgo.herokuapp.com/listing/${id}`
      );

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
      const review = await fetch(
        `https://is3106-dropandgo.herokuapp.com/review/listing/${props.listing_id}`
      );

      if (!review.ok) {
        const message = `An error has occurred: ${review.statusText}`;
        window.alert(message);
        return;
      }

      const reviewScoreRes = await review.json();
      if (!reviewScoreRes) {
        window.alert(`review with listing id ${props.listing_id} not found`);
        return;
      } else {
        console.log(reviewScoreRes);
        setReviewScore(reviewScoreRes[0]?.reviewScore);
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  async function confirmBooking() {
    // When a post request is sent to the create url, we'll add a new record to the database.
    console.log("Submitting");

    const response = await fetch(
      `https://is3106-dropandgo.herokuapp.com/booking`
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
    }

    // Get current capacity
    console.log(
      bookingsRes
        .filter((a) => a.listing_id === props.listing_id)
        .filter((a) => a.status === "Active")
        .reduce((prev, next) => prev + next.size, 0)
    );

    const remainingCapacity =
      listing.capacity -
      bookingsRes
        .filter((a) => a.listing_id === props.listing_id)
        .filter((a) => a.status === "Active")
        .reduce((prev, next) => prev + next.size, 0);

    console.log(remainingCapacity);
    console.log(userID);

    if (remainingCapacity < size * bags) {
      alert("Not sufficient space. Please decrease bag count or bag size.");
    } else if (userID === undefined) {
      navigate("/login/user");
    } else {
      await fetch("https://is3106-dropandgo.herokuapp.com/booking/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          startDate: startDate,
          endDate: endDate,
          days: days(endDate, startDate),
          paynow: paynow,
          bags: bags,
          size: size * bags,
          status: "Active",
          listing_id: props.listing_id,
          user_id: userID,
          startTime: null,
          endTime: null,
          finalPrice: paynow
            ? 0.0
            : listing.pricePerDay[0] * bags * days(endDate, startDate) + 1,
        }),
      }).catch((error) => {
        window.alert(error);
        return;
      });

      props.poppingHandler(false);
      alert(
        "Booking successfully made. Please view your bookings to see the latest status."
      );
    }
  }

  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays + 1;
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
                  <div
                    className="flex items-center space-x-1 cursor-pointer"
                    onClick={() => props.poppingHandler(false)}
                  >
                    <XCircleIcon
                      className="h-10 w-10 ml-1 "
                      aria-hidden="true"
                    />
                  </div>
                </div>
                <div>
                  <p className="text-sm font-light">{listing.address}</p>
                  <div className="flex items-center mt-1">
                    <p className="text-sm font-light">
                      {reviewScore.toFixed(2)}
                    </p>
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

                {/* Bag Sizing */}
                <div className="flex space-x-6 mt-10">
                  <div
                    className={`flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer ${
                      size === 1 ? "bg-teal-500" : ""
                    }`}
                    onClick={() => setSize(1)}
                  >
                    <h3 className="text-sm font-semibold">Small</h3>
                    <p className="text-xs font-light">1m x 1m x 1m</p>
                  </div>
                  <div
                    className={`flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer ${
                      size === 2 ? "bg-teal-500" : ""
                    }`}
                    onClick={() => setSize(2)}
                  >
                    <h3 className="text-sm font-semibold">Medium</h3>
                    <p className="text-xs font-light">2m x 2m x 2m</p>
                  </div>
                  <div
                    className={`flex-auto border-[1px] border-border-main p-2 rounded-xl mb-4 shadow-md cursor-pointer ${
                      size === 3 ? "bg-teal-500" : ""
                    }`}
                    onClick={() => setSize(3)}
                  >
                    <h3 className="text-sm font-semibold">Large</h3>
                    <p className="text-xs font-light">3m x 3m x 3m</p>
                  </div>
                </div>

                {/* Payment Type */}
                <div className="flex space-x-6 mt-2">
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
                    } day(s) x ${bags} bag(s)`}
                  </p>
                  <p className="text-sm text-text-dark font-light">
                    {`${
                      paynow
                        ? "$" + listing.pricePerHour[0] * bags + "/hour"
                        : "$" +
                          listing.pricePerDay[0] *
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
                          (listing.pricePerDay[0] *
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
