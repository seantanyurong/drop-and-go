const HowItWorksTile = (props) => {
    return (
        <div className="w-[280px] px-[15px] flex-shrink-0 h-full relative">
            <div className="text-center">
                {/* How It Works Tile Image */}
                <img
                    className="opacity-100 w-[150px] block mx-auto h-auto align-middle transition-opacity duration-500 ease max-w-full border-0"
                    src={props.img}
                />

                {/* How It Works Tile Header Text */}
                <div className="mt-5">
                    {props.heading}
                </div>
            </div>
        </div>
    );
}

export default HowItWorksTile;