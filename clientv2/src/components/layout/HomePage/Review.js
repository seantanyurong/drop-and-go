import { StarIcon } from "@heroicons/react/20/solid";

const Review = (props) => {
    const stars = parseInt(props.star);

    return (
        <div className="w-[722px] mr-[16px] min-h-[250px] max-h-[250px] py-[20px] px-[25px] text-left bg-white rounded-[5px] overflow-hidden shadow-md shrink-0 h-full relative">
            <div className="flex flex-col flex-nowrap">
                <div className="block text-sm m-0 font-medium">
                    {props.user}
                </div>

                <div className="block mb-0.5 text-[#AEAEAE] text-xs">
                    Used Drop&Go {props.time}
                </div>

                <div className="block relative grow shrink-0 basis-auto min-h-[24px] h-[24px]">
                    <div className="flex absolute top-0 left-0">
                        {Array(stars).fill(<StarIcon className="overflow-hidden h-[16px] w-[16px] fill-yellow-500" />)}
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