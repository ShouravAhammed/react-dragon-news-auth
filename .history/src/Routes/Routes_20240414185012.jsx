import Root from "../layout/Root";

import {
    createBrowserRouter,
  } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NewsPage from "../pages/NewsPage/NewsPage";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {

                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {

                path: '/about',
                element: <About></About>,
            },
            {

                path: '/career',
                element: <Career></Career>,
            },
            {

                path: '/login',
                element: <Login></Login>,
            },
            {

                path: '/register',
                element: <Register></Register>,
            },
            {

                path: '/news/:_id',
                element: <PrivateRoutes><NewsPage></NewsPage></PrivateRoutes>,
            },
            
        ]
    }
])

export default router;