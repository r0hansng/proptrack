import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import NotFound from "../components/NotFound/NotFound";
import Home from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ContactPage from "../pages/ContactPage";
import PropertyListingPage from "../pages/PropertyListingsPage";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/login",
                element: <LoginPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/contact",
                element: <ContactPage />,
            },
            {
                path: "/properties",
                element: <PropertyListingPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ]
    }
])

export default routes