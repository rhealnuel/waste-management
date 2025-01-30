import Hero from "../components/Hero";
import Features from "../components/Features";
import Whatwill from "../components/Whatwill";
import Search from "../components/Search";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div className=" overflow-x-hidden">
            <Hero/>
            <Features/>
            <Whatwill/>
            <Search/>
        </div>
            
     );
}
 
export default Home;