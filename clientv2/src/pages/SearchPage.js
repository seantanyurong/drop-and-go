import React from "react";
import Header from "../components/layout/SearchPage/Header";
import SearchBar from "../components/ui/SearchBar";
import SearchResults from "../components/layout/SearchPage/SearchResults";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchBar
        gridCols="grid-cols-5"
        maxWidth="max-w-lg" />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
