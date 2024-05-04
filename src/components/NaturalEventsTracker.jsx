import React, { useEffect, useState } from 'react'
import LoadingGIF from '../assets/loading.gif';
import Map from './Map';

function NaturalEventsTracker() {
    const [eventData, setEventData] = useState([]);
    const [loading, setLoading] = useState(false);

    const { VITE_NASA_API_KEY } = import.meta.env;
    const localKey = `NaturalEventsTrackerData`;

    useEffect(() => {
        const fetchEventsData = async () => {
            /*if (localStorage.getItem(localKey)) {
                setLoading(true);
                const cachedData = JSON.parse(localStorage.getItem(localKey));
                setEventData(cachedData);
                setLoading(false);
                console.log("Fetched EONET data from the cache: ", cachedData);
                return;
            }*/

            setLoading(true);
            const response = await fetch(`https://eonet.gsfc.nasa.gov/api/v2.1/events?api_key=${VITE_NASA_API_KEY}`);
            const { events } = await response.json();

            setEventData(events);
            setLoading(false);
            //localStorage.setItem(localKey, JSON.stringify(events));
            console.log(events);
        }

        fetchEventsData();
    }, [])

    return (
        <>
            <div style={{ padding: '15px', textAlign: 'center', color: 'white', fontFamily: 'sans-serif', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <h1>The Earth Observatory Natural Event Tracker</h1>
            </div>
            {!loading ? <Map eventsData={eventData} center={{ lat: 7.8731, lng: 80.7718 }} zoom={5} /> : <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '200px' }}><img src={LoadingGIF} /></div>}
        </>
    )
}

export default NaturalEventsTracker