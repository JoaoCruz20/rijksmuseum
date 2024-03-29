import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import Randomizer from "../backend/randomizer";

const Container = styled.header`
display:flex;
justify-content: center;
height:500px;
border-style: solid;
margin: 0 4% 2% 4%;
overflow:hidden;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
div {
  padding: 5% 0 0 0;
  flex-direction:column;
  justify-content: center;
  h1{
    display:flex;
    justify-content: center;
  }
}
p {
  display:flex;
  justify-content: center;
}
`;

const ButtonContainer = styled.div`
display:flex;
justify-content: center;
a{
  display:flex;
  flex-direction: column;
  font-family: "Rijksmuseum-Normal", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background-color: #d80032;
  cursor: pointer;
  border: 3px solid;
  margin: 0 15% 0 15%;
  padding: 5px 10px 5px 10px;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }  
}
`;

const LinkStyle = {
  textDecoration:"none",
  color: "black"
}

const fetcher = async (finalurl:string) => { 
  const response = await fetch(finalurl)
  const data = await response.json()
  return data?.artObjects[0].webImage.url
}

const IntroCard = () => {
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&imgonly=true&p=`;
    const [Image, setImage] = useState("");
    const [isMobile, setIsMobile] = useState(true);    
    
    const getMyData = async (url:string, pageresults:number) => {  
        const image = await fetcher(url + pageresults)
        setImage(image)
    }

    useEffect(() => {
      getMyData(url,Randomizer(1000));            
    }, [url]);

    useEffect(()=> {
      let interval = setInterval(() =>{
          if(window.innerWidth < 881){
              setIsMobile(false)
          } else {
              setIsMobile(true)
          }
      }, 500)
      return () => clearInterval(interval)
  })

    return (    
     <Container style={{backgroundImage:`url('${Image}')`}}>
      <div>
        {isMobile ? 
        <h1>Welcome to the Rijksmuseum</h1>
        : <h1>Welcome to<br></br> to the Rijksmuseum</h1>}
        <ButtonContainer>
          <Link to="/about" style={LinkStyle}>Get to Know us</Link>
        </ButtonContainer>
      </div>
     </Container>
    );
}

export default IntroCard;