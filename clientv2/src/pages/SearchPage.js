import React from "react";
import Header from "../components/layout/SearchPage/Header";
import SearchBar from "../components/ui/searchBar";
import SearchResults from "../components/layout/SearchPage/SearchResults";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchBar button={true} gridCols="grid-cols-5" maxWidth="max-w-xl" />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
