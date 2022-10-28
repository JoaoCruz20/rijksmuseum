import React from "react";
import styled from "styled-components";
import Form from "./form";
import Location from "./location";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import '../assets/fonts/Rijksmuseum-Bold.woff2';

const Container = styled.div`
display:flex;
flex-direction:row;
flex-wrap: wrap;
border-style: solid;
margin: 0 4% 1% 4%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const FirstBody = styled.li`
display:flex;
flex-direction: column;
justify-content:flex-start;
padding: 40px 10% 40px 10%;

h1 {    
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 10px 10px 10px;
    font-family: "Rijksmuseum-Bold", Times, serif;
 }
`;

const SecondBody = styled.li`
display: flex;
padding: 40px;
a {    
     color: #acacacff;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Rijksmuseum-Normal", Times, serif;
  }
`;


const SeperationBar = styled.div`
border-style: solid;
border-radius: 3px;
margin: 20px 0 20px 0;
`;


const Footer = () => {
    return (    
     <Container>
           <FirstBody>         
                  <h1>Get To Know Us Everyday</h1>
                  <Form />               
           </FirstBody>
           <SeperationBar />
           <SecondBody>        
               <Location />      
           </SecondBody>
    </Container>    
    );
  }
  
  export default Footer;