import { useState, useEffect } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";


import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";

// api links
const apiKey = 'AIzaSyDDLDyyMbja4JYIn0WXLXrcQ3zjWQhjBKs';
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';


const Map = ({ failValidation, onSelect, onSearch, formError, initVal }) => {
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyDDLDyyMbja4JYIn0WXLXrcQ3zjWQhjBKs',
        libraries: ["places"],
    });

    const [selected, setSelected] = useState({
        lat: 1.2907,
        lng: 103.7727,
        text: "National University of Singapore"
    });

    if (!isLoaded) return <div>Loading...</div>;

    return (
        <>
            <div className="places-container">
                <PlacesAutocomplete setSelected={setSelected} onSelect={onSelect} onSearch={onSearch} failValidation={failValidation} formError={formError} initVal={initVal} />

            </div>
            <div className="grid grid-cols-12 gap-8 mx-auto min-h-screen">

                <div className="col-span-12">
                    <div className="google-map" style={{ height: "100%", width: "100%" }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: "AIzaSyD13vaXXoPo1H2x6l4f69KxxTHsENHTCX0",
                            }}
                            center={selected}
                            defaultZoom={17}
                        >
                            <LocationPin
                                lat={selected.lat}
                                lng={selected.lng}
                                text={selected.address}
                            />
                        </GoogleMapReact>
                    </div>
                </div>
            </div>
        </>
    );
}

const PlacesAutocomplete = ({ setSelected, onSelect, onSearch, failValidation, formError, initVal }) => {

    const [postalCode, setPostalCode] = useState(null);

    const reverseGeocode = async (lat, lng) => {

        const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`
        const response = await fetch(url);
        const location = await response.json();
        const place = location.results[0];
        const address_components = place.address_components;
        console.log(address_components);
        const zip = address_components[address_components.length - 1];
        console.log(zip.long_name);
        return zip.long_name;
    }


    const {
        ready,
        value,
        setValue,
        suggestions: { status, data },
        clearSuggestions,
    } = usePlacesAutocomplete();

    // Set initial value
    useEffect(() => {
        async function setInitVal() {
            setValue(initVal);
        }
        setInitVal();
        return;
    }, []);

    console.log(usePlacesAutocomplete.value)


    const handleSelect = async (address) => {
        setValue(address, false);
        clearSuggestions();

        const results = await getGeocode({ address });
        const { lat, lng } = await getLatLng(results[0]);

        const postalCode = await reverseGeocode(lat, lng);
        console.log("pc is " + postalCode);
        setPostalCode(postalCode);
        setSelected({ lat, lng });
        onSelect(lat, lng, postalCode);
        onSearch(address);
    };

    return (
        <Combobox onSelect={handleSelect} onSearch={onSearch}>
            <ComboboxInput
                className={`w-full appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary-200
                ${failValidation ? 'border-red-400' : 'border-gray-300'}`}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    onSearch(e.target.value);
                    console.log(e.target.value);
                }}
                disabled={!ready}
                placeholder="Search an address"
            />
            {failValidation &&
                (<span className='text-red-400'>{formError}</span>)}
            <div className="py-2 text-gray-700 leading-tight">
                Postal Code is: {postalCode}
            </div>
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" &&
                        data.map(({ place_id, description }) => (
                            <ComboboxOption key={place_id} value={description} />
                        ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    );
};

export default Map;