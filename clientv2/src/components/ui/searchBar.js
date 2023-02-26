import React, { useEffect, useState } from "react";
// import { MagnifyingGlassIcon, ShoppingBagIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const locations = [
        "London",
        "Paris",
        "Pasir2",
        "Singapore",
        "Sydney"
    ];

    const onChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
    }

    const onSearch = (searchInput) => {
        setSearchInput(searchInput);
    }

    return (
        <div class="box-border">
            <div class="max-w-none min-h-104 relative block mx-auto my-0">
                <div class="flex flex-row items-center rounded-lg box-border bg-white relative justify-between w-full max-w-2xl decoration-gray-500">
                    <div class="flex m-0 w-64 bg-transparent rounded-none shadow-none items-center">
                        <svg class="shrink-0 mr-2.5 w-4.5 h-4.5 opacity-30" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
                        </svg>

                        <input
                            class="h-15 border-none outline-none appearance-none p-0 w-full text-ellipsis relative max-w-none"
                            type="text"
                            placeholder="Enter location"
                            onChange={onChange}
                            value={searchInput} />

                        <div class="absolute bottom-0.5">
                            {locations.filter((location) => {
                                const searchTerm = searchInput.toLowerCase();
                                const dataLocation = location.toLowerCase();

                                return (
                                    searchTerm &&
                                    dataLocation.startsWith(searchTerm) &&
                                    dataLocation !== searchTerm
                                );
                            })
                                .slice(0, 10)
                                .map((location) => {
                                    <div
                                        onClick={() => onSearch(location)}>
                                        {location}
                                    </div>
                                })}
                        </div>
                    </div>
                    <div class="flex pr-20 pl-20 border border-solid">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path d="M12.75 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM8.25 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM9.75 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM10.5 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM12.75 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM14.25 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 17.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 15.75a.75.75 0 100-1.5.75.75 0 000 1.5zM15 12.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM16.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5z" />
                            <path fill-rule="evenodd" d="M6.75 2.25A.75.75 0 017.5 3v1.5h9V3A.75.75 0 0118 3v1.5h.75a3 3 0 013 3v11.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V7.5a3 3 0 013-3H6V3a.75.75 0 01.75-.75zm13.5 9a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5z" clip-rule="evenodd" />
                        </svg>

                        <div class="">
                            <span>Today</span>
                        </div>

                    </div>
                    <div class="flex">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                            <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z" clip-rule="evenodd" />
                        </svg>

                    </div>
                    <button onClick={() => onSearch(searchInput)}>Go!</button>
                </div>
            </div>
        </div>

    );
}

export default SearchBar;
