import React from "react";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Bold.woff2';

const Container = styled.div`
display:flex;
h2 {
    text-align: center;
    text-decoration: underline;
    font-family: "Rijksmuseum-Bold", Times, serif;
}
`;

const Form = () => {
    return (    
     <Container>        
                <h2>Museumstraat 1, Amsterdam</h2>                  
     </Container>
    );
}
export default Form;