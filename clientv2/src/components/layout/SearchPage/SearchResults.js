import { useEffect, useState } from "react";
import Listing from "../../ui/Listing";
import GoogleMapReact from "google-map-react";
import LocationPin from "../../ui/LocationPin";
import BackgroundTint from "../../ui/BackgroundTint";
import BookingForm from "../../ui/BookingForm";

const SearchResults = (props) => {
  let [listings, setListings] = useState([]);
  let [popping, setPopping] = useState(false);
  let [listingID, setListingID] = useState("");

  const location = {
    address: "1600 Amphitheatre Parkway, Mountain View, california.",
    lat: 37.42216,
    lng: -122.08427,
  };

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
    <div className="grid grid-cols-8 gap-8 mx-auto">
      <div className="col-span-5 px-5 sm:px-6 py-10">
        <div className="grid grid-cols-3 gap-4">
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
      <div className="col-span-3">
        <div className="google-map" style={{ height: "100%", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyD13vaXXoPo1H2x6l4f69KxxTHsENHTCX0",
            }}
            defaultCenter={location}
            defaultZoom={17}
          >
            <LocationPin
              lat={location.lat}
              lng={location.lng}
              text={location.address}
            />
          </GoogleMapReact>
        </div>
      </div>
      {popping && (
        <BookingForm listingID={listingID} poppingHandler={setPopping} />
      )}
      {popping && <BackgroundTint clickHandler={() => setPopping(false)} />}
    </div>
  );
};

export default SearchResults;
