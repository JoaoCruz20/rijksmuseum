import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileContainer = styled.div` 
margin: 0 0 10% 0;
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 100%;
h1 {
    display: flex;
    justify-content: center;
    margin: 10px 5px;
    color: black;
}
div{
    margin: 0;
}
`;

const HambuguerDisplay = styled.div` 
display: flex;
justify-content: center;
width: 100%;
padding: 4% 0 0 0;
li{
    border-style: solid;
    box-shadow: none;
    margin: 0 7px 0 7px;
    text-decoration: underline; 
    a{
        font-size: 20px;
        font-family: "Rijksmuseum-Normal", Times, serif;
        background-color: white;
        border: none;
        &:hover {
            color: black;
            background: white;
            opacity: 0.1;
            transition: opacity .25s ease-in-out;
            -moz-transition: opacity .25s ease-in-out;
            -webkit-transition: opacity .25s ease-in-out;
           }
        &:active {
            color: black;
            background: white;
            opacity: 0.1;
            transition: opacity .25s ease-in-out;
            -moz-transition: opacity .25s ease-in-out;
            -webkit-transition: opacity .25s ease-in-out;
           }
    }
    button {    
        padding: 10px;
        font-size: 22px;
        font-family: "Rijksmuseum-Normal", Times, serif;
        background-color: white;
        border: none;
        &:hover {
            color: black;
            background: white;
            opacity: 0.1;
            transition: opacity .25s ease-in-out;
            -moz-transition: opacity .25s ease-in-out;
            -webkit-transition: opacity .25s ease-in-out;
           }
       &:active {
        color: black;
        background: white;
        opacity: 0.1;
        transition: opacity .25s ease-in-out;
        -moz-transition: opacity .25s ease-in-out;
        -webkit-transition: opacity .25s ease-in-out;
       }
   }
}
`;

const LinkCss = {
    textDecoration: "none",
}

const AppNavBar = (props: any) => {
return (
    <MobileContainer>
        <div>
            <Link to="/rijksmuseum" style={LinkCss}><h1>Rijksmuseum</h1></Link>
        </div>                                      
        <HambuguerDisplay>
            <li><button style={LinkCss} onClick={(e) => props.function(e)}>Work</button></li>
            <li><Link to="/about" style={LinkCss}><button>About</button></Link></li>
            <li><button style={LinkCss} onClick={(e) => props.function(e)}>Contact</button></li>
        </HambuguerDisplay>                     
    </MobileContainer>
    )
};
export default AppNavBar;