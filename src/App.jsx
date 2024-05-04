import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import EPIC from './components/EPIC';
import SignUp from './components/Authentication/SignUp';
import SignIn from './components/Authentication/SignIn';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import NaturalEventsTracker from './components/NaturalEventsTracker';
import MarsRoverPhotos from './components/MarsRoverPhotos';
import { AuthProvider } from './contexts/authContext/authContext';
import ProtectedRoutes from './components/Authentication/ProtectedRoutes';

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <ResponsiveAppBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/eonet' element={<NaturalEventsTracker />} />
            <Route path='/epic' element={<ProtectedRoutes><EPIC /></ProtectedRoutes>} />
            <Route path='/mars' element={<ProtectedRoutes><MarsRoverPhotos /></ProtectedRoutes>} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/signin' element={<SignIn />} />
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
