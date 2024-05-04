import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/authContext/authContext';

function ProtectedRoutes({ children }) {
    const { currentUser } = useAuth();

    if (!currentUser) {
        return <Navigate to={"/SignIn"} replace />
    } else {
        return children;
    }
}

export default ProtectedRoutes;