import React from "react";
import { useEffect, useState } from "react";
import { StarIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";

const Listing = (props) => {
  const navigate = useNavigate();
  const [reviewScore, setReviewScore] = useState(3);

  useEffect(() => {
    async function fetchData() {
      const review = await fetch(
        `http://localhost:6003/review/listing/${props.listing._id}`
      );

      if (!review.ok) {
        const message = `An error has occurred: ${review.statusText}`;
        window.alert(message);
        return;
      }

      const reviewScoreRes = await review.json();
      if (!reviewScoreRes) {
        window.alert(`review with listing id ${props.listing._id} not found`);
        return;
      } else {
        console.log(reviewScoreRes);
        setReviewScore(reviewScoreRes[0]?.reviewScore);
        console.log(reviewScore);
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="max-w-xl mx-auto border-[1px] border-border-main p-4 rounded-md my-4 shadow-md cursor-pointer bg-white">
      <img
        src={
          props.listing.displayPicture ||
          "https://res.cloudinary.com/djy7am9b5/image/upload/v1680770327/default_kqdvf0.png"
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
          <p className="text-sm font-light">{reviewScore?.toFixed(2)}</p>
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
