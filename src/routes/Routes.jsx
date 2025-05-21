import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import NotFound from '../components/NotFound/404';
import Home from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ContactPage from '../pages/ContactPage';
import PropertyListingPage from '../pages/PropertyListingsPage';
import AboutPage from '../pages/AboutPage';
import DashboardPage from '../pages/DashboardPage';

const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/register',
        element: <RegisterPage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
      {
        path: '/properties',
        element: <PropertyListingPage />,
      },
      // The about page is not yet implemented but is included in the routes.
      {
        path: '/about',
        element: <AboutPage />,
      },
      {
        path: '/dashboard',
        element: <DashboardPage />,
      },
      {
        path: '*',
        element: <NotFound />, // Catch-all route for undefined paths
      },
    ],
  },
]);

export default routes;
