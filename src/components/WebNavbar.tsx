import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.ul`
display:flex;
li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-left: 2px solid #000000;
    margin: 20px 7px 15px 7px;
    border-style: solid;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    &:last-child {
        border-right: 2px solid #000000;
    }
    &:hover {
        cursor: pointer;
    }
    div {
        border-style: 2px solid #000000;
    }
}
button {    
     padding: 20px;
     font-size: 25px;
     font-family: "Rijksmuseum-Normal", Times, serif;
     background-color: white;
     border: none;
    &:hover {
      color: #3CA0E7;
      cursor: pointer;
    }
}
a {    
    color: black;
    padding: 20px;
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
`;

const LinkCss = {
    textDecoration: "none",
}

const WebNavBar = (props: any) => {
return (
    <Container>
        <li><Link to="/rijksmuseum" style={LinkCss}>Home</Link></li>
        <li><button style={LinkCss} onClick={(e) => props.function(e)}>Work</button></li>
        <li>
            <div>
                <h1>Rijksmuseum</h1>
            </div>
        </li>
        <li><Link to="/about" style={LinkCss}>About</Link></li>
        <li><button style={LinkCss} onClick={(e) => props.function(e)}>Contact</button></li>
    </Container>
    )
};
export default WebNavBar;