import React from "react";
import HowItWorksTile from "../../ui/HowItWorksTile";

const HowItWorks = () => {
    return (
        <div className="block py-[70px] bg-white border-b border-gray-200">
            <div className="w-calc-100-30px max-w-1280 mx-auto">
                <h2 className="mb-[35px] text-center text-2xl leading-6 tracking-tight font-bold text-gray-700">
                    How Drop&Go works in 3 steps
                </h2>
            </div>

            <div className="block cursor-grab px-[30px] w-full mx-auto relative overflow-hidden pt-[20px] pb-[20px] z-1">
                <div className="transform translate-x-0 translate-y-0 translate-z-0 justify-center relative w-full h-full z-10 flex transition-transform box-sizing-content-box">
                    <HowItWorksTile
                        img="https://luggagehero.com/wp-content/uploads/2018/05/LH_Ikon_01.png"
                        heading="Book online and receive directions" />
                    <HowItWorksTile
                        img="https://luggagehero.com/wp-content/uploads/2018/05/LH_Ikon_02B-160x160.png"
                        heading="Drop off the baggage at a Drop&Go partner location" />
                    <HowItWorksTile
                        img="https://luggagehero.com/wp-content/uploads/2018/05/LH_Ikon_03.png.webp"
                        heading="Enjoy your time without the weight of your baggage" />
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;