import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const Sidebar = ({ isOpen }) => {
    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                marginTop: '60px',
                right: isOpen ? '0' : '-100%', // Completely off-screen when closed
                width: '300px',
                height: '100vh', // Adjusted to full viewport height
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Dark background
                padding: '20px',
                transition: 'right 0.3s ease', // Smooth transition
                overflowY: 'auto', // Enable scrolling if content exceeds height
                zIndex: 999, // Ensure sidebar appears above other elements
                color: 'white',
            }}
        >
            <h2>The Image Name</h2>
            <div className="sidebar-content">
                <p>Description</p>
                <p>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
                </p>
            </div>
        </div>
    )
}

export default Sidebar;