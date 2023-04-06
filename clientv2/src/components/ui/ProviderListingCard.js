import React from "react";
import { useNavigate } from "react-router-dom";

const ProviderListingCard = (props) => {

    const navigate = useNavigate();
    function handleClick(id) {
        navigate(`/provider/edit-listing/${props.listing._id}`);
    }

    return (
        <div className="border-[1px] border-border-main p-4 rounded-md mb-4 shadow-md hover:bg-box-hover">
            <div className="flex items-center mb-1 justify-between">
                <div className="flex space-x-3 items-center">
                    <h3 className="font-semibold">{props.listing.name}</h3>
                </div>
                <div className="cursor-pointer" onClick={handleClick}>

                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >

                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                        />
                    </svg>

                </div>
            </div>
            <div>
                <h4 className="font-light text-md">{props.listing.address}</h4>
            </div>
            <div className="mt-4 flex space-x-3 items-center">
                <p className="cursor-pointer rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium hover:bg-primary-200 hover:border-blue-300">
                    {/* need CTAs */}
                    Bookings
                </p>
                <p className="cursor-pointer rounded-md bg-text-main text-text-dark p-1.5 text-xs border-[1px] border-border-main font-medium hover:bg-primary-200 hover:border-blue-300">
                    Billings
                </p>
            </div>
        </div>
    );
};

export default ProviderListingCard;