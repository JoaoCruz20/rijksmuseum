import React from "react";
import styled from "styled-components";
import Facebook from '../assets/icons/facebook.png';
import Instagram from '../assets/icons/instagram.png';
import Twitter from '../assets/icons/twitter.png';
import '../assets/fonts/Rijksmuseum-Bold.woff2';

const Container = styled.div`
display:flex;
justify-content:center;

img {
    margin: 0.5%;
}
`;

const Socials = () => {
    return (    
     <Container>
         <img src={Instagram} alt="Girl in a jacket" width="25" height="30" />
         <img src={Twitter} alt="Girl in a jacket" width="25" height="30" />
    </Container>    
    );
  }

  export default Socials;