import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import SatelliteAltIcon from '@mui/icons-material/SatelliteAlt';
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { MenuList } from '@mui/material';
import { useAuth } from '../contexts/authContext/authContext';
import { doSignOut } from '../firebase/Auth';

const pages = ['Home', 'signin', 'SignUp'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const navigate = useNavigate();

    const { userLoggedIn, currentUser } = useAuth();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        // <AppBar position="static">
        <div style={{ paddingBottom: 0 }}>
            <AppBar position='static' style={{ backgroundColor: 'black' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <SatelliteAltIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}

                        //onClick={() => navigate('/')}
                        >
                            NASA APIs
                        </Typography>

                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu} component={Link} to={`/${page.toLowerCase().replace(/\s+/g, '-')}`}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <SatelliteAltIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            NASA APIs
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {/* {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{ my: 2, color: 'white', display: 'block' }}
                                    component={Link}
                                    to={page === 'Home' ? '/' : `/${page.toLowerCase().replace(/\s+/g, '-')}`}
                                >
                                    {page}
                                </Button>
                            ))} */}
                        </Box>

                        <Typography marginRight={'10px'}>{currentUser ? `Hi, ${currentUser.email}` : 'Explore the Universe!'}</Typography>
                        <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                {/* <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton> */}
                                <AccountCircleIcon onClick={handleOpenUserMenu} sx={{ p: 0, fontSize: '40px' }} />
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {/* {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))} */}
                                {userLoggedIn ? <MenuList>
                                    <MenuItem onClick={() => { doSignOut().then(() => { navigate('/SignIn') }) }}>
                                        <Typography textAlign="center">Log Out</Typography>
                                    </MenuItem></MenuList>
                                    :
                                    <MenuList>
                                        <MenuItem onClick={() => { navigate('/SignIn') }}>
                                            <Typography textAlign="center">Log In</Typography>
                                        </MenuItem>
                                        <MenuItem onClick={() => { navigate('/SignUp') }}>
                                            <Typography textAlign="center">Register</Typography>
                                        </MenuItem>
                                    </MenuList>
                                }
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </div>
    );
}
export default ResponsiveAppBar;