import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ProviderListingCard from "../../ui/ProviderListingCard";


const ViewLocations = () => {
  let [activeMenuItem, setActiveMenuItem] = useState(0);
  let [listings, setListings] = useState([]);
  const navigate = useNavigate();

  function addBusinessHours() {
    navigate(`/provider/add-listing`);
  }


  // need to modify this to only fetch listing related to owner
  useEffect(() => {
    async function fetchData() {
      const responseListings = await fetch(`http://localhost:6003/listing`);


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
                  onClick={() => setActiveMenuItem(0)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 0
                    ? "bg-text-main text-text-dark"
                    : "text-text-main"
                    } `}
                >
                  Active
                </li>
                <li
                  onClick={() => setActiveMenuItem(1)}
                  className={`cursor-pointer rounded-t-sm hover:text-main-hover font-semibold px-6 flex items-center transition duration-150 ease-in-out text-sm py-[0.6rem] ${activeMenuItem === 1
                    ? "bg-text-main text-text-dark"
                    : "text-text-main"
                    } `}
                >
                  Completed
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
              // listingIDHandler={setListingID}
              // poppingHandler={setPopping}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ViewLocations;