import React from "react";
import { useParams } from "react-router-dom";

const ListingDetails = () => {
  let { listingId } = useParams();

  return <div>{listingId}</div>;
};

export default ListingDetails;
