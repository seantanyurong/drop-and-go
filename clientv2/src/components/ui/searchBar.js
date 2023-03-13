import React, { useEffect, useState } from "react";
import Turnstone from 'turnstone'
// import { MagnifyingGlassIcon, ShoppingBagIcon, CalendarDaysIcon } from "@heroicons/react/20/solid";

const SearchBar = () => {

    const locations = {
        data: [
            "London",
            "Paris",
            "Pasir2",
            "Pasir33",
            "Pep",
            "Pepper",
            "Singapore",
            "Sydney"
        ],
        searchType: 'startswith'
    };

    return (
        <Turnstone listbox={locations}
            cancelButton={true}
            debounceWait={250}
            id="search"
            listboxIsImmutable={true}
            matchText={true}
            maxItems={5}
            name="search"
            noItemsMessage="We found no location that match your search"
            placeholder="Enter a location"
            typeahead={true} />
    );
}

export default SearchBar;
