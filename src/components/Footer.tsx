/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Form from "./Form";
import Location from "./Location";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import '../assets/fonts/Rijksmuseum-Bold.woff2';
import { useEffect, useState } from "react";

const Container = styled.footer`
display:flex;
flex-direction:column;
justify-content:center;
flex-wrap: wrap;
border-style: solid;
margin: 0 4% 1% 4%;
padding: 0 7% 0 7%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const FirstBody = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
margin: 2% 2% 1% 2%;

h1 {    
    display:flex;
    justify-content:center;
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 10px 0px 10px;
    font-family: "Rijksmuseum-Bold", Times, serif;
 }

 h4 {    
  display:flex;
  justify-content:center;
  letter-spacing: 2px;
  text-decoration: none;
  padding: 0px 10px 0px 10px;
  font-family: "Rijksmuseum-Bold", Times, serif;
}
`;

const SecondBody = styled.div` 
display: flex;
justify-content:flex-end;
justify-content:center;
margin: 1% 2% 1% 2%;
a {    
     color: #acacacff;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Rijksmuseum-Normal", Times, serif;
  }
`;



const Footer = () => {
  const [isMobile, setIsMobile] = useState(true); 

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
     <Container>
      {isMobile ?
           <FirstBody>         
                  <h1>Get To Know Us Everyday</h1>
                  <h4>Subscribe to our Newsletter</h4>
                  <Form />               
           </FirstBody>
           : <FirstBody>
              <h4>Subscribe to our Newsletter</h4>
              <Form /> 
           </FirstBody> }      
           {isMobile ? 
           <SecondBody>        
               <Location />      
           </SecondBody>
           :
           <SecondBody>        
              <Location />      
           </SecondBody>}
    </Container>    
    );
  }
  
  export default Footer;