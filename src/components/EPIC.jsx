// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function EPIC() {
//     const { VITE_NASA_API_KEY } = import.meta.env;
//     const [epic, setEPIC] = useState();

//     useEffect(() => {
//         const fetchEPIC = async () => {
//             const localKey = `EPIC`;
//             if (localStorage.getItem(localKey)) {
//                 const epicData = JSON.parse(localStorage.getItem(localKey));
//                 setEPIC(epicData);
//                 console.log("Fetched EPIC data from the cache: ", epicData);
//                 return;
//             }
//             localStorage.clear();

//             try {
//                 const response = await axios.get(
//                     `https://api.nasa.gov/EPIC/api/natural?api_key=${VITE_NASA_API_KEY}` // Replace with your actual NASA API key
//                 );
//                 setPictureOfTheDay(response.data);
//                 localStorage.setItem(localKey, JSON.stringify(response.data));
//                 console.log("Fetched EPIC data from the NASA API: ", JSON.stringify(response.data));
//             } catch (error) {
//                 console.error('Error fetching EPIC:', error);
//             }
//         };

//         fetchEPIC();
//     }, []);

//     const fetchImage = async (imageID, date) => {
//         return await axios.get(`https://api.nasa.gov/EPIC/archive/natural/${date}/png/${imageID}`);
//     }

//     return (
//         <div>
//             {epic.map(epicData=>(

//             ))}
//         </div>
//     )
// }

// export default EPIC;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Grid, Card, CardContent, CardMedia, Typography, IconButton, Modal } from '@mui/material';
// import { ExpandMore } from '@mui/icons-material';

// const EPIC = () => {
//     const [epicData, setEpicData] = useState([]);
//     const [expandedImage, setExpandedImage] = useState(null);

//     const { VITE_NASA_API_KEY } = import.meta.env;

//     useEffect(() => {
//         const fetchEPIC = async () => {
//             const localKey = `EPIC`;
//             if (localStorage.getItem(localKey)) {
//                 const cachedData = JSON.parse(localStorage.getItem(localKey));
//                 setEpicData(cachedData);
//                 console.log("Fetched EPIC data from the cache:", cachedData);
//                 return;
//             }
//             localStorage.clear();

//             try {
//                 const response = await axios.get(
//                     `https://api.nasa.gov/EPIC/api/natural?api_key=${VITE_NASA_API_KEY}`
//                 );
//                 setEpicData(response.data);
//                 localStorage.setItem(localKey, JSON.stringify(response.data));
//                 console.log("Fetched EPIC data from the NASA API:", response.data);
//             } catch (error) {
//                 console.error('Error fetching EPIC:', error);
//             }
//         };

//         fetchEPIC();
//     }, []);

//     const fetchImage = async (imageID, date) => {
//         /*console.log(`AAAAAAAAAAAAAAAAAA https://api.nasa.gov/EPIC/archive/natural/${date}/png/${imageID}`);

//         try {
//             const response = await axios.get(
//                 `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${imageID}`
//             );
//             console.log(response)
//             return response.data;
//         } catch (error) {
//             console.error('Error fetching image:', error);
//             return null; // Handle potential errors gracefully
//         }*/
//         const formattedDate = date.slice(0, 10).split('-').join('/');
//         console.log(formattedDate);
//         return formattedDate;
//     };
//     const formatDate = date => {
//         const formattedDate = date.slice(0, 10).split('-').join('/');
//         console.log(formattedDate);
//         return formattedDate;
//     };

//     const handleExpand = (image) => {
//         setExpandedImage(image);
//     };

//     const handleClose = () => {
//         setExpandedImage(null);
//     };

