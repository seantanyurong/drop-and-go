import ProviderBenefitTile from "./ProviderBenefitTile";

const ProviderBenefits = () => {
    return (
        <div className="py-[70px] bg-white border-b-1 border-solid border-border-main">
            <div className="mx-auto max-w-[800px] px-4 sm:px-6 lg:px-8">
                <div>
                    <h2 className="mb-[35px] text-center text-2xl leading-snug tracking-tighter font-bold mt-0 text-gray-700">
                        Start your new revenue stream today!
                    </h2>

                    <div className="flex flex-wrap">
                        <div className="w-1/2 pr-[30px]">
                            <ProviderBenefitTile
                                heading="Extra Revenue"
                                body="Turn spare space into profit with no direct expenses."
                            />
                            <p className="my-4 mx-0">&nbsp;</p>
                            <ProviderBenefitTile
                                heading="100% Flexible"
                                body="Free signup, no monthly fees, and no installments!"
                            />
                        </div>

                        <div className="w-1/2 pr-[30px]">
                            <ProviderBenefitTile
                                heading="Increase foot traffic"
                                body="Free marketing. Display your venue for travelers and locals."
                            />
                            <p className="my-4 mx-0">&nbsp;</p>
                            <ProviderBenefitTile
                                heading="Reviews"
                                body="Every reviw from a traveler is public and is a great way of spreading the word about your place."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProviderBenefits