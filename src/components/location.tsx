import React from "react";
import styled from "styled-components";
import Location from '../assets/icons/location.png';
import '../assets/fonts/Rijksmuseum-Bold.woff2';


const Container = styled.div`
display:flex;
flex-direction: row;
margin: 0 0 0 30%;
border: 5px solid;
padding:10px;

h1 {
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 10px 10px 10px;
    font-family: "Rijksmuseum-Bold", Times, serif;
}
`;

const Form = () => {
    return (    
     <Container>        
                <h1>Museumstraat 1,<br /> Amsterdam</h1>                  
     </Container>
    );
}

export default Form;