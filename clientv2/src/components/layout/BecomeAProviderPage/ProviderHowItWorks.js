import HowItWorksTile from "../../ui/HowItWorksTile";

const ProviderHowItWorks = () => {
    return (
        <div className="block py-[70px] bg-white border-b border-gray-200">

            {/* Header Text */}
            <div className="w-calc-100-30px max-w-1280 mx-auto">
                <h2 className="mb-[35px] text-center text-2xl leading-6 tracking-tight font-bold text-gray-700">
                    How Drop&Go works in 3 steps
                </h2>
            </div>

            {/* How It Works Tiles */}
            <div className="block cursor-grab px-[30px] w-full mx-auto relative overflow-hidden pt-[20px] pb-[20px] z-1">
                <div className="transform translate-x-0 translate-y-0 translate-z-0 justify-center relative w-full h-full z-10 flex transition-transform box-sizing-content-box">
                    <HowItWorksTile
                        img="https://res.cloudinary.com/dpiued5io/image/upload/w_160,h_160,c_fill,g_face,r_max/v1679998634/arabic-muslim-young-man-coming-out-corner-goes-travel-bag-to-modern-restaurant-stopped-smiling-holding-black-suitcase-231087732_fqrifz.jpg"
                        heading="Traveler arrives at your location"
                    />
                    <HowItWorksTile
                        img="https://res.cloudinary.com/dpiued5io/image/upload/w_160,h_160,c_fill,g_face,r_max/v1679999136/how-to-create-a-sales-countdown-timer-in-shopify-step-by-step_vkh2rr.png"
                        heading="Start storage timer at drop-off & stop storage timer at pick-up"
                    />
                    <HowItWorksTile
                        img="https://res.cloudinary.com/dpiued5io/image/upload/w_160,h_160,c_fill,g_face,r_max/v1679999279/bigstock-Money-Bottle-Banknotes-Tree-Im-260365924_mrahhj.jpg"
                        heading="Extra revenue straight in your pocket"
                    />
                </div>
            </div>
        </div>
    );
}

export default ProviderHowItWorks