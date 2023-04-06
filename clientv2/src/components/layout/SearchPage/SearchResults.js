import { useEffect, useState } from "react";
import Listing from "../../ui/Listing";
import GoogleMapReact from "google-map-react";
import LocationPin from "../../ui/LocationPin";
import BackgroundTint from "../../ui/BackgroundTint";
import BookingForm from "../../ui/BookingForm";
import { useParams } from "react-router-dom";

const SearchResults = (props) => {
  let [listings, setListings] = useState([]);
  let [popping, setPopping] = useState(false);
  let [listingID, setListingID] = useState("");

  const { text, date, bag } = useParams();

  // test
  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 1.29027,
    lng: 103.851959,
  };

  useEffect(() => {
    console.log(text, date, bag);

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
        console.log(listingsRes.filter((listing) => listing.name.search(text)));
        setListings(listingsRes.filter((listing) => listing.name.search(text)));
      }
    }

    fetchData();

    return;
    // eslint-disable-next-line
  }, []);

  return (
    <div className="grid grid-cols-8 gap-8 mx-auto">
      <div className="col-span-8 lg:col-span-5 px-5 sm:px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
          {listings.map((listing, index) => {
            return (
              <Listing
                listing={listing}
                listingIDHandler={setListingID}
                poppingHandler={setPopping}
                key={index}
              />
            );
          })}
        </div>
      </div>
      <div className="lg:col-span-3 hidden lg:block">
        <div className="google-map" style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD13vaXXoPo1H2x6l4f69KxxTHsENHTCX0",
            }}
            defaultCenter={location}
            defaultZoom={13}
          >
            {listings.map((listing, index) => {
              return (
                <LocationPin
                  lat={listing.latitude}
                  lng={listing.longitude}
                  text={listing.name}
                />
              );
            })}
          </GoogleMapReact>
        </div>
      </div>
      {popping && (
        <BookingForm listing_id={listingID} poppingHandler={setPopping} />
      )}
      {popping && <BackgroundTint clickHandler={() => setPopping(false)} />}
    </div>
  );
};

export default SearchResults;
