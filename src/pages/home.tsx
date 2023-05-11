import Navbar from "../components/Navbar";
import IntroCard from "../components/IntroCard";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import Search from "../components/SearchEngine";
import { lazy } from "react";

//const Search = lazy(() => delayForDemo(import("../components/SearchEngine")))

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

/* function delayForDemo(promise:any) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    }).then(() => promise);
} */

export default Home;