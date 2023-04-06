import SearchBar from "../../ui/searchBar";

const SearchBarSection = () => {
  return (
    <div className="pt-[50px] pb-[5px] relative bg-primary-200 border-b-1 border-solid border-gray-200">
      <div className="relative z-[2] mx-auto max-w-screen-xl px-6">
        <div className="text-center mb-[40px] overflow-hidden">
          <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight tracking-tighter mt-4 mb-5">
            Luggage Storage Near You!
          </h1>

          <h2 className="py-0 px-[10px] max-w-none text-white font-medium mx-auto mt-0 mb-[20px] text-center text-lg leading-5">
            Find luggage storage space in certified stores & hotels
          </h2>

          <SearchBar button={true} gridCols="grid-cols-5" maxWidth="max-w-xl" />
        </div>
      </div>
    </div>
  );
};

export default SearchBarSection;
