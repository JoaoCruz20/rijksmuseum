import Navbar from "../components/Navbar";
import Search from "../components/SearchEngine";
import IntroCard from "../components/IntroCard";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

const Home = () => {
    
    return (
        <div>
            <Navbar />
            <IntroCard />
            <Search />            
            <Carousel />
            <Footer />
        </div> 
    );
  }
  
  export default Home;