import { MapPinIcon } from "@heroicons/react/20/solid";

const LocationPin = ({ text }) => (
  <div className="pin">
    <MapPinIcon className="h-4 w-4 ml-1" aria-hidden="true" />
    <p className="pin-text">{text}</p>
  </div>
);

export default LocationPin;
