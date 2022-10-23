import React, {useEffect, useState} from "react";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';

const Container = styled.ul`
height: 100px;
margin: 0% 1% 1% 1%;
list-style-type: none;
overflow: hidden;
display:flex;
justify-content:center;


li {
    display: inline-flex;
    justify-content: flex-start;
}

a {    
     padding: 20px 10px 10px 10px;
     font-size: 25px;
     font-family: "Rijksmuseum-Normal", Times, serif;
  }

h1 {
    margin: 10px 10px 10px 10px;
    font-size: 40px;
    font-family: "Rijksmuseum-Normal", Times, serif;
}
`;

const Navbar = () => {

    return(
        <Container>
            <li><a href="http://localhost:3000/">Home</a></li>
            <li><a href="http://localhost:3000/pokedex">Pokedex</a></li>
            <li><h1>Rijksmuseum</h1></li>
            <li><a href="http://localhost:3000/games">Games</a></li>
            <li><a href="http://localhost:3000/about-me">About Me</a></li>
        </Container>
    );
}
  
export default Navbar;