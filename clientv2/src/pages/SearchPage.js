import React from "react";
import DefaultHeader from '../components/ui/DefaultHeader';
import SearchBar from "../components/ui/searchBar";
import SearchResults from "../components/layout/SearchPage/SearchResults";

const SearchPage = () => {
  return (
    <div>
      <DefaultHeader />
      <SearchBar button={true} gridCols="grid-cols-5" maxWidth="max-w-xl" />
      <SearchResults />
    </div>
  );
};

export default SearchPage;
