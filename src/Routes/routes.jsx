import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Dashboard from "../Admin/Dashboard";
import SignUp from "../pages/SignUp/SignUp";
import Login from "../pages/Login/Login";
import PrivateRoutes from "./PrivateRoutes";
import CollegeDetails from "../pages/CollegeDetails/CollegeDetails";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },

            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'viewDetails/:_id',
                element: <PrivateRoutes> <CollegeDetails></CollegeDetails> </PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/collegeDetails/${params._id}`)
            }
        ],

    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },


]);
