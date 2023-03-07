const SearchResults = (props) => {
  return (
    <div className="grid grid-cols-8 gap-4 mx-auto px-5 sm:px-6 py-10 border-black border-2">
      <div className="col-span-5 bg-blue-500">Listings</div>
      <div className="col-span-3 bg-red-500">Map</div>
    </div>
  );
};

export default SearchResults;
