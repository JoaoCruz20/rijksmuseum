import { count } from "console";
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';

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

`;

const CarImage = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;


const Carousel= () => {

    const apiKey = 'XmkBt1Tj';
    let cnt = 0;
    
    const facetsWithImage = 8588;
    let page = 1000 // cannot exceed 10000
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&imgonly=true&p=`;

    const [myArray, setMyArray] = useState<any| null>([]);
    const [myObj, setMyObj] = useState({});
    const [finalImage, setFinalImage] =useState<string | any>('')

    const Randomizer = (page: number) => {
      const resultpage = (Math.random() * page);
      let result = Math.round(resultpage);
      return result;
    }
    
    const getMyData = async (url:string, pageresults:number) => {  
        const finalurl = url + pageresults;

        const response = await fetch(finalurl)
        const data = await response.json()
        const urls = data?.artObjects?.map((r:any) => r.webImage.url) 
        
        setMyArray(urls)
        setMyObj(data)    
    }    

    useEffect(() => {
     const pageresults = Randomizer(page);
      getMyData(url,pageresults);
    }, []);

    const timer = setInterval(() => setFinalImage(countImages(myArray)), 10000);

    const countImages = (array: Array<string>) =>{              
           let imageNumb = Math.round(Math.random() * array.length);
           let Image = array[imageNumb];
           cnt++;
            if(cnt === 4){
                clearInterval(timer);
                cnt = 0;
            }
           return Image;        
    }    


    return (    
     <Container>
        <h1>Some of the Art</h1>        
        <CarImage style={{backgroundImage:`url('${finalImage}')`}} />
     </Container>
    );
}

export default Carousel;