import { useEffect, useState } from "react";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import WebNavbar from "./WebNavbar";
import AppNavBar from "./AppNavBar";

const Container = styled.div`
list-style-type: none;
overflow: hidden;
display:flex;
justify-content:center;
`;


const Navbar = () => {
    const[isMobile, setIsMobile] = useState(true)

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
        }, 300)
        return () => clearInterval(interval)
    }) 

    return(
        <Container>
            {isMobile ?
                <WebNavbar function={windowDown} />
            : 
                <AppNavBar function={windowDown} />
            }
        </Container>
    );
}
  
export default Navbar;