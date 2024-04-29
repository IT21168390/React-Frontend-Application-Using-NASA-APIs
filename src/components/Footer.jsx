import React from 'react'
import Button from '@mui/material/Button';

const Footer = ({ toggleSidebar }) => {
    return (
        <div
            style={{
                position: 'absolute',
                bottom: 0,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
                backgroundImage: 'linear-gradient(to top, rgba(0, 0, 0, 0.5), transparent)', // Dark gradient background
                color: 'white',
                zIndex: 1000, // Ensure footer appears above sidebar
            }}
        >
            {/* Footer Text */}
            <div style={{margin: '20px', paddingLeft: '10%'}}>
                <h2>The Image Name</h2>
                <h1>APOD</h1>
            </div>
            {/* Info Icon */}
            <div style={{margin: '20px', paddingRight: '10%'}}>
                <Button onClick={toggleSidebar}>
                    <i className="fa-solid fa-circle-info fa-flip fa-xl"></i>
                </Button>
            </div>
        </div>
    )
}

export default Footer;