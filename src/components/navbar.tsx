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
    border-left: 2px solid #000000;
    margin: 20px 5px 15px 5px;
    border-style: solid;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    

    &:last-child {
        border-right: 2px solid #000000;
    }

    div {
        border-style: 2px solid #000000;
    }
}

a {    
     padding: 20px 10px 10px 10px;
     font-size: 25px;
     font-family: "Rijksmuseum-Normal", Times, serif;
      text-decoration: none;
      

  &:hover {
      color: #3CA0E7;
  }
  }

h1 {
    margin: 10px 10px 10px 10px;
    font-size: 40px;
    font-family: "Rijksmuseum-Normal", Times, serif;
}

  li a {
    color: black;
  }

  li a:hover {
    color: #d80032;
  }

  li:hover {
    cursor: pointer;
  }

`;

const Navbar = () => {

    return(
        <Container>
    <li><a href="#">Home</a></li>
    <li><a href="#">Work</a></li>
    <li>
        <div>
            <h1>Rijksmuseum</h1>
        </div>
    </li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
        </Container>
    );
}
  
export default Navbar;