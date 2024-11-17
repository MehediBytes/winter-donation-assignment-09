import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/ErrorPage";
import Donation from "../pages/Donation";
import Home from "../pages/Home";
import Help from "../pages/Help";
import Dashboadr from "../pages/Dashboard";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch("../donation.json")
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/help",
                element: <Help></Help>
            },
            {
                path: "/dashboard",
                element: <Dashboard></Dashboard>,
            }
        ]
    },
    
]);

export default router;