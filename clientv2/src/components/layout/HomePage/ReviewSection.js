import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";
import Review from "./Review";

const ReviewSection = () => {
    return (
        <div class="block bg-white border-b border-solid border-gray-200 px-0 py-14 box-border">
            <div class="block max-w-screen-xl my-0 mx-auto">
                <div class="mb-3.5 text-center text-lg tracking-normal font-bold mt-0 not-italic text-cyan-900">
                    <h2>Most-reviewed luggage storage service</h2>
                </div>

                <div>
                    <div class="flex mx-0 mb-2.5 -mt-2.5 items-center justify-center text-cyan-900 text-lg font-medium">
                        <span class="mx-1">
                            4.9
                        </span>

                        <span class="mx-1">
                            <div class="flex relative items-center">
                                <StarIcon class="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
                                <StarIcon class="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
                                <StarIcon class="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
                                <StarIcon class="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
                                <StarIcon class="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
                            </div>
                        </span>
                    </div>
                </div>

                <div class="block text-center">
                    <div class="px-[33px] pt-[30px] pb-[50px] my-0 mx-auto relative overflow-hidden z-[1]">
                        <div class="flex w-[5166px] relative h-full z-[1] transition-transform box-content">
                            <Review user="Traveler" time="Last Saturday" star="5" review="Great service, very safe!"></Review>
                            <Review user="Grace Yong" time="Last Monday" star="5" review="Friendly owner :)"></Review>
                            <Review user="Steven Gerrard" time="Last Friday" star="4" review="Bien!"></Review>
                            <Review user="Roberto Firmino" time="Last Saturday" star="5" review="Very convenient!"></Review>
                            <Review user="Alisson Becker" time="Last Sunday" star="4" review="Very helpful"></Review>
                        </div>

                        <div className="block top-[calc(50%+15px)] -translate-y-1/2 right-4 left-auto w-[50px] h-[50px] -mt-[25px] absolute z-10 cursor-pointer rounded-[100px] bg-white shadow-[0_0_2px_2px_rgba(0,0,0,0.08)] duration-200 ease-in transition-[opacity] transition-[visibility]">
                            <ChevronRightIcon className="w-[30px] h-[30px] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-[#23b8ea] overflow-hidden m-0 p-0" />
                        </div>

                        <div className="block top-[calc(50%+15px)] -translate-y-1/2 left-4 right-auto w-[50px] h-[50px] -mt-[25px] absolute z-10 cursor-pointer rounded-[100px] bg-white shadow-[0_0_2px_2px_rgba(0,0,0,0.08)] duration-200 ease-in transition-[opacity] transition-[visibility]">
                            <ChevronLeftIcon className="w-[30px] h-[30px] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-[#23b8ea] overflow-hidden m-0 p-0" />
                        </div>
                    </div>

                    <a className="py-0 px-[40px] duration-200 ease-in transition-[all] rounded-[100px] h-[50px] leading-[50px] text-[15px] bg-[#F4F4F4] text-[#384347] border-none outline-none inline-block no-underline font-medium cursor-pointer"
                        href="/login">Write a review</a>
                </div>
            </div>
        </div>
    );
}

export default ReviewSection;