import React from "react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {

    let navigate = useNavigate();
    const toSearchPage = () => {
        let path = "/search";
        navigate(path);
    }

    return (
        <div className="py-16 px-0 bg-white border-b border-solid box-border block">
            <div className="max-w-7xl my-0 mx-auto">
                <div className="mb-9 text-center text-2xl tracking-tight font-bold text-cyan-900">

                    {/* Pricing Header Text */}
                    <h2>Pricing per bag from</h2>

                    {/* Pricings */}
                    <div className="flex flex-wrap max-w-xl mx-auto mt-12">

                        {/* Flat Rate Section */}
                        <div className="w-6/12 text-center block">
                            <div className="text-sm tracking-tight font-medium mt-0 mb-5">
                                <h5>Flat rate</h5>
                            </div>

                            <h3>
                                <span className="text-2xl tracking-tight mb-0.5 mt-2 font-medium block">
                                    SGD$8.95/day
                                </span>
                            </h3>

                            <small className="block mx-0 mt-0 mb-12 text-sm tracking-tight font-normal">
                                Per bag
                            </small>

                            {/* To Search Page Button */}
                            <button
                                className="inline-block bg-orange-600 text-white border-none outline-none py-0 px-5 h-9 leading-9 text-xs rounded no-underline duration-200 ease-in-out transition-colors font-medium cursor-pointer normal-case m-0"
                                onClick={toSearchPage}
                            >
                                Choose
                            </button>
                        </div>

                        {/* Pay As You Go Section */}
                        <div className="w-6/12 text-center block">
                            <div className="text-sm tracking-tight font-medium mt-0 mb-5">
                                <h5>Pay as you go</h5>
                            </div>

                            <h3>
                                <span className="text-2xl tracking-tight mb-0.5 mt-2 font-medium block">
                                    SGD$1.29/hour
                                </span>
                            </h3>

                            <small className="block mx-0 mt-0 mb-12 text-sm tracking-tight font-normal">
                                Per bag
                            </small>

                            {/* To Search Page Button */}
                            <button
                                className="inline-block bg-orange-600 text-white border-none outline-none py-0 px-5 h-9 leading-9 text-xs rounded no-underline duration-200 ease-in-out transition-colors font-medium cursor-pointer normal-case m-0"
                                onClick={toSearchPage}
                            >
                                Choose
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;