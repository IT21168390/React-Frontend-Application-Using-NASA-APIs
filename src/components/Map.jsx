// import React from 'react';
// import GoogleMapReact from 'google-map-react';
// import { GoogleMap } from '@react-google-maps/api';
// import LocationMarker from './LocationMarker';

// export default function Map({ eventsData, center, zoom }) {
//     //console.log(eventsData[1].geometries[0].coordinates[1], eventsData[1].geometries[0].coordinates[0])
//     /*const markers = eventsData.map((event) => {
//         if (event.categories[0].id === 8) {
//             console.log(event);
//             return <LocationMarker key={event.id} lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} />
//         }
//         return null;
//     })*/
//     const filteredEvents = eventsData.filter(
//         (event) => event.categories[0].id === 8 && Array.isArray(event.geometries[0].coordinates) && event.geometries[0].coordinates.length === 2
//     );

//     // Map filtered events to markers with proper error handling
//     const markers = filteredEvents.map((event) => {
//         try {
//             const lat = event.geometries[0].coordinates[1];
//             const lng = event.geometries[0].coordinates[0];
//             return <LocationMarker key={event.id} lat={lat} lng={lng} />;
//         } catch (error) {
//             console.error('Error processing event:', event, error);
//             return null; // Handle invalid coordinates gracefully (optional: display error message)
//         }
//     });

//     return (
//         <div className='map'>
//             <GoogleMapReact
//                 bootstrapURLKeys={{ key: '' }}
//                 defaultCenter={center}
//                 defaultZoom={zoom}>

//                 {eventsData.map((event) => {
//                     if (event.categories[0].id === 8) {
//                         console.log(event.geometries);
//                         return <LocationMarker key={event.id} lat={event.geometries[0].coordinates[1]} lng={event.geometries[0].coordinates[0]} />
//                     }
//                     return null;
//                 })}

//                 {/* <LocationMarker lat={center.lat} lng={center.lng}/> */}
//                 {/* <LocationMarker lat={eventsData[1].geometries[0].coordinates[1]} lng={eventsData[1].geometries[0].coordinates[0]} /> */}
//             </GoogleMapReact>
//         </div>
//     )
// }

// /*Map.defaultProps = {
//     center: {
//         lat: 7.8731,
//         lng: 80.7718
//     },
//     zoom: 6
// }*/

import React, { useCallback, useState } from 'react'
import { GoogleMap, InfoWindow, Marker, useJsApiLoader } from '@react-google-maps/api';
//import Wildfires_ICON from '../assets/wildfire.png'

const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const center = {
    lat: -3.745,
    lng: -38.523
};

function Map({ eventsData, center, zoom }) {
    const VITE_GOOGLE_MAPS_API = import.meta.env.VITE_GOOGLE_MAPS_API;
    //const Wildfires_ICON = { url: 'https://cdn-icons-png.freepik.com/512/3043/3043544.png' };
    const Wildfires_ICON = { url: 'https://cdn-icons-png.flaticon.com/512/3043/3043608.png' };
    const Volcano_ICON = { url: 'https://cdn-icons-png.freepik.com/512/1788/1788740.png' };
    //const SeaAndLakeIce_ICON = { url: 'https://cdn-icons-png.flaticon.com/512/6543/6543627.png' };
    const SeaAndLakeIce_ICON = { url: 'https://cdn-icons-png.freepik.com/512/641/641985.png' };
    //const SeaAndLakeIce_ICON = { url: 'https://cdn-icons-png.flaticon.com/512/8722/8722154.png' };

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: VITE_GOOGLE_MAPS_API
    });

    const [selectedMarker, setSelectedMarker] = useState(null);

    const handleMarkerClick = useCallback((marker) => {
        setSelectedMarker(marker);
    }, []);

    const handleMarkerClose = useCallback(() => {
        setSelectedMarker(null);
    }, []);

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);

        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])

    // Check if window.google.maps is defined before accessing it
    if (typeof window !== 'undefined' && window.google && window.google.maps) {
        Wildfires_ICON.scaledSize = new window.google.maps.Size(45, 45);
        Volcano_ICON.scaledSize = new window.google.maps.Size(40, 40);
        SeaAndLakeIce_ICON.scaledSize = new window.google.maps.Size(40, 40);
    }

    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={5}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {eventsData.map((event) => {
                if (event.categories[0].id === 8) {
                    console.log(event.geometries);
                    return <Marker onClick={() => handleMarkerClick(event)} key={event.id} position={{ lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0] }} icon={Wildfires_ICON} />
                } else if (event.categories[0].id === 12) {
                    console.log(event.geometries);
                    return <Marker onClick={() => handleMarkerClick(event)} key={event.id} position={{ lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0] }} icon={Volcano_ICON} />
                } else if (event.categories[0].id === 15) {
                    console.log(event.geometries);
                    return <Marker onClick={() => handleMarkerClick(event)} key={event.id} position={{ lat: event.geometries[0].coordinates[1], lng: event.geometries[0].coordinates[0] }} icon={SeaAndLakeIce_ICON} />
                }
                return null;
            })}

            {selectedMarker && (
                <InfoWindow
                    position={{ lat: selectedMarker.geometries[0].coordinates[1], lng: selectedMarker.geometries[0].coordinates[0] }}
                    onCloseClick={handleMarkerClose}
                >
                    <div>
                        <h3 style={{textAlign: 'center'}}>{selectedMarker.title}</h3>
                        <p style={{textAlign: 'center',}}>Longitude: {selectedMarker.geometries[0].coordinates[0]}, Latitude: {selectedMarker.geometries[0].coordinates[1]}</p>
                    </div>
                </InfoWindow>
            )}
        </GoogleMap>
    ) : <></>
}

export default React.memo(Map)
