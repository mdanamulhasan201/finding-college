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
import Colleges from "../pages/Colleges/Colleges";
import Admission from "../pages/Admission/Admission";
import MyAdmissionAdd from "../pages/Admission/MyAdmissionAdd";
import MyCollege from "../pages/MyCollege/MyCollege";


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
                loader: ({ params }) => fetch(`https://college-booking-server-ruby.vercel.app/collegeDetails/${params._id}`)
            },
            {
                path: 'admissionDetails/:_id',
                element: <MyAdmissionAdd></MyAdmissionAdd>,
                loader: ({ params }) => fetch(`https://college-booking-server-ruby.vercel.app/collegeDetails/${params._id}`)
            },
            {
                path: 'colleges',
                element: <Colleges></Colleges>
            },

            {
                path: 'admission',
                element: <PrivateRoutes><Admission></Admission></PrivateRoutes>
            },
            {
                path: 'myCollege',
                element: <PrivateRoutes><MyCollege></MyCollege></PrivateRoutes>
            }
        ],

    },

    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
    },


]);
