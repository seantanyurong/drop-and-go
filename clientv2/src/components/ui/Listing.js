import React from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const Listing = (props) => {
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto border-[1px] border-border-main p-4 rounded-md my-4 shadow-md cursor-pointer bg-white">
      <img
        src={
          props.listing.displayPicture ||
          "https://img.freepik.com/free-vector/shop-with-we-are-open-sign_23-2148557016.jpg?w=2000"
        }
        alt="Shop with open sign."
        className="mb-6 max-h-[500px]"
      ></img>
      <div className="flex items-center mb-1 justify-between">
        <div className="flex space-x-3 items-center">
          <h3 className="font-semibold">{props.listing.name}</h3>
        </div>
      </div>
      <div>
        <p className="text-sm font-light">{props.listing.address}</p>
        <div className="flex items-center mt-1">
          <p className="text-sm font-light">4.7</p>
          <StarIcon
            className="h-4 w-4 ml-1 text-yellow-400"
            aria-hidden="true"
          />
        </div>
      </div>
      {/* CTAs */}
      <div className="mt-4">
        <button
          className="rounded-md bg-primary-200 text-white p-1.5 px-4 text-xs font-medium hover:bg-primary-300"
          onClick={() => {
            props.listingIDHandler(props.listing._id);
            props.poppingHandler(true);
          }}
        >
          Book now
        </button>
        <button
          className="ml-2 rounded-md bg-gray-200 hover:bg-gray-300  p-1.5 px-4 text-xs font-medium"
          onClick={() => navigate(`/listing/${props.listing._id}`)}
        >
          More info
        </button>
      </div>
    </div>
  );
};

export default Listing;
