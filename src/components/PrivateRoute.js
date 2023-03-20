import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';
import Navbar from './Navbar';

const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route {...rest} element={<>
      <Navbar />
      <Component />
    </>} />
  );
};

export default PrivateRoute;
