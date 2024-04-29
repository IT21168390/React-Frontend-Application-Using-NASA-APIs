import axios from 'axios';
import React, { useEffect, useState } from 'react'
import {
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Typography,
    Grid,
    Box,
    IconButton,
    Tooltip,
    Modal,
    Fade,
    Backdrop,
    Paper,
    Divider,
    Table,
    Pagination,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio
} from '@mui/material';
import { Favorite, FavoriteBorder, Close } from '@mui/icons-material';
import { Zoom } from '@mui/material';

function MarsRoverPhotos() {
    const VITE_NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
    //const localKey = 'MarsPhotosData';

    const [marsRoverPhotos, setMarsRoverPhotos] = useState([]);

    const [displayedPhotos, setDisplayedPhotos] = useState(null);

    const [openDetailsModal, setOpenDetailsModal] = useState(false);
    const [selectedPhoto, setSelectedPhoto] = useState(null);

    const [currentPage, setCurrentPage] = useState(1);
    const handlePageChange = (event, newPage) => {
        setCurrentPage(newPage);
        setDisplayedPhotos(null);
    };

    /*const pageSize = 10; // Number of photos per page
    const startIndex = (currentPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayedPhotos = marsRoverPhotos.slice(startIndex, endIndex);*/
    const filterPhotosByCamera = (event) => {
        if (event.target.value === "ALL")
            setDisplayedPhotos(marsRoverPhotos);
        else
            setDisplayedPhotos(marsRoverPhotos.filter(photo => photo.camera.full_name === event.target.value));
    }

    useEffect(() => {
        function fetchMarsRoverPhotos() {
            const localKey = `MarsPhotosData${currentPage}`;

            if (localStorage.getItem(localKey)) {
                setMarsRoverPhotos(JSON.parse(localStorage.getItem(localKey)));
                console.log("Fetched Mars Rover Photos data from cache.");
                console.log(JSON.parse(localStorage.getItem(localKey)));
                return;
            }
            axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=${currentPage}&api_key=${VITE_NASA_API_KEY}`)
                .then((response) => {
                    setMarsRoverPhotos(response.data.photos.slice(0, 24));
                    if (response.data.photos.length > 0)
                        localStorage.setItem(localKey, JSON.stringify(response.data.photos.slice(0, 24)));
                    console.log("Fetched Mars Rover Photos data from NASA API.");
                    console.log(response.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        fetchMarsRoverPhotos();
    }, [currentPage])

    const handleOpenDetails = (photo) => {
        setSelectedPhoto(photo);
        setOpenDetailsModal(true);
    };

    const handleCloseDetails = () => {
        setOpenDetailsModal(false);
        setSelectedPhoto(null);
    };

    return (
        // <div style={{backgroundImage: 'url("../assets/EarthGlobeRotation.gif")'}}>
        // <div>MarsRoverPhotos {marsRoverPhotos ? marsRoverPhotos.map((mars, index) => (
        //     <p key={index}>mars</p>
        // )) : ""}</div></div>
        // <div style={{ position: 'relative' }}>
        //     <video autoPlay loop muted style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
        //         <source src="src\assets\EarthGlobeRotation.mp4" type="video/mp4" />
        //         {/* Add additional source elements for different video formats if needed */}
        //         Your browser does not support the video tag.
        //     </video>
        //     {/* Your content here */}
        //     <div style={{ padding: '20px' }}>
        //         {/* Your other components/content */}
        //         <h1>Hello World!</h1>
        //     </div>
        // </div>


        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <video autoPlay loop muted style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: -1 }}>
                <source src="src/assets/SpaceWithAsteroidsApproaching.mp4" type="video/mp4" />
            </video>
            {/* Your content here */}
            <div style={{ padding: '20px', textAlign: 'center', color: 'white', fontFamily: 'sans-serif' }}>
                {/* Your other components/content */}
                <h1>MARS  ROVER  PHOTOS</h1>
            </div>

            <FormControl style={{ textAlign: 'center', color: 'white', marginLeft: '30%', padding: 0 }}>
                <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                    sx={{ color: 'white' }}
                    defaultValue={"ALL"}>
                    <FormControlLabel onChange={filterPhotosByCamera} value="ALL" control={<Radio />} label="ALL" />
                    <FormControlLabel onChange={filterPhotosByCamera} value="Front Hazard Avoidance Camera" control={<Radio />} label="Front Hazard Avoidance Camera" />
                    <FormControlLabel onChange={filterPhotosByCamera} value="Mast Camera" control={<Radio />} label="Mast Camera" />
                    <FormControlLabel onChange={filterPhotosByCamera} value="Rear Hazard Avoidance Camera" control={<Radio />} label="Rear Hazard Avoidance Camera" />
                </RadioGroup>
            </FormControl>
            {/* <div style={{ padding: '20px' }}>
                <h1>Mars Rover Photos</h1>
                <Grid container spacing={3}>
                    {marsRoverPhotos.map(photo => (
                        <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
                            <Card>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={photo.img_src}
                                        alt={`Mars Rover Photo ${photo.id}`}
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            Sol: {photo.sol}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Earth Date: {photo.earth_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            Camera: {photo.camera.full_name}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div> */}

            <div style={{ padding: '20px', marginLeft: '25px' }}>
                <Grid container spacing={3}>
                    {(displayedPhotos ? displayedPhotos : marsRoverPhotos).map((photo) => (
                        <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
                            <Card
                                sx={{
                                    maxWidth: 345,
                                    borderRadius: 4,
                                    ':hover': {
                                        boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)',
                                        transform: 'scale(1.05)', // Add subtle zoom on hover
                                    },
                                }}
                                onClick={() => handleOpenDetails(photo)}
                            >
                                <CardMedia
                                    component="img"
                                    image={photo.img_src}
                                    loading='lazy'
                                    alt={`Mars Rover Photo ${photo.id}`}
                                    sx={{ height: 200 }}
                                />
                                <CardContent sx={{ padding: '16px', backgroundColor: 'black', textAlign: 'center' }}>
                                    <Typography variant="body2" color="white">
                                        Sol: {photo.sol}
                                    </Typography>
                                    <Typography variant="body2" color="white" gutterBottom>
                                        Earth Date: {photo.earth_date}
                                    </Typography>
                                    <Typography variant="subtitle2" color="white" fontWeight="bold">
                                        Camera: {photo.camera.full_name}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        Rover: {photo.rover.name}
                                    </Typography>
                                    <Typography variant="body2" color="white">
                                        Rover Status: {photo.rover.status.toUpperCase()}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <Modal
                                aria-labelledby="transition-modal-title"
                                aria-describedby="transition-modal-description"
                                open={openDetailsModal}
                                onClose={handleCloseDetails}
                                closeAfterTransition
                                sx={{ '& .MuiBackdrop-root': { backgroundColor: 'rgba(0, 0, 0, 0.5)' } }}
                            >
                                <Fade in={openDetailsModal}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', bgcolor: 'background.paper', boxShadow: 24, p: 4, borderRadius: 8 }}>
                                        <IconButton onClick={handleCloseDetails} sx={{ position: 'absolute', top: 10, right: 10 }}>
                                            <Close />
                                        </IconButton>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} md={6}>
                                                <img
                                                    src={selectedPhoto?.img_src}
                                                    alt={`Mars Rover Photo ${selectedPhoto?.id}`}
                                                    style={{ width: '80%' }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} md={6}>
                                                <Paper sx={{ padding: '16px', borderRadius: 4 }}>
                                                    <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center', color: 'blue' }}>
                                                        Detailed Information for Photo {selectedPhoto?.id}
                                                    </Typography>
                                                    <Grid container spacing={1}>
                                                        <Grid item xs={12} sm={6}>
                                                            <Typography variant="body2" fontWeight={'bold'}>Sol:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Earth Date:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Camera:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Rover:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Rover Status:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Rover Landing Date:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Rover Launch Date:</Typography>
                                                            <Typography variant="body2" fontWeight={'bold'}>Total Photos:</Typography>
                                                        </Grid>
                                                        <Grid item xs={12} sm={6}>
                                                            <Typography variant="body2">{selectedPhoto?.sol}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.earth_date}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.camera.full_name}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.rover.name}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.rover.status.toUpperCase()}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.rover.landing_date}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.rover.launch_date}</Typography>
                                                            <Divider />
                                                            <Typography variant="body2">{selectedPhoto?.rover.total_photos}</Typography>
                                                        </Grid>
                                                        <Grid item xs={12}>
                                                            <Divider sx={{ marginBottom: 2 }} />
                                                            <Typography variant="body2" fontWeight={'bold'} fontSize={'15px'}>Rover Cameras:</Typography>
                                                            <ul style={{ marginLeft: '150px' }}>
                                                                {selectedPhoto?.rover.cameras.map((camera, index) => (
                                                                    <li key={index} style={{ marginLeft: '15px' }}><Typography variant="body2" >{camera.full_name}</Typography></li>
                                                                ))}
                                                            </ul>
                                                        </Grid>
                                                    </Grid>
                                                </Paper>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Fade>
                            </Modal>


                        </Grid>
                    ))}
                </Grid>
            </div>

            {/* <div style={{ padding: '20px' }}>
                <h1>Mars Rover Photos</h1>
                <Grid container spacing={3}>
                    {marsRoverPhotos.map((photo) => (
                        <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
                            <Card sx={{ maxWidth: 345, borderRadius: 4 }}>
                                <CardMedia
                                    component="img"
                                    image={photo.img_src}
                                    alt={`Mars Rover Photo ${photo.id}`}
                                    sx={{ height: 200 }}
                                />
                                <CardContent sx={{ padding: '16px' }}>
                                    <Typography variant="body2" color="text.secondary">
                                        Sol: {photo.sol}
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        Earth Date: {photo.earth_date}
                                    </Typography>
                                    <Typography variant="subtitle2" fontWeight="bold">
                                        Camera: {photo.camera.full_name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Rover: {photo.rover.name}
                                    </Typography>
                                    
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div> */}
            {/* <div style={{ backgroundColor: 'white', padding: 0 }}><Pagination count={5} variant="outlined" shape="rounded" color="primary" /></div> */}
            <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '10px' }}>
                <Pagination
                    //count={Math.ceil(marsRoverPhotos.length / pageSize)} // Total number of pages
                    count={5}
                    variant="outlined"
                    shape="rounded"
                    color="primary"
                    page={currentPage}
                    onChange={handlePageChange}
                    sx={{
                        "& .MuiPaginationItem-root": {  // Target all pagination buttons
                            backgroundColor: "white",  // Button background color
                            color: "black",                // Change button text color
                            "&:hover": {                   // Style on hover
                                backgroundColor: "black",
                                color: "white",
                                borderColor: 'white',
                                fontWeight: "bold"
                            },
                            "&:active": {                  // Style on active button
                                backgroundColor: "black",
                                color: "white",
                                fontWeight: "bold"
                            },
                        },
                    }}
                />
            </div>
        </div>

    )
}

export default MarsRoverPhotos;