import LogoImg from "../../assets/Logo.png";

const FooterBottom = () => {
    return (
        <footer className="fixed bottom-0 flex-col justify-between items-center pt-4 px-0 pb-8 border-t border-gray-300 w-full bg-gray-100">
            <div className="mx-[20px] mt-0 relative flex items-center pl-[28px]">
                {/* Drop&Go Logo */}
                <img
                    className="absolute left-0 w-[22px] h-auto"
                    src={LogoImg}
                    alt="logo">
                </img>

                <small>
                    Drop&Go is a registered trademark. All rights reserved.
                </small>
            </div>
        </footer>
    );
}

export default FooterBottom;