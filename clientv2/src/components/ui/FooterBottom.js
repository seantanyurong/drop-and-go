import LogoImg from "../../assets/Logo.png";

const FooterBottom = () => {
    return (
        <div className="flex flex-row justify-between items-center pt-[22px] px-0 pb-[50px] border-t border-gray-300 max-w-screen-xl bg-gray-100">
            <div className="mx-[20px] mt-0 relative flex items-center pl-[28px]">
                <img className="absolute left-0 w-[22px] h-auto"
                    src={LogoImg}
                    alt="logo">
                </img>

                <small>
                    Drop&Go is a registered trademark. All rights reserved.
                </small>
            </div>
        </div>
    );
}

export default FooterBottom;