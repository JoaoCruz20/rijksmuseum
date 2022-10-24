import React from "react";
import styled from "styled-components";


const Container = styled.div`
display:flex;
height:500px;
border-style: solid;
margin: 0 4% 2% 4%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

const Search = () => {
    return (    
     <Container>        
        <h1>Search engine</h1>
     </Container>
    );
}

export default Search;