import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import SignUp from './auth/SignUp';
import Login from './auth/Login';
import { AuthProvider } from './context/AuthContext';
import Dashboard from './components/Pages/Profile';
import PrivateRoute from './components/PrivateRoute';
import ForgotPassword from './auth/ForgotPassword';
import Profile from './components/Pages/Profile';



const router = createBrowserRouter([
  {
    path: '/estudiaJovenIngSoftware/signup' , element: <SignUp />,
  },
  {
    path: '/estudiaJovenIngSoftware/login' , element: <Login/>
  },
  {
    path: '/estudiaJovenIngSoftware/profile' , element: <PrivateRoute><Dashboard/></PrivateRoute>
  },
  {
    path: '/estudiaJovenIngSoftware/reset-password' , element: <ForgotPassword/>
  },
  {
    path: '/estudiaJovenIngSoftware/dashboard' , element: <PrivateRoute><Profile/></PrivateRoute>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  <AuthProvider>
    <>
      <RouterProvider router={router} />
    </>
  </AuthProvider>

);
