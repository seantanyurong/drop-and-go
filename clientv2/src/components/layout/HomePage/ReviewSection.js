import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from "@heroicons/react/20/solid";
import Carousel from "react-multi-carousel";
import LeftArrow from "../../ui/LeftArrow";
import RightArrow from "../../ui/RightArrow";
import Review from "./Review";

import "react-multi-carousel/lib/styles.css";

const ReviewSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="block bg-white border-b border-solid border-gray-200 px-0 py-14 box-border">
            <div className="block max-w-screen-xl my-0 mx-auto">
                <div className="mb-3.5 text-center text-lg tracking-normal font-bold mt-0 not-italic text-cyan-900">
                    <h2>Most-reviewed luggage storage service</h2>
                </div>

                <div>
                    <div className="flex mx-0 mb-2.5 -mt-2.5 items-center justify-center text-cyan-900 text-lg font-medium">
                        <span className="mx-1">
                            4.9
                        </span>

                        <span className="mx-1">
                            <div className="flex relative items-center">
                                <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden"
                                    color="orange" />
                                <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden"
                                    color="orange" />
                                <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden"
                                    color="orange" />
                                <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden"
                                    color="orange" />
                                <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden"
                                    color="orange" />
                            </div>
                        </span>
                    </div>
                </div>

                <div className="block text-center">
                    <div className="px-[33px] pt-[30px] pb-[50px] my-0 mx-auto relative overflow-hidden z-[1]">
                        <Carousel partialVisbile
                            responsive={responsive}
                            customLeftArrow={<LeftArrow />}
                            customRightArrow={<RightArrow />}
                            infinite={false}
                            containerClass=""
                            itemClass="w-[722px] mr-[16px] my-[8px] min-h-[250px] max-h-[250px] py-[20px] px-[25px] text-left bg-white rounded-[5px] overflow-hidden shadow-md shrink-0 h-full relative">

                            <Review user="Traveler" time="Last Saturday" star="5" review="Great service, very safe!"></Review>
                            <Review user="Grace Yong" time="Last Monday" star="5" review="Friendly owner :)"></Review>
                            <Review user="Steven Gerrard" time="Last Friday" star="4" review="Bien!"></Review>
                            <Review user="Roberto Firmino" time="Last Saturday" star="5" review="Very convenient!"></Review>
                            <Review user="Alisson Becker" time="Last Sunday" star="4" review="Very helpful"></Review>

                        </Carousel>
                    </div>

                    <a className="py-0 px-[40px] duration-200 ease-in transition-[all] rounded-[100px] h-[50px] leading-[50px] text-[15px] bg-[#F4F4F4] text-[#384347] border-none outline-none inline-block no-underline font-medium cursor-pointer"
                        href="/login">Write a review</a>
                </div>
            </div>
        </div>
    );

    // return (

    //     <div className="block bg-white border-b border-solid border-gray-200 px-0 py-14 box-border">

    //         <div className="block max-w-screen-xl my-0 mx-auto">
    //             <div className="mb-3.5 text-center text-lg tracking-normal font-bold mt-0 not-italic text-cyan-900">
    //                 <h2>Most-reviewed luggage storage service</h2>
    //             </div>

    //             <div>
    //                 <div className="flex mx-0 mb-2.5 -mt-2.5 items-center justify-center text-cyan-900 text-lg font-medium">
    //                     <span className="mx-1">
    //                         4.9
    //                     </span>

    //                     <span className="mx-1">
    //                         <div className="flex relative items-center">
    //                             <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
    //                             <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
    //                             <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
    //                             <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
    //                             <StarIcon className="mt-px mr-px mb-0 ml-0 h-6 w-6 overflow-hidden fill-yellow-500" />
    //                         </div>
    //                     </span>
    //                 </div>
    //             </div>

    //             <div className="block text-center">

    //                     <div className="px-[33px] pt-[30px] pb-[50px] my-0 mx-auto relative overflow-hidden z-[1]">
    //                     <Carousel 
    //                     partialVisbile 
    //                     responsive={responsive} 
    //                     customLeftArrow={<LeftArrow />} 
    //                     customRightArrow={<RightArrow />} 
    //                     infinite={false}
    //                     itemClass="w-[722px] mr-[16px] min-h-[250px] max-h-[250px] py-[20px] px-[25px] text-left bg-white rounded-[5px] overflow-hidden shadow-md shrink-0 h-full relative">
    //                         <div className="flex w-[5166px] relative h-full z-[1] transition-transform box-content">

    //                             <Review user="Traveler" time="Last Saturday" star="5" review="Great service, very safe!"></Review>
    //                             <Review user="Grace Yong" time="Last Monday" star="5" review="Friendly owner :)"></Review>
    //                             <Review user="Steven Gerrard" time="Last Friday" star="4" review="Bien!"></Review>
    //                             <Review user="Roberto Firmino" time="Last Saturday" star="5" review="Very convenient!"></Review>
    //                             <Review user="Alisson Becker" time="Last Sunday" star="4" review="Very helpful"></Review>

    //                         </div>

    //                         </Carousel>
    //                     </div>



    //                 
    //             </div>
    //         </div>
    //     </div >

    // );
}

export default ReviewSection;