import { ChevronLeftIcon } from "@heroicons/react/20/solid";

const LeftArrow = ({ onClick }) => {
    return (
        <div className="block top-[calc(50%+15px)] -translate-y-1/2 left-4 right-auto w-[50px] h-[50px] -mt-[25px] absolute z-10 cursor-pointer rounded-[100px] bg-white shadow-[0_0_2px_2px_rgba(0,0,0,0.08)] duration-200 ease-in transition-[opacity] transition-[visibility]">
            <ChevronLeftIcon
                className="w-[30px] h-[30px] absolute top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 text-[#23b8ea] overflow-hidden m-0 p-0"
                onClick={() => onClick()}
            />
        </div>
    );
}

export default LeftArrow;