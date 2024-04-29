// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import Footer from './Footer';
// import Sidebar from './Sidebar';

// function Home() {
//   const [pictureOfTheDay, setPictureOfTheDay] = useState();
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);

//   useEffect(() => {
//     function fetchAPOD() {
//       axios.get('https://api.nasa.gov/planetary/apod?api_key=oAjAIEcjtPfoJQev2xAtAkTAnkaYXQeKl0OnqOxF')
//         .then(response => {
//           setPictureOfTheDay(response.data.url);
//         })
//         .catch(error => {
//           console.log(error)
//         })
//     }

//     fetchAPOD();
//   }, [])

//   const toggleSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };

//   return (
//     <>
//       <div
//         style={{
//           position: 'relative',
//           display: 'flex',
//           justifyContent: 'center',
//           alignItems: 'center',
//           height: '100vh',
//         }}
//       >
//         {/* Image */}
//         <img
//           src={pictureOfTheDay}
//           alt="Astronomy Picture of the Day"
//           // style={{ maxWidth: '100%', maxHeight: '100%' }}
//           style={{ width: '100vw', height: 'auto', maxHeight: '100vh', objectFit: 'contain' }}
//         />
//         {/* Sidebar */}
//         <Sidebar isOpen={isSidebarOpen} />
//         {/* Footer Component */}
//         <Footer toggleSidebar={toggleSidebar} />
//       </div>

//       <p>HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH</p>
//     </>
//   )
// }

// export default Home;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
// import { ExpandMore, ExpandLess } from '@mui/icons-material';

// function Home() {
//   const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
//   const [expanded, setExpanded] = useState(false);

//   useEffect(() => {
//     const fetchAPOD = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.nasa.gov/planetary/apod?api_key=oAjAIEcjtPfoJQev2xAtAkTAnkaYXQeKl0OnqOxF' // Replace with your actual NASA API key
//         );
//         setPictureOfTheDay(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching APOD:', error);
//       }
//     };

//     fetchAPOD();
//   }, []);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   if (!pictureOfTheDay) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Card sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
//       <CardMedia
//         component="img"
//         image={pictureOfTheDay.hdurl}
//         alt={pictureOfTheDay.title}
//         sx={{ height: 400 }}
//       />
//       <CardContent>
//         <Typography variant="h5" component="div">
//           {pictureOfTheDay.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {pictureOfTheDay.date}
//         </Typography>
//         <Typography variant="body2">
//           {pictureOfTheDay.explanation}
//         </Typography>
//         <IconButton
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           sx={{ position: 'absolute', bottom: 16, right: 16 }}
//         >
//           {expanded ? <ExpandLess /> : <ExpandMore />}
//         </IconButton>
//       </CardContent>
//     </Card>
//   );
// }

// export default Home;


// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   IconButton,
//   Typography,
//   Box,
//   Modal,
//   Backdrop,
//   Fade,
//   Tooltip,
//   CardMedia,
// } from '@mui/material';
// import { ExpandMore, ExpandLess } from '@mui/icons-material';

// function Home() {
//   const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
//   const [expanded, setExpanded] = useState(false);
//   const [openDescription, setOpenDescription] = useState(false);

//   useEffect(() => {
//     const fetchAPOD = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.nasa.gov/planetary/apod?api_key=oAjAIEcjtPfoJQev2xAtAkTAnkaYXQeKl0OnqOxF' // Replace with your actual NASA API key
//         );
//         setPictureOfTheDay(response.data);
//       } catch (error) {
//         console.error('Error fetching APOD:', error);
//       }
//     };

//     fetchAPOD();
//   }, []);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   const handleOpenDescription = () => {
//     setOpenDescription(!openDescription);
//   };

//   if (!pictureOfTheDay) {
//     return <div>Loading...</div>;
//   }

//   const description = (
//     <Modal
//       aria-labelledby="transition-modal-title"
//       aria-describedby="transition-modal-description"
//       open={openDescription}
//       onClose={handleOpenDescription}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//       BackdropProps={{
//         timeout: 500, // Adjust transition duration as desired
//       }}
//     >
//       <Fade in={openDescription}>
//         <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '100vh' }}>
//           <Typography variant="body1">{pictureOfTheDay.explanation}</Typography>
//         </Box>
//       </Fade>
//     </Modal>
//   );

