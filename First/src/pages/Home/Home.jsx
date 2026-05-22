import Banner from "./Banner";
import Nabvar from "../../layout/Nabvar";
import Products from "./Products";


const Home = () => {
    return (
        <div>
            <Nabvar></Nabvar>
            <Banner></Banner>
            <Products></Products>
            <h1>Home Page</h1>
        </div>
    );
};

export default Home;