import React from "react";
import BackgroundTint from "../components/ui/BackgroundTint";
import BookingForm from "../components/ui/BookingForm";
import { StarIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

const UserBookingPage = () => {
  let [popping, setPopping] = useState(false);
  let [listingID, setListingID] = useState("63f98e26f252c5eb4dafa07a"); // placeholder id for testing purposes

  return (
    <div>
      <div
        className="max-w-xl mx-auto border-[1px] border-border-main p-4 rounded-md my-4 shadow-md cursor-pointer hover:bg-box-hover bg-white"
        onClick={() => {
          setListingID("63f98e26f252c5eb4dafa07a");
          setPopping(true);
        }}
      >
        <div className="flex items-center mb-1 justify-between">
          <div className="flex space-x-3 items-center">
            <h3 className="font-semibold">Wet Designs Pte Ltd</h3>
          </div>
          <div className="flex items-center space-x-1">
            <p className="text-sm font-semibold text-primary-200">
              Get Directions
            </p>
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
      {popping && <BookingForm listingID={listingID} />}
      {popping && <BackgroundTint clickHandler={() => setPopping(false)} />}
    </div>
  );
};

export default UserBookingPage;
