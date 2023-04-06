import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  CalendarDaysIcon,
  ShoppingBagIcon,
} from "@heroicons/react/20/solid";
import DatePicker from "react-datepicker";
import { useNavigate, useParams } from "react-router-dom";

import "react-datepicker/dist/react-datepicker.css";

const SearchBar = (props) => {
  const navigate = useNavigate();
  const { text, date, bag } = useParams();

  const [searchInput, setSearchInput] = useState(text);
  const [startDate, setStartDate] = useState(
    date ? new Date(date) : new Date()
  );
  const [numOfBags, setNumOfBags] = useState(bag || 1);

  const handleSearchChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  const handleNumOfBagsChange = (e) => {
    e.preventDefault();
    let val = parseInt(e.target.value);
    val = val >= 1 ? val : 1;
    setNumOfBags(val);
  };

  const onSubmit = () => {
    console.log(searchInput);
    console.log(startDate);
    console.log(numOfBags);

    if (searchInput && startDate && numOfBags) {
      navigate(`/search/${searchInput}/${startDate}/${numOfBags}`);
      navigate(0);
    } else {
      navigate(`/search`);
      navigate(0);
    }
  };

  return (
    <div>
      <div className="mx-auto px-5 sm:px-6 py-10 shadow-xl">
        <div
          className={`mx-auto ${props.maxWidth} grid ${props.gridCols} py-3 px-4 gap-6 rounded-3xl border-[1px] border-border-main shadow-md bg-white`}
        >
          {/* Location */}
          <div className="col-span-3 flex items-center justify-between">
            <div className="flex items-center">
              <MagnifyingGlassIcon
                className="h-5 w-5 mr-2"
                aria-hidden="true"
              />
              <div>
                <input
                  className="focus:outline-0"
                  type="text"
                  placeholder="Search here"
                  onChange={handleSearchChange}
                  value={searchInput}
                />
              </div>
            </div>
            <div className="w-[1px] h-full bg-gray-200"></div>
          </div>

          {/* Calendar */}

          <div className="col-span-1 flex items-center justify-between">
            <div className="flex items-center">
              <CalendarDaysIcon className="h-5 w-5 mr-2" aria-hidden="true" />
              <div>
                <DatePicker
                  className="w-[70px] bg-transparent"
                  dateFormat="dd/MM/yy"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>

          {/* Bags */}
          <div className="col-span-1 flex items-center">
            <ShoppingBagIcon className="h-5 w-5 mr-2" aria-hidden="true" />
            <div>
              <input
                className="w-[50px]"
                type="number"
                value={numOfBags}
                onChange={handleNumOfBagsChange}
              />
            </div>
          </div>

          {/* Button */}
          {props.button && (
            <div className="col-span-1 flex items-center justify-end">
              <button
                className="bg-orange-600 rounded-xl text-white p-1.5 shadow-md"
                onClick={() => onSubmit()}
              >
                Drop&Go!
              </button>
            </div>
          )}
        </div>

        {/* Search List */}
        {/* <div>
          {locations
            .filter((location) => {
              const searchTerm = searchInput.toLowerCase();
              const value = location.toLowerCase();

              return (
                searchTerm &&
                value.startsWith(searchTerm) &&
                searchTerm !== value
              );
            })
            .map((location) => (
              <div onClick={() => onSearch(location)}>{location}</div>
            ))}
        </div> */}
      </div>
    </div>
  );
};

export default SearchBar;
