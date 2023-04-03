import React, { useState, useCallback } from 'react';
import { GoogleMap, Marker, Autocomplete } from 'react-google-maps';

const MapWithSearchBox = ({ onLocationChange }) => {
    const [location, setLocation] = useState(null);

    const handlePlaceSelect = useCallback((place) => {
        const { lat, lng } = place.geometry.location;
        const postalCode = getPostalCodeFromAddressComponents(place.address_components);

        setLocation({
            lat: lat(),
            lng: lng(),
            postalCode,
        });

        onLocationChange({
            lat: lat(),
            lng: lng(),
            postalCode,
        });
    }, [onLocationChange]);

    const getPostalCodeFromAddressComponents = (addressComponents) => {
        const postalCodeComponent = addressComponents.find((component) =>
            component.types.includes('postal_code')
        );

        return postalCodeComponent ? postalCodeComponent.short_name : null;
    };

    return (
        <GoogleMap center={{ lat: 37.7749, lng: -122.4194 }} zoom={12}>
            {location && <Marker position={location} />}
            <Autocomplete
                onLoad={(autocomplete) => {
                    autocomplete.setFields(['geometry', 'address_components']);
                }}
                onPlaceChanged={() => handlePlaceSelect(autocomplete.getPlace())}
            >
                <input type="text" placeholder="Enter a location" />
            </Autocomplete>
        </GoogleMap>
    );
};

export default MapWithSearchBox;
