import React from "react";
import Header from "../components/layout/SearchPage/Header";
import SearchBar from "../components/layout/SearchPage/SearchBar";
import SearchResults from "../components/layout/SearchPage/SearchResults";

const SearchPage = () => {
  return (
    <div>
      <Header />
      <SearchBar />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
