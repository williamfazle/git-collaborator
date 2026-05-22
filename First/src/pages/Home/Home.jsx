import Banner from "./Banner";
import CategoryShowcase from "./CategoryShowcase";
import FeatureStrip from "./FeatureStrip";
import Products from "./Products";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <FeatureStrip></FeatureStrip>
            <CategoryShowcase></CategoryShowcase>
            <Products></Products>
        </div>
    );
};

export default Home;
