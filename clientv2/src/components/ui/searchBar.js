import React, { useState } from 'react'
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";

const Searchbar = (props) => {
  const [searchInput, setSearchInput] = useState("");

  const locations = [
    "London",
    "Paris",
    "Pasir2",
    "Pasir33",
    "Pep",
    "Pepper",
    "Singapore",
    "Sydney"
  ];

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  if (searchInput.length > 0) {
    locations.filter((location) => {
      return location.match(searchInput);
    });
  }

  const onSearch = (searchTerm) => {
    setSearchInput(searchTerm);
  }

  return (
    <div>
      <div className="mx-auto px-5 sm:px-6 py-10 shadow-xl">
        <div className={`mx-auto ${props.maxWidth} grid ${props.gridCols} py-3 px-4 gap-6 rounded-3xl border-[1px] border-border-main shadow-md`}>
          {/* Location */}
          <div className="col-span-3 flex items-center justify-between">
            <div className="flex items-center">
              <MagnifyingGlassIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              <div>
                <input
                  className="focus:outline-0"
                  type="text"
                  placeholder="Search here"
                  onChange={handleChange}
                  value={searchInput} />
              </div>
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

          {/* Button */}
          {props.button &&
            <div className="col-span-1 flex items-center justify-end">
              <button
                className="bg-orange-600 rounded-xl text-white p-1.5 shadow-md"
                onClick={() => onSearch(searchInput)}>
                Drop&Go!
              </button>
            </div>
          }
        </div>

        {/* Search List */}
        <div >
          {locations.filter(location => {
            const searchTerm = searchInput.toLowerCase();
            const value = location.toLowerCase();

            return searchTerm && value.startsWith(searchTerm) && searchTerm !== value;
          })
            .map((location) => (
              <div
                onClick={() => onSearch(location)}
              >{location}</div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Searchbar;
