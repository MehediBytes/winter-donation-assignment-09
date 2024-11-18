import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/ErrorPage";
import Donation from "../pages/Donation";
import Home from "../pages/Home";
import Help from "../pages/Help";
import Dashboadr from "../pages/Dashboard";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";
import DonationDetails from "../pages/DonationDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../donation.json"),
            },
            {
                path: "/donation",
                element: <Donation></Donation>,
                loader: () => fetch("../donation.json"),
            },
            {
                path: "/help",
                element: <Help></Help>
            },
            {
                path: "/dashboard",
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
            },
            {
                path: "/donation/:id",
                element: <PrivateRoute><DonationDetails></DonationDetails></PrivateRoute>,
                loader: () => fetch('../donation.json'),
            },
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>,
            }
        ]
    },

]);

export default router;