//   return (
//     <>
//       <Card sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
//         <CardMedia
//           component="img"
//           image={pictureOfTheDay.hdurl}
//           alt={pictureOfTheDay.title}
//           sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 16,
//             left: 16,
//             color: 'white',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'space-between',
//             height: '100%',
//           }}
//         >
//           <Typography variant="h4">{pictureOfTheDay.title}</Typography>
//           <Typography variant="body2">{pictureOfTheDay.date}</Typography>
//         </Box>
//         <Tooltip title="View Description">
//           <IconButton
//             sx={{ position: 'absolute', bottom: 16, right: 16, color: 'white' }}
//             onClick={handleOpenDescription}
//           >
//             {expanded ? <ExpandLess /> : <ExpandMore />}
//           </IconButton>
//         </Tooltip>
//       </Card>
//       {description}
//     </>
//   );
// }

// export default Home;




// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   Card,
//   IconButton,
//   Typography,
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemText,
//   Divider,
//   Modal,
//   Backdrop,
//   Fade,
//   Tooltip,
//   CardMedia,
// } from '@mui/material';
// import { ExpandMore, ExpandLess } from '@mui/icons-material';

// function Home() {
//   const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
//   const [openDescription, setOpenDescription] = useState(false);

//   useEffect(() => {
//     const fetchAPOD = async () => {
//       try {
//         const response = await axios.get(
//           'https://api.nasa.gov/planetary/apod?api_key=oAjAIEcjtPfoJQev2xAtAkTAnkaYXQeKl0OnqOxF' // Replace with your actual NASA API key
//         );
//         setPictureOfTheDay(response.data);
//       } catch (error) {
//         console.error('Error fetching APOD:', error);
//       }
//     };

//     fetchAPOD();
//   }, []);

//   const handleOpenDescription = () => {
//     setOpenDescription(!openDescription);
//   };

//   if (!pictureOfTheDay) {
//     return <div>Loading...</div>;
//   }

//   const descriptionPanel = (
//     <Drawer
//       anchor="right"
//       open={openDescription}
//       onClose={handleOpenDescription}
//     >
//       <List>
//         <ListItem>
//           <ListItemText primary="Explanation" />
//         </ListItem>
//         <Divider />
//         <ListItem>
//           <ListItemText primary={pictureOfTheDay.explanation} />
//         </ListItem>
//       </List>
//     </Drawer>
//   );

//   return (
//     <>
//       <Card sx={{ width: '100vw', height: '100vh', position: 'relative' }}>
//         <CardMedia
//           component="img"
//           image={pictureOfTheDay.hdurl}
//           alt={pictureOfTheDay.title}
//           sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
//         />
//         <Box
//           sx={{
//             position: 'absolute',
//             bottom: 16,
//             left: 16,
//             color: 'white',
//             display: 'flex',
//             flexDirection: 'column',
//             justifyContent: 'flex-end',
//           }}
//         >
//           <Typography variant="h4">{pictureOfTheDay.title}</Typography>
//           <Typography variant="body2">{pictureOfTheDay.date}</Typography>
//         </Box>
//         <Tooltip title="View Description">
//           <IconButton
//             sx={{ position: 'absolute', bottom: 16, right: 16, color: 'white' }}
//             onClick={handleOpenDescription}
//           >
//             {openDescription ? <ExpandLess /> : <ExpandMore />}
//           </IconButton>
//         </Tooltip>
//       </Card>
//       {descriptionPanel}
//     </>
//   );
// }

// export default Home;






/*
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Card,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tooltip,
  CardMedia,
} from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

function Home() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
  const [openDescription, setOpenDescription] = useState(false);

  useEffect(() => {
    const fetchAPOD = async () => {
      try {
        const response = await axios.get(
          'https://api.nasa.gov/planetary/apod?api_key=oAjAIEcjtPfoJQev2xAtAkTAnkaYXQeKl0OnqOxF' // Replace with your actual NASA API key
        );
        setPictureOfTheDay(response.data);
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };

    fetchAPOD();
  }, []);

  const handleOpenDescription = () => {
    setOpenDescription(!openDescription);
  };

  if (!pictureOfTheDay) {
    return <div>Loading...</div>;
  }

  const descriptionPanel = (
    <Drawer
      anchor="right"
      open={openDescription}
      onClose={handleOpenDescription}
      PaperProps={{ sx: { width: 300, backgroundColor: 'rgba(0, 0, 0, 0.5)' } }} // Semi-transparent background
    >
      <List>
        <ListItem>
          <ListItemText primary="Explanation" style={{ color: 'white' }} />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemText primary={pictureOfTheDay.explanation} style={{ color: 'white' }} />
        </ListItem>
      </List>
    </Drawer>
  );

  return (
    <>
      <Card sx={{ maxWidth: '100vw', height: '100vh', position: 'relative' }}>
        <CardMedia
          component="img"
          image={pictureOfTheDay.hdurl}
          alt={pictureOfTheDay.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: '100vw',
            bottom: 0, //16,
            left: 16,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            background:
              'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)', // Gradient background for title & date
          }}
        >
          <Typography variant="h4">{pictureOfTheDay.title}</Typography>
          <Typography variant="body2">{pictureOfTheDay.date}</Typography>
        </Box>
        <Tooltip title="View Description">
          <IconButton
            sx={{ position: 'absolute', bottom: 16, right: 0, color: 'white' }}
            onClick={handleOpenDescription}
          >
            {openDescription ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Tooltip>
      </Card>
      {descriptionPanel}
    </>
  );
}

export default Home;
*/



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Card,
  IconButton,
  Typography,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tooltip,
  CardMedia,
  Backdrop,
  Fade,
  Modal,
  Grid,
  Paper,
  CardContent,
} from '@mui/material';
import Button from '@mui/material/Button';
import { ExpandMore, ExpandLess, Close } from '@mui/icons-material';
import CopyrightIcon from '@mui/icons-material/Copyright';

