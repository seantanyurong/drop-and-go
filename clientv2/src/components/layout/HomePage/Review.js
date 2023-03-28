import { StarIcon } from "@heroicons/react/20/solid";

const Review = (props) => {
    const stars = parseInt(props.star);

    // create [1,2,3,4,5] once
    const starArray = [...Array(5).keys()].map(i => i + 1);

    return (
        <div className="">
            <div className="flex flex-col flex-nowrap">
                <div className="block text-sm m-0 font-medium">
                    {props.user}
                </div>

                <div className="block mb-0.5 text-xs">
                    Used Drop&Go {props.time}
                </div>

                <div className="block relative grow shrink-0 basis-auto min-h-[24px] h-[24px]">
                    <div className="flex absolute top-0 left-0">
                        {starArray.map(i => ( // use many times
                            <StarIcon className="overflow-hidden h-[16px] w-[16px]"
                                key={i}
                                color={stars >= i ? "orange" : "lightgrey"} />

                        ))}
                    </div>
                </div>
            </div>

            <div className="block leading-6 text-[15px] mt-[3px] mx-0 mb-[5px] relative duration-200 ease-out transition-[color] overflow-hidden text-[#384347]">
                <div className="mb-2.5">{props.review}</div>
            </div>
        </div>
    );
}

export default Review;