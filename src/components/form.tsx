import React from "react";
import styled from "styled-components";


const Container = styled.div`
display:flex;
background
`;

const Form = () => {
    return (    
     <Container>        
            <label htmlFor="Name">Name</label>
            <input type="text" id="Name" name="Name" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <input type="submit" value="Submit" />
     </Container>
    );
}

export default Form;