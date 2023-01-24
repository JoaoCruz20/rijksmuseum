/* eslint-disable react-hooks/exhaustive-deps */
import styled from "styled-components";
import Form from "./form";
import Location from "./location";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import '../assets/fonts/Rijksmuseum-Bold.woff2';

const Container = styled.div`
display:flex;
flex-direction:row;
justify-content:space-between;
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
margin: 2% 2% 2% 2%;
padding: 0 0 1% 0;

h1 {    
    letter-spacing: 2px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 10px 10px 10px;
    font-family: "Rijksmuseum-Bold", Times, serif;
 }
`;

const SecondBody = styled.div` 
display: flex;
justify-content:flex-end;
justify-content:center;
margin: 2%;
a {    
     color: #acacacff;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Rijksmuseum-Normal", Times, serif;
  }
`;

const Footer = () => {
    return (    
     <Container>
           <FirstBody>         
                  <h1>Get To Know Us Everyday</h1>
                  <Form />               
           </FirstBody>      
           <SecondBody>        
               <Location />      
           </SecondBody>
    </Container>    
    );
  }
  
  export default Footer;