import EarthNASA_JPG from '../assets/Earth-NASA.jpg';
import FlightThroughSpace from '../assets/FlightThroughSpace.mp4'

function Home() {
  const [pictureOfTheDay, setPictureOfTheDay] = useState(null);
  const [openDescription, setOpenDescription] = useState(false);

  useEffect(() => {
    //const NASA_API_KEY_ = process.env.NASA_API_KEY;//import.meta.env.NASA_API_KEY;
    const { VITE_NASA_API_KEY } = import.meta.env;
    console.log(`https://api.nasa.gov/planetary/apod?api_key=${VITE_NASA_API_KEY}`);

    const fetchAPOD = async () => {
      const today = new Date().toISOString().split('T')[0];
      const localKey = `APOD-${today}`;
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setPictureOfTheDay(apiData);
        console.log("Fetched APOD data from the cache: ", apiData);
        return;
      }
      localStorage.clear();

      try {
        const response = await axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=${VITE_NASA_API_KEY}` // Replace with your actual NASA API key
        );
        setPictureOfTheDay(response.data);
        localStorage.setItem(localKey, JSON.stringify(response.data));
        console.log("Fetched APOD data from the NASA API: ", JSON.stringify(response.data));
      } catch (error) {
        console.error('Error fetching APOD:', error);
      }
    };

    fetchAPOD();
  }, []);

  const handleOpenDescription = () => {
    setOpenDescription(!openDescription);
  };

  const handleCloseDescription = () => {
    setOpenDescription(false);
  };

  if (!pictureOfTheDay) {
    return <div>Loading...</div>;
  }

  // Use Modal instead of Drawer for a more seamless transition and hiding of background content
  const descriptionModal = (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openDescription}
      onClose={handleCloseDescription}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500, // Adjust transition duration as desired
      }}
    >
      <Fade in={openDescription}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '350px',
            height: '100vh',
            //maxHeight: '100vh',
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background,
            //overflow: 'auto', // Allow scrolling within the Modal
          }}
        >
          <IconButton onClick={handleCloseDescription} sx={{ position: 'absolute', top: 16, right: 16, color: 'white' }}>
            <Close />
          </IconButton>
          <List sx={{ width: '100%' }}>
            <ListItem>
              <Typography variant="h6" component="span" sx={{ fontWeight: 'bold', color: 'white' }}>
                Explanation
                <hr />
              </Typography>
            </ListItem>
            <Divider />
            <ListItem>
              <ListItemText primary={pictureOfTheDay.explanation} style={{ color: 'white' }} />
            </ListItem>
            <ListItem>
              <ListItemText primary={
                <>
                  <CopyrightIcon sx={{ color: 'white', marginRight: 1 }} /> {pictureOfTheDay.copyright}
                </>
              } primaryTypographyProps={{ sx: { fontWeight: 'bold', color: 'white' } }} />
            </ListItem>
          </List>
        </Box>
      </Fade>
    </Modal>
  );

  return (
    <>
      <Card sx={{ maxWidth: '100vw', height: '94vh', position: 'relative' }}>
        <div style={{backgroundImage: pictureOfTheDay.url, objectPosition: 'center', objectFit: 'cover'}}>
        <CardMedia
          component="img"
          loading='lazy'
          image={pictureOfTheDay.hdurl || pictureOfTheDay.url} // Use hdurl if available
          alt={pictureOfTheDay.title}
          sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        </div>
        <Box
          sx={{
            position: 'absolute',
            width: '100vw',
            bottom: 60,//80
            left: 48,
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            //background: 'transparent', // Fully transparent background
          }}
        >
          <Typography variant="h4">"{pictureOfTheDay.title}"</Typography>
          <hr style={{ width: '50%' }} />
          <Typography variant="h5"><b>NASA's Astronomy Picture of the Day</b></Typography>
          <Typography variant="body2">{pictureOfTheDay.date}</Typography>
        </Box>
        <Tooltip title="View Description">
          <IconButton
            // sx={{ position: 'absolute', bottom: 16, right: 0, color: 'white' }}
            sx={{ position: 'absolute', bottom: 80, right: 32, color: 'white' }}
            onClick={handleOpenDescription}
          >
            {openDescription ? <ExpandLess /> : <i className="fa-solid fa-circle-info fa-bounce fa-xl"></i>/*<ExpandMore />*/}
            {/* <i className="fa-solid fa-circle-info fa-bounce fa-xl"></i>     <i className="fa-solid fa-circle-info fa-beat-fade fa-xl"></i> */}
          </IconButton>
        </Tooltip>
      </Card>
      {descriptionModal}

      <div style={{ backgroundColor: 'black', color: 'white' }}>
      </div>

      {/* Video section with navigation elements */}
      <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
        <video autoPlay loop muted style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
          <source src="src/assets/FlightThroughSpace.mp4" type="video/mp4" />
        </video>

        {/* <Grid container spacing={3} justifyContent="center">
      /* First Navigation Section 
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image="/path/to/your/image1.jpg" // Replace with the path to your image
                alt="Navigation Image 1"
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Section 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of Section 1 goes here. Add some catchy text to attract users.
                </Typography>
                <Button variant="contained" onClick={() => handleNavigation('section1')}>
                  Navigate
                </Button>
              </CardContent>
            </Card>
          </Grid>

      /* Second Navigation Section 
          <Grid item xs={12} sm={6}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                image="/path/to/your/image2.jpg" // Replace with the path to your image
                alt="Navigation Image 2"
                sx={{ height: 200 }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Section 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Description of Section 2 goes here. Make it enticing for users to click.
                </Typography>
                <Button variant="contained" onClick={() => handleNavigation('section2')}>
                  Navigate
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid> */}


        {/* Navigation sections (Grid for layout) */}
        <Grid container spacing={2} style={{ position: 'absolute', bottom: 'auto', top: '20%', width: '100%' }}>
          <Grid item xs={6}>
            {/* Navigation section 1 */}
            <Paper
              elevation={3} // Add subtle elevation for hover/active effect
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)', // Semi-transparent background
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                cursor: 'pointer', // Make it look clickable
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' }, // Change background on hover
              }}
              onClick={() => { /* Handle navigation to component 1 */ }}
            >
              <img src={EarthNASA_JPG} alt="Image 1 description" width='auto' height='300px' />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Earth Polychromatic Imaging Camera (EPIC)
              </Typography>
              <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
                "Information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope."
              </Typography>
              <Link to="/epic">
                <Button variant="contained" color="primary" size="medium" sx={{ marginTop: '10px' }} >
                  Explore Now
                </Button>
              </Link>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            {/* Navigation section 2 (similar structure) */}
            <Paper
              elevation={3}
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                cursor: 'pointer',
                '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' },
              }}
              onClick={() => { /* Handle navigation to component 2 */ }}
            >
              <img src="https://science.nasa.gov/wp-content/uploads/2024/03/mer-bythenumbers-infographic-feb2019.jpg?w=2048&format=webp" alt="Image 2 description" width='auto' height='300px' />
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                Mars Rover Photos
              </Typography>
              <Typography variant="body1" style={{ marginTop: '10px', textAlign: 'center' }}>
                "Image data gathered by NASA's Curiosity, Opportunity, and Spirit rovers on Mars. NASA’s twin rovers, Spirit and Opportunity, landed on Mars on Jan. 3 and Jan. 24, 2004 PST (Jan. 4 and Jan. 25 UTC). The rovers were planned as 90-day missions to search for geological clues regarding environmental conditions on early Mars, and assess whether those environments were conducive to life."
              </Typography>
              <Link to="/mars">
                <Button variant="contained" color="primary" size="medium" sx={{ marginTop: '10px' }}>
                  Explore Now
                </Button>
              </Link>
            </Paper>
          </Grid>
        </Grid>
      </div>


      <div style={{ position: 'relative', width: '100vw', height: 'auto'/*100vh*/ }}>
        <video autoPlay loop muted style={{ position: 'fixed' /*absolute*/, top: 0, left: 0, width: '100vw', height: '100vh', objectFit: 'cover', zIndex: -1 }}>
          <source src={FlightThroughSpace} type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export default Home;
