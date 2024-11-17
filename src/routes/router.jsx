import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import Error from "../pages/Error";


const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: "/",
                element: <h2>This is home components</h2>
            },
        ]
    },
]);

export default router;