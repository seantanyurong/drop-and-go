import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import LeftArrow from "../../ui/LeftArrow";
import RightArrow from "../../ui/RightArrow";
import Location from "./Location"

const LocationSection = () => {
    // Carousel Responsiveness
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
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

    return (
        <div className="block py-[70px] bg-white border-b-1 border-gray-200">

            {/* Location Section Header  Text */}
            <h2 className="mb-[35px] text-center text-2xl leading-snug tracking-tighter font-bold mt-0 text-gray-700">
                150+ cities worldwide
            </h2>

            {/* Carousel of Cities */}
            <div className="opacity-100 pr-[50px] pl-[30px] py-[20px] transition-opacity duration-500 mx-auto my-0 relative overflow-hidden z-[1]">
                <Carousel
                    partialVisbile
                    responsive={responsive}

                    // Custom Arrows
                    customLeftArrow={<LeftArrow />}
                    customRightArrow={<RightArrow />}
                    infinite={false}
                    containerClass="relative h-full flex transform transition-transform transition-duration-0 box-content z-[1]"
                    itemClass="h-auto mr-16 flex-shrink-0 relative"
                >
                    <Location
                        city="Barcelona"
                        numOfProviders="80"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_scale,h_653,w_868/v1680759318/image_mrkdgv.jpg"
                    />
                    <Location
                        city="Singapore"
                        numOfProviders="160"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_crop,h_4480,w_5960/v1680758195/Dikaiosp_210819_6963_b2x8o3.jpg"
                    />
                    <Location
                        city="London"
                        numOfProviders="100"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_crop,h_3735,w_4970/v1680758210/london-jpeg_header-148518_porfdn.jpg"
                    />
                    <Location
                        city="San Francisco"
                        numOfProviders="120"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_crop,h_1168,w_1550/v1680758255/Golden-Gate-Bridge-San-Francisco_ipjbjg.jpg"
                    />
                    <Location
                        city="Bangkok"
                        numOfProviders="50"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_crop,h_1001,w_1331/v1680758481/port-laem-chabang-bangkok-1334x1001_reek3m.jpg"
                    />
                    <Location
                        city="Rome"
                        numOfProviders="60"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_scale,h_1728,w_2300/v1680759433/OG_Colosseum_Ancient-Rome_KIDS_1122_16x9_thie9d.jpg"
                    />
                    <Location
                        city="Aarhus"
                        numOfProviders="150"
                        imgUrl="https://res.cloudinary.com/dpiued5io/image/upload/c_scale,h_1066,w_1420/v1680759470/6fb64dd0-db82-11e8-8022-0242ac11000d_kp58tk.jpg"
                    />
                    <Location
                        city=""
                        numOfProviders=""
                        imgUrl=""
                    />
                </Carousel>
            </div>
        </div>
    );
};

export default LocationSection;