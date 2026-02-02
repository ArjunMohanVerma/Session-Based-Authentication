import React from 'react'
import {Navigate} from "react-router-dom";
import {useContext} from "react";
import { AuthContext } from "../context/authContext.jsx";

const ProtectedRoutes = ({children}) => {
   const { user, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;

  return user ? children : <Navigate to="/" />;
}

export default ProtectedRoutes;
