import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

const Searchbar = (props) => {
  return (
    <div className="mx-auto px-5 sm:px-6 py-10 shadow-xl">
      <div className="mx-auto max-w-lg grid grid-cols-5 py-3 px-4 gap-6 rounded-3xl border-[1px] border-border-main shadow-md">
        {/* Location */}
        <div className="col-span-3 flex items-center justify-between">
          <div className="flex items-center">
            <MagnifyingGlassIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <div>Search</div>
          </div>
          <div className="w-[1px] h-full bg-gray-200"></div>
        </div>

        {/* Calendar */}

        <div className="col-span-1 flex items-center justify-between">
          <div className="flex items-center">
            <CalendarDaysIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <div>Today</div>
          </div>
        </div>

        {/* Bags */}
        <div className="col-span-1 flex items-center">
          <ShoppingBagIcon className="h-5 w-5 mr-2" aria-hidden="true" />
          <div>1 bag</div>
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
