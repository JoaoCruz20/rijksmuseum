import React from "react";
import styled from "styled-components";
import Form from "./form";
import Location from "./location";

const Container = styled.div`
display:flex;
height:300px;
border-style: solid;
`;

const FirstBody = styled.li`
display:flex;
flex-direction: column;
justify-content:flex-start;
padding: 40px;

a {    
    color: #acacacff;
    padding: 10px 10px 10px 10px;
    font-size: 18px;
    font-family: "Pkmn", Times, serif;
 }
`;

const SecondBody = styled.li`
display: flex;
flex-direction: column;
justify-content: flex-start;
padding: 40px;

a {    
     color: #acacacff;
     padding: 10px 10px 10px 10px;
     font-size: 18px;
     font-family: "Pkmn", Times, serif;
  }
`;

const ThirdBody = styled.div`
width:100%;
display: flex;
float:right;
justify-content: flex-end;
padding: 70px 20px 0 0;

p {    
  color: white;
  padding: 10px 10px 10px 10px;
  font-size: 15px;
  font-family: "Pkmn", Times, serif;
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
                  <a>Form</a>
                  <Form />               
           </FirstBody>
           <SeperationBar />
           <SecondBody>        
               <Location />      
           </SecondBody>
           <ThirdBody>
                <a>Socials</a>
                <a>Small Links</a>        
           </ThirdBody>
    </Container>    
    );
  }
  
  export default Footer;