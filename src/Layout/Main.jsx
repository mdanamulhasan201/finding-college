import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../pages/Shared/Navbar/Navbar";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation()
    // console.log(location)
    const headerFooterHide = location.pathname.includes('signUp')
    const headerFooterHides = location.pathname.includes('login')
    return (
        <div>
           {headerFooterHide || headerFooterHides ||  <Navbar></Navbar>}
            <Outlet></Outlet>
           {headerFooterHide || headerFooterHides ||  <Footer></Footer>}
        </div>
    );
};

export default Main;