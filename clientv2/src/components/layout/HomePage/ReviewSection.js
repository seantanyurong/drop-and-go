import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { StarIcon } from "@heroicons/react/20/solid";
import LeftArrow from "../../ui/LeftArrow";
import RightArrow from "../../ui/RightArrow";
import Review from "./Review";
import { useEffect, useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0.0);
  const starArray = [0, 1, 2, 3, 4];

  // carousel responsive
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  useEffect(() => {
    async function fetchData() {
      console.log(starArray);
      // fetch reviews for home page
      const response = await fetch(
        `https://is3106-dropandgo.herokuapp.com/review/home`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const reviewsRes = await response.json();

      if (!reviewsRes) {
        window.alert(`Homepage reviews cannot be retrieved`);
        return;
      } else {
        setReviews(reviewsRes);
      }

      // calculate average review stars
      const reviews = await fetch(
        `https://is3106-dropandgo.herokuapp.com/review`
      );

      if (!reviews.ok) {
        const message = `An error has occurred: ${reviews.statusText}`;
        window.alert(message);
        return;
      }

      const allReviewsRes = await reviews.json();

      if (!allReviewsRes) {
        window.alert(`All reviews cannot be retrieved`);
        return;
      } else {
        const allReviewsRatings = allReviewsRes.map((review) => {
          return review.starNumber;
        });
        const sum = allReviewsRatings.reduce((acc, curr) => acc + curr, 0);
        setAverageRating((sum / allReviewsRatings.length).toFixed(2));
        console.log("average rating " + averageRating);
      }
    }

    fetchData();

    return;
  }, [averageRating]);

  return (
    <div className="py-[70px] bg-white border-b border-gray-200">
      <div className="mb-3.5 text-center text-lg tracking-normal font-bold mt-0 not-italic text-cyan-900">
        <h2>Most-reviewed luggage storage service</h2>
      </div>

      <div>
        <div className="flex mx-0 mb-2.5 -mt-2.5 items-center justify-center text-cyan-900 text-lg font-medium">
          <span className="mx-1">{averageRating}</span>

          <span className="mx-1">
            <div className="flex relative items-center">
              {/* round up the ratings */}
              {starArray.map(
                (
                  i // use many times
                ) => (
                  <StarIcon
                    className="overflow-hidden h-[16px] w-[16px]"
                    key={i}
                    color={averageRating > i ? "orange" : "lightgrey"}
                  />
                )
              )}
            </div>
          </span>
        </div>
      </div>

      <div className="block text-center">
        <div className="px-[33px] pt-[30px] pb-[50px] my-0 mx-0 relative overflow-hidden z-[1]">
          <Carousel
            partialVisbile
            responsive={responsive}
            customLeftArrow={<LeftArrow />}
            customRightArrow={<RightArrow />}
            infinite={false}
            containerClass=""
            itemClass="mr-[16px] my-[8px] min-h-[250px] max-w-[550px] py-[20px] px-[25px] text-left bg-white rounded-[5px] overflow-hidden shadow-md shrink-0 h-full relative"
          >
            {reviews.map((review, index) => {
              return <Review review={review} key={index} />;
            })}
          </Carousel>
        </div>

        <a
          className="py-0 px-[40px] duration-200 ease-in transition-[all] rounded-[100px] h-[50px] leading-[50px] text-[15px] bg-[#F4F4F4] text-[#384347] border-none outline-none inline-block no-underline font-medium cursor-pointer"
          href="/login/user"
        >
          Write a review
        </a>
      </div>
    </div>
  );
};

export default ReviewSection;
