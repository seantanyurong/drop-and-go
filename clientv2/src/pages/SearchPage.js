import React from "react";
import Header from "../components/layout/SearchPage/Header";
import SearchBar from "../components/ui/SearchBar";
import SearchResults from "../components/layout/SearchPage/SearchResults";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchBar button={true} gridCols="grid-cols-6" maxWidth="max-w-2xl" />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
