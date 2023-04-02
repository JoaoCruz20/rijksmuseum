import React, {useState} from "react";
import Navbar from "../components/navbar";
import Search from "../components/searchEngine";
import IntroCard from "../components/introCard";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

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