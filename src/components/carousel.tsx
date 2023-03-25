/* eslint-disable @typescript-eslint/no-unused-vars */
import React ,{useEffect, useState} from "react";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import fetcher from "../backend/fetcher";
import globalApi from "../global";
import Randomizer from "../backend/randomizer";

const Container = styled.div`
display:flex;
height:900px;
border-style: solid;
margin: 0 4% 2% 4%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
overflow: hidden;
position: relative;

h1 {
    margin-left: 5%;
    position:absolute;
    top:0;
    left:0;
}

span {
  font-size: 16px;
}

`;

const CarImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


const countImages = (array: Array<any>) =>{            
  let imageNumb = Math.round(Math.random() * array.length);
  let Image = array[imageNumb];
  return Image;        
}  


const Carousel = () => {

    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${globalApi}&format=json&imgonly=true&p=`;
    let [finalImage, setFinalImage] = useState(``)
    
    const getMyData = async (url:string, pageresults:number) => {  
        let finalurl = url + pageresults;
        let data = await fetcher(finalurl);
        let urls = data?.artObjects?.map((r:any) => r.webImage.url)          
        let image = countImages(urls);
        setFinalImage(image);       
    }  
    
    useEffect(() => {
      setInterval(() => {
        getMyData(url,Randomizer(1000));
    }, 100000)
      });    


    return (    
     <Container>
        <h1>Some of the Art <span>New one every 100s</span></h1>              
        <CarImage style={{backgroundImage:`url(${finalImage})`}} />
     </Container>
    );
}

export default Carousel;