//     return (
//         <Grid container spacing={2}>
//             {epicData.map((epic) => (
//                 <Grid item xs={12} sm={6} md={4} key={epic.identifier}>
//                     <Card sx={{ maxWidth: 345, cursor: 'pointer' }} onClick={() => handleExpand(epic)}>
//                         <CardMedia
//                             component="img"
//                             image={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(epic.date)}/png/${epic.image}.png?api_key=${VITE_NASA_API_KEY}`}
//                             alt={epic.caption}
//                             onError={() => console.error('Error loading image')}
//                         />
//                         <CardContent>
//                             <Typography variant="body2" color="text.secondary">
//                                 {epic.date.slice(0, 10)}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//             {expandedImage && (
//                 <Modal
//                     open={Boolean(expandedImage)}
//                     onClose={handleClose}
//                     aria-labelledby="modal-title"
//                     aria-describedby="modal-description"
//                     sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//                 >
//                     <Card sx={{ width: '75%', maxWidth: 'sm' }}>
//                         <IconButton aria-label="close" onClick={handleClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
//                             <ExpandMore />
//                         </IconButton>
//                         <CardMedia
//                             component="img"
//                             image={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(expandedImage.date)}/png/${expandedImage.image}.png?api_key=${VITE_NASA_API_KEY}`}
//                             alt={expandedImage.caption}
//                             onError={() => console.error('Error loading image')}
//                         />
//                         <CardContent>
//                             <Typography variant="h6">{expandedImage.caption}</Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 {expandedImage.date}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Modal>
//             )}
//         </Grid>
//     );
// };

// export default EPIC;







// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//     Grid,
//     Card,
//     CardContent,
//     Typography,
//     Modal,
//     Box,
//     Divider,
//     IconButton,
//     CardMedia,
// } from '@mui/material';
// import { ExpandMore } from '@mui/icons-material';

// const EPIC = () => {
//     const [epicData, setEpicData] = useState([]);
//     const [expandedImage, setExpandedImage] = useState(null);

//     const { VITE_NASA_API_KEY } = import.meta.env;

//     useEffect(() => {
//         const fetchEPIC = async () => {
//             const localKey = `EPIC`;
//             if (localStorage.getItem(localKey)) {
//                 const cachedData = JSON.parse(localStorage.getItem(localKey));
//                 setEpicData(cachedData);
//                 console.log("Fetched EPIC data from the cache:", cachedData);
//                 return;
//             }
//             localStorage.clear();

//             try {
//                 const response = await axios.get(
//                     `https://api.nasa.gov/EPIC/api/natural?api_key=${VITE_NASA_API_KEY}`
//                 );
//                 setEpicData(response.data);
//                 localStorage.setItem(localKey, JSON.stringify(response.data));
//                 console.log("Fetched EPIC data from the NASA API:", response.data);
//             } catch (error) {
//                 console.error('Error fetching EPIC:', error);
//             }
//         };

//         fetchEPIC();
//     }, []);

//     const formatDate = date => {
//         const formattedDate = date.slice(0, 10).split('-').join('/');
//         console.log(formattedDate);
//         return formattedDate;
//     };

//     const handleExpand = (image) => {
//         setExpandedImage(image);
//     };

//     const handleClose = () => {
//         setExpandedImage(null);
//     };

