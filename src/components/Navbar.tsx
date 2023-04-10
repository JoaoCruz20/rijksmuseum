import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import Menu from '../assets/icons/burger-menu.svg';
import IconArrow from '../assets/icons/icon-arrow.svg';

const Container = styled.ul`
margin: 0% 1% 1% 1%;
list-style-type: none;
overflow: hidden;
display:flex;
justify-content:center;

li {
    display: flex;
    flex-direction: column;
    justify-content: center;
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

    
  button {
    color: black;
    &:hover {
        color: #d80032;
        cursor: pointer;
      }
  }

 a {
    color: black;
    &:hover {
        color: #d80032;
        cursor: pointer;
      }
  } 
}

button {    
     padding: 20px 10px 7px 10px;
     font-size: 25px;
     font-family: "Rijksmuseum-Normal", Times, serif;
     text-decoration: none;
     background-color: white;
     border: none;
    &:hover {
      color: #3CA0E7;
      cursor: pointer;
    }
  }

  a {    
    padding: 20px 10px 7px 10px;
    font-size: 25px;
    font-family: "Rijksmuseum-Normal", Times, serif;
    background-color: white;
    border: none;
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

  li:hover {
    cursor: pointer;
  } 

`;

const MobileContainer = styled.div` 
margin: 0 0 4% 0;
display: flex;
justify-content: flex-start;
width: 100%;
height: 100%;

button {
    border-radius: 5px;
    color: black;
    margin: 0 7px 0 7px; 
}

h1{
    margin: 10px 30px 10px 10px
}

img{
    height: 40px;
    width: 40px;
}
`;

const HambuguerDisplay = styled.div` 
display: flex;
justify-content: center;
width: 100%;

button {
    margin: 0 7px 0 7px; 
}

img {
    height: 40px;
    width: 40px;
    transform: rotate(180deg);
}

li{
    border: none;
    box-shadow: none;
    margin: 0 7px 0 7px;
    text-decoration: underline; 

    &:last-child {
        border-right: none;
    }

    a{
        margin: 0;
        padding: 0;
    }

    button {
        background-color: white;
        border: none;
        text-align: center;
        text-decoration: underline; 
    }
}
`;


const LinkCss = {
    textDecoration: "none",
}

const Navbar = () => {
    const[isMobile, setIsMobile] = useState(true)
    const[buttonClicked, setButtonClicked] = useState(true)

    const windowDown = (e:any) => {
       let text = e?.target?.textContent
       if(text === "Contact" && text !== undefined){
            window.scroll({top:3000, left:0, behavior: "smooth"})
       } else if (text === "Work" && text !== undefined){
            window.scroll({top:1600, left:0, behavior: "smooth"})
       } else {
            throw new Error("Scroll Error")
       }
    }

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

    return(
        <Container>
            {isMobile ?
            <>
            <li><Link to="/rijksmuseum" style={LinkCss}>Home</Link></li>
            <li><button style={LinkCss} onClick={(e) => windowDown(e)}>Work</button></li>
            <li>
                <div>
                    <h1>Rijksmuseum</h1>
                </div>
            </li>
            <li><Link to="/about" style={LinkCss}>About</Link></li>
            <li><button style={LinkCss} onClick={(e) => windowDown(e)}>Contact</button></li>
            </>
            : 
            <MobileContainer>
                    <div>
                        <h1>Rijksmuseum</h1>
                    </div>
                    <div>
                        {buttonClicked ?
                         <button onClick={() => setButtonClicked(false)}><img alt="MobileMenu" src={Menu}/></button>
                          : 
                            <HambuguerDisplay>
                                <button onClick={() => setButtonClicked(true)}><img alt="MobileMenu" src={IconArrow}></img></button>
                                <li><button style={LinkCss} onClick={(e) => windowDown(e)}>Work</button></li>
                                <li><Link to="/about" style={LinkCss}><button>About</button></Link></li>
                                <li><button style={LinkCss} onClick={(e) => windowDown(e)}>Contact</button></li>
                            </HambuguerDisplay>
                          }                    
                    </div>                
            </MobileContainer>
            }
        </Container>
    );
}
  
export default Navbar;