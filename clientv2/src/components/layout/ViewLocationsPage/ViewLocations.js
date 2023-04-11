import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProviderListingCard from "../../ui/ProviderListingCard";


const ViewLocations = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);
  let [listings, setListings] = useState([]);
  const navigate = useNavigate();

  function addListing() {
    navigate(`/provider/add-location`);
  }


  useEffect(() => {
    async function fetchData() {

      // getting the user ID
      const settings = {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      };

      const userID = await fetch(
        `http://localhost:6003/provider/authenticate`,
        settings
      );

      if (!userID.ok) {
        const message = `An error has occurred: ${userID.statusText}`;
        window.alert(message);
        return;
      }

      const userIDRes = await userID.json();
      console.log(userIDRes);

      // get listings based on id
      const responseListings = await fetch(`http://localhost:6003/listing/provider/${userIDRes.id}`);


      if (!responseListings.ok) {
        const message = `An error has occurred: ${responseListings.statusText}`;
        window.alert(message);
        return;
      }

      const listingRes = await responseListings.json();
      if (!listingRes) {
        window.alert(`Listings not found`);
        return;
      } else {
        setListings(listingRes);
        console.log(listingRes);

      }
    }

    fetchData();
    console.log(listings)
    return;

  }, []);

  return (
    <div>
      <div className="bg-primary-200">
        <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6">
          <div className="flex-col sm:flex-row flex items-center justify-between relative">
            <div className="shrink-0 mr-4">
              <p className="text-text-main text-xl">My Locations</p>
            </div>

            {/* Navigation */}
            <nav className="flex grow mt-4 sm:mt-0">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li
                  onClick={() => addListing()}
                  className={`cursor-pointer rounded-t-sm  hover:text-primary-200  font-semibold px-6 flex items-center text-sm py-[0.6rem]
                  bg-text-main text-text-dark
                  `}
                >
                  Add Listing
                </li>
                <li
                  onClick={() => navigate(`/provider/view-business-hours`)}
                  className={`cursor-pointer rounded-t-sm  hover:text-orange-400  font-semibold px-6 flex items-center text-sm py-[0.6rem]
                  bg-text-main text-text-dark mx-2
                  ` }
                >
                  Business Hours
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="max-w-5xl md:max-w-3xl mx-auto px-5 sm:px-6 py-8 text-text-dark">
        {listings.map((listing, index) => {
          return (
            <ProviderListingCard
              listing={listing}

              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewLocations;