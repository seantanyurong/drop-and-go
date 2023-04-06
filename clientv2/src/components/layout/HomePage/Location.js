const Location = (props) => {
    return (
        <div className="">
            <a className="relative pb-[125%] rounded-md overflow-hidden bg-no-repeat bg-center bg-cover cursor-pointer">
                <div className="absolute bottom-[30px] left-1/2 w-full transform -translate-x-1/2 text-white text-center text-xl font-bold transition-all duration-300 z-[2]">
                    {props.city}

                    <span className="block mt-2 text-sm font-normal">
                        {props.numOfProviders}+ locations
                    </span>
                </div>

                <img
                    src={props.imgUrl}
                    alt={props.city}>
                </img>
            </a>
        </div>

    );
};

export default Location;