import React from "react";
import { Link } from "react-router-dom";
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

button {    
     padding: 20px 10px 7px 10px;
     font-size: 25px;
     font-family: "Rijksmuseum-Normal", Times, serif;
     text-decoration: none;
      

  &:hover {
      color: #3CA0E7;
      cursor: pointer;
  }
  }

h1 {
    margin: 10px 10px 10px 10px;
    font-size: 40px;
    font-family: "Rijksmuseum-Normal", Times, serif;

    &:hover {
        transform: scale(1.05)
    }
}

  li button {
    color: black;
  }

  li button:hover {
    color: #d80032;
    cursor: pointer;
  }

  li:hover {
    cursor: pointer;
  }

`;

const LinkCss = {
    textDecoration: "none",
}

const Navbar = () => {

    const windowDown = (e:any) => {
       let text = e?.target?.textContent
       if(text === "Contact" && text !== undefined){
            window.scroll({top:3000, left:0, behavior: "smooth"})
       } else if (text === "Work" && text !== undefined){
            window.scroll({top:1600, left:0, behavior: "smooth"})
       }
    }

    return(

        <Container>
            <li><Link to="/rijksmuseum" style={LinkCss}><button>Home</button></Link></li>
            <li><Link to="/" style={LinkCss}><button onClick={(e)=> windowDown(e)}>Work</button></Link></li>
            <li>
                <div>
                    <h1>Rijksmuseum</h1>
                </div>
            </li>
            <li><Link to="/about" style={LinkCss}><button>About</button></Link></li>
            <li><Link to="/" style={LinkCss}><button onClick={(e)=> windowDown(e)}>Contact</button></Link></li>
        </Container>
    );
}
  
export default Navbar;