//     return (
//         <Grid container spacing={2}>
//             {epicData.map((epic) => (
//                 <Grid item xs={12} sm={6} md={4} key={epic.identifier}>
//                     <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 3 }}>
//                         <CardMedia
//                             component="img"
//                             image={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(
//                                 epic.date
//                             )}/png/${epic.image}.png?api_key=${VITE_NASA_API_KEY}`}
//                             alt={epic.caption}
//                             sx={{ width: '100%', height: 200, objectFit: 'cover' }}
//                             onError={() => console.error('Error loading image')}
//                         />
//                         <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <Typography variant="body2" color="text.secondary" noWrap>
//                                 {epic.caption}
//                             </Typography>
//                             <IconButton aria-label="expand" onClick={() => handleExpand(epic)}>
//                                 <ExpandMore />
//                             </IconButton>
//                         </CardContent>
//                     </Card>
//                 </Grid>
//             ))}
//             {expandedImage && (
//                 <Modal
//                     open={Boolean(expandedImage)}
//                     onClose={handleClose}
//                     aria-labelledby="modal-title"
//                     aria-describedby="modal-description"
//                     sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//                 >
//                     <Card sx={{ width: '75%', maxWidth: 'sm', borderRadius: 4, boxShadow: 3 }}>
//                         <IconButton
//                             aria-label="close"
//                             onClick={handleClose}
//                             sx={{ position: 'absolute', top: 10, right: 10 }}
//                         >
//                             <ExpandMore />
//                         </IconButton>
//                         <CardMedia
//                             component="img"
//                             image={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(
//                                 expandedImage.date
//                             )}/png/${expandedImage.image}.png?api_key=${VITE_NASA_API_KEY}`}
//                             alt={expandedImage.caption}
//                             sx={{ width: '100%', objectFit: 'cover' }}
//                             onError={() => console.error('Error loading image')}
//                         />
//                         <CardContent>
//                             <Typography variant="h6">{expandedImage.caption}</Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Date: {formatDate(expandedImage.date)}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Location: Lat {expandedImage.coords.centroid_coordinates.lat.toFixed(2)}, Lon {expandedImage.coords.centroid_coordinates.lon.toFixed(2)}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Sun Position: X {expandedImage.coords.sun_j2000_position.x.toFixed(2)}, Y {expandedImage.coords.sun_j2000_position.y.toFixed(2)}, Z {expandedImage.coords.sun_j2000_position.z.toFixed(2)}
//                             </Typography>
//                             <Typography variant="body2" color="text.secondary">
//                                 Lunar Position: X {expandedImage.coords.lunar_j2000_position.x.toFixed(2)}, Y {expandedImage.coords.lunar_j2000_position.y.toFixed(2)}, Z {expandedImage.coords.lunar_j2000_position.z.toFixed(2)}
//                             </Typography>
//                         </CardContent>
//                     </Card>
//                 </Modal>
//             )}
//         </Grid>
//     );
// }

//     export default EPIC;






import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Modal,
    Box,
    Divider,
    IconButton,
    CardMedia,
} from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

import EarthGlobeRotation from '../assets/EarthGlobeRotation.mp4';

