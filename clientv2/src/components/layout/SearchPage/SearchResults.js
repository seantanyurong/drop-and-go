import { useEffect, useState } from "react";
import Listing from "../../ui/Listing";

const SearchResults = (props) => {
  let [listings, setListings] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`http://localhost:6003/listing`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const listingsRes = await response.json();
      if (!listingsRes) {
        window.alert(`Listings cannot be retrieved`);
        return;
      } else {
        setListings(listingsRes);
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid grid-cols-8 gap-8 mx-auto px-5 sm:px-6 py-10 border-black border-2">
      <div className="col-span-5">
        <div className="grid grid-cols-3 gap-4">
          {listings.map((listing, index) => {
            return <Listing props = {listing} />;
          })}
        </div>
      </div>
      <div className="col-span-3 bg-red-500">Map</div>
    </div>
  );
};

export default SearchResults;
