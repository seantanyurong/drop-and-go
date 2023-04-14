import { StarIcon } from "@heroicons/react/20/solid";
import { useEffect, useState } from "react";

const Review = (props) => {
  const stars = parseInt(props.review.starNumber);
  const starArray = [...Array(5).keys()].map((i) => i + 1);

  const [user, setUser] = useState("");

  // display date according to user's native language
  const locale = window.navigator.userLanguage || window.navigator.language;

  useEffect(() => {
    async function fetchData() {

      // fetch user who wrote the review
      const user = await fetch(
        `https://is3106-dropandgo.herokuapp.com/user/${props.review.user_id}`
      );

      if (!user.ok) {
        const message = `An error has occurred: ${user.statusText}`;
        window.alert(message);
        return;
      }

      const userRes = await user.json();
      if (!userRes) {
        window.alert(
          `user who wrote the review id ${props.review._id} is not found`
        );
        return;
      } else {
        setUser(userRes.name);
        console.log(user);
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="">
      <div className="flex flex-col flex-nowrap">

        {/* User's Display Name */}
        <div className="block text-sm m-0 font-medium">
          {user}
        </div>

        {/* Date User Used Drop&Go */}
        <div className="block mb-0.5 text-xs">
          Used Drop&Go on{" "}
          {new Date(props.review.dateReviewed).toLocaleDateString(locale)}
        </div>

        {/* Number of Stars */}
        <div className="block relative grow shrink-0 basis-auto min-h-[24px] h-[24px]">
          <div className="flex absolute top-0 left-0">
            {starArray.map(
              (
                i // use many times
              ) => (
                <StarIcon
                  className="overflow-hidden h-[16px] w-[16px]"
                  key={i}
                  color={stars >= i ? "orange" : "lightgrey"}
                />
              )
            )}
          </div>
        </div>
      </div>

      {/* Review Subject */}
      <div className="block leading-6 text-[15px] mt-[3px] mx-0 mb-[3px] relative duration-200 ease-out transition-[color] overflow-hidden text-[#384347] font-medium">
        <div className="mb-2.5">
          {props.review.subject}
        </div>
      </div>

      {/* Review Description */}
      <div className="block leading-6 text-[15px] mt-[3px] mx-0 mb-[5px] relative duration-200 ease-out transition-[color] overflow-hidden text-[#384347]">
        <div className="mb-2.5">
          {props.review.description}
        </div>
      </div>
    </div>
  );
};

export default Review;
