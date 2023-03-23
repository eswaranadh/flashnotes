import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Navbar from './Navbar';

const PrivateRoute = ({ path, element: Element }) => {

  return (
    <Route path={path} element={<Element />} />
  );
};

export default PrivateRoute;