const EPIC = () => {
    const [epicData, setEpicData] = useState([]);
    const [expandedImage, setExpandedImage] = useState(null);

    const { VITE_NASA_API_KEY } = import.meta.env;
    const localKey = `EPIC`;

    useEffect(() => {
        const fetchEPIC = async () => {
            if (localStorage.getItem(localKey)) {
                const cachedData = JSON.parse(localStorage.getItem(localKey));
                setEpicData(cachedData);
                console.log("Fetched EPIC data from the cache:", cachedData);
                return;
            }

            try {
                const response = await axios.get(
                    `https://api.nasa.gov/EPIC/api/natural?api_key=${VITE_NASA_API_KEY}`
                );
                setEpicData(response.data);
                localStorage.setItem(localKey, JSON.stringify(response.data));
                console.log("Fetched EPIC data from the NASA API:", response.data);
            } catch (error) {
                console.error('Error fetching EPIC:', error);
            }
        };

        fetchEPIC();
    }, []);

    const formatDate = date => {
        const formattedDate = date.slice(0, 10).split('-').join('/');
        console.log(formattedDate);
        return formattedDate;
    };

    const handleExpand = (image) => {
        setExpandedImage(image);
    };

    const handleClose = () => {
        setExpandedImage(null);
    };

    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <video autoPlay loop muted style={{ position: 'fixed' /*absolute*/, top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src={EarthGlobeRotation} type="video/mp4" />
                {/* Add additional source elements for different video formats if needed */}
            </video>

            <div style={{ padding: '20px', textAlign: 'center', color: 'white', fontFamily: 'sans-serif', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
                <h1>Earth Polychromatic Imaging Camera</h1>
            </div>

            {/* // <div style={{ width: '100%', height: 0, paddingBottom: '56%', position: 'relative' }}><iframe src="https://giphy.com/embed/qQh216lJwvU2mtyvwi" width="100%" height="100%" style={{position:'absolute'}} frameBorder="0" className="giphy-embed" allowFullScreen> */}
            <Grid container spacing={5} margin={'auto'} paddingBottom={'15px'}
                // sx={{ backgroundColor: "grey.900", color: "white" }}>
                sx={{ color: "white" }}>
                {epicData.map((epic) => (
                    <Grid item xs={12} sm={6} md={3} key={epic.identifier}>
                        <Card sx={{ maxWidth: 345, borderRadius: 4, boxShadow: 3, cursor: 'pointer' }} onClick={() => handleExpand(epic)}>
                            <CardMedia
                                component="img"
                                image={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(
                                    epic.date
                                )}/png/${epic.image}.png?api_key=${VITE_NASA_API_KEY}`}
                                loading='lazy'
                                alt={epic.caption}
                                sx={{ width: '100%', height: 'auto' /*200*/, objectFit: 'cover' }}
                                onError={() => console.error('Error loading image')}
                            />
                            {/* <CardContent sx={{ display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant="body2" color="text.secondary" noWrap>
                                {epic.caption}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Date: {formatDate(epic.date)}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Location: {epic.location}
                            </Typography>
                            <IconButton aria-label="expand" onClick={() => handleExpand(epic)}>
                                <ExpandMore />
                            </IconButton>
                        </CardContent> */}
                            <CardContent sx={{ display: "flex", flexDirection: "column", backgroundColor: 'purple', color: 'white' }}>
                                <Typography variant="body2" textAlign={'center'}>{epic.caption}</Typography>
                                <Divider sx={{ marginY: 1 }} />  {/* Add a divider between caption and details */}
                                <div style={{ textAlign: 'center', backgroundColor: 'lightgrey', borderRadius: '25px', padding: '3px' }}>
                                    <Typography variant="body2" color="black">
                                        Date: {formatDate(epic.date)}
                                    </Typography>
                                    {epic.coords && (
                                        <Typography variant="body2" color="black" fontWeight={'bold'}>
                                            Location: Lat {epic.coords.centroid_coordinates.lat.toFixed(2)}, Lon {epic.coords.centroid_coordinates.lon.toFixed(2)}
                                        </Typography>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
                {expandedImage && (
                    <Modal
                        role="modal"
                        open={Boolean(expandedImage)}
                        onClose={handleClose}
                        aria-labelledby="modal-title"
                        aria-describedby="modal-description"
                        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Card sx={{ width: '75%', maxWidth: 'sm', borderRadius: 4, boxShadow: 3 }}>
                            <IconButton
                                aria-label="close"
                                onClick={handleClose}
                                sx={{ position: 'absolute', top: 10, right: 10 }}
                            >
                                <ExpandMore />
                            </IconButton>
                            <CardMedia
                                component="img"
                                image={`https://api.nasa.gov/EPIC/archive/natural/${formatDate(
                                    expandedImage.date
                                )}/png/${expandedImage.image}.png?api_key=${VITE_NASA_API_KEY}`}
                                alt={expandedImage.caption}
                                sx={{ width: '100%', objectFit: 'cover' }}
                                onError={() => console.error('Error loading image')}
                            />
                            <CardContent>
                                <Typography variant="h6" textAlign={'center'}>{expandedImage.caption}</Typography>
                                <Typography variant="body2" color="black">
                                    Date: {formatDate(expandedImage.date)}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body2" color="black">
                                    Location: Lat {expandedImage.coords.centroid_coordinates.lat}, Lon {expandedImage.coords.centroid_coordinates.lon}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body2" color="black">
                                    Sun Position: X {expandedImage.coords.sun_j2000_position.x}, Y {expandedImage.coords.sun_j2000_position.y}, Z {expandedImage.coords.sun_j2000_position.z}
                                </Typography>
                                <Divider sx={{ marginY: 1 }} />
                                <Typography variant="body2" color="black" textAlign={'justify'}>
                                    Lunar Position: X {expandedImage.coords.lunar_j2000_position.x}, Y {expandedImage.coords.lunar_j2000_position.y}, Z {expandedImage.coords.lunar_j2000_position.z}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Modal>
                )}
            </Grid>
            {/* // </iframe></div> */}
        </div>
    );
}

export default EPIC;