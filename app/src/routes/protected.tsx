import React from 'react'
import {Navigate, useLocation} from "react-router-dom"
import useAuthStore from '../store/authentication';

interface ProtectedProps {
    children: any, 
}

const ProtectedRoute: React.FC<ProtectedProps> = (props) => {

    let location = useLocation();

    const { currentUser } = useAuthStore((state) => ({
        currentUser: state.user,
    }));

    if(!currentUser) {
        return <Navigate to="/signin" state={{ from: location}} replace />
    }
 
   return props.children;

};

export default ProtectedRoute;