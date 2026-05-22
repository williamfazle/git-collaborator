import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer";


const Rootlayout = () => {
    return (
        <div>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Rootlayout;