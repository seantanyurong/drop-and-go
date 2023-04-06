import React from "react";
import Bookings from "../components/layout/ViewLocationsPage/ViewLocations";
import ProviderHeader from "../components/ui/ProviderHeader";

const ViewLocationsPage = () => {
  return (
    <div>
      <ProviderHeader />
      <Bookings />
    </div>
  );
};

export default ViewLocationsPage;
