import React, {useEffect, useState} from "react";
import apiCall from "../components/apiCall";
import Navbar from "../components/navbar";
import Search from "../components/searchEngine";
import IntroCard from "../components/introCard";
import Carousel from "../components/carousel";
import Footer from "../components/footer";

const Home = () => {

    const url = 'https://pokeapi.co/api/v2/type';

    const [myArray, setMyArray] = useState([])
    
    const getMyData = async (url:string) => {
        const response = await fetch(url)
        const data = await response.json()
        const names = data.results.map((r:any) => r.name) // extracting 'name' prop into array of names

        setMyArray(names)
    }

    useEffect(() => {
        getMyData(url);
    }, []);
   
    return (
        <div>
            <Navbar />
            <IntroCard />
            <Search />
            <h1>get Data</h1>
            {myArray.map((value,index) => (
                <li key={`${index}-${value}`}>{value}</li>
            ))}
            <Carousel />
            <Footer />
        </div>
    );
  }
  
  export default Home;