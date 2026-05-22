import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import Nabvar from "../shared/Nabvar";


const Rootlayout = () => {
    return (
        <div className="min-h-screen bg-base-100">
            <Nabvar></Nabvar>   
            <Outlet/>
            <Footer></Footer>
        </div>
    );
};

export default Rootlayout;
