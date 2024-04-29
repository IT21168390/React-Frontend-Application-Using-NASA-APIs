// import React from 'react';
// import { doSignInWithEmailAndPassword } from '../../firebase/Auth';
// import { useAuth } from '../../contexts/authContext/authContext';

// function SignIn() {
//   const { userLoggedIn } = useAuth();
//   return (
//     <div>SignIn</div>
//   )
// }

// export default SignIn;


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { doSignInWithEmailAndPassword } from '../../firebase/Auth';
import { useAuth } from '../../contexts/authContext/authContext';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://github.com/IT21168390">
        Hashan Madhuwantha
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignIn() {
  const { currentUser, userLoggedIn, loading } = useAuth();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = useState('');

  const [isSignIn, setIsSignIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    if (!isSignIn) {
      //setIsSignIn(true);
      doSignInWithEmailAndPassword(data.get('email'), data.get('password'))
        .then((response) => {
          setIsSignIn(true);
        })
        .catch((error) => {
          console.log(error);
          alert('Invalid Login!');
        })
    }
  };

  return (
    // <ThemeProvider theme={defaultTheme}>
    //   <Container component="main" maxWidth="xs">
    //     <CssBaseline />
    //     <Box
    //       sx={{
    //         marginTop: 8,
    //         display: 'flex',
    //         flexDirection: 'column',
    //         alignItems: 'center',
    //       }}
    //     >
    <ThemeProvider theme={defaultTheme}>
      {userLoggedIn && (<Navigate to={'/'} replace={true} />)}
      <Grid container sx={{ minHeight: '100vh' }}> {/* Set min height for full viewport */}
        <Grid container justifyContent="center" alignItems="center" sx={{ backgroundColor: '#212121', minHeight: '100vh' }}> {/* Outer container with dark background */}
          <Container component="main" maxWidth="sm" sx={{ backgroundColor: 'transparent', padding: '32px' }}> {/* Inner container for form with transparent background */}
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: 'white',
                padding: '30px',
                borderRadius: '50px'
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2, backgroundColor: 'black', fontWeight: 'bold' }}
                >
                  Sign In
                </Button>
                <Grid item textAlign={'center'}>
                  <Link href="/SignUp" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}