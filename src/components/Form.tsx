import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import { useState } from "react";

const Container = styled.div`
width:100%;
`;

const InputContainer = styled.form`
display:flex;
flex-direction: row;
justify-content:center;

input {
  display:flex;
  margin: 0 2% 3% 0;
  padding: 5px;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  color: #000;
  border: 3px solid;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
}
`;

const ButtonContainer = styled.div`
display:flex;
flex-direction: row;
justify-content:center;
`;

const SubmitButton = styled.button`
  font-family: "Rijksmuseum-Normal", sans-serif;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  background-color: #d80032;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
  position: relative;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;  
  
  &:active {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
  }  

`;

const Form = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const Nothing = (e:any) => {
    console.log("nothing")
  }

  const handleName = (e:any) => {
    setName(e.target.value)
  }

  const handleEmail = (e:any) => {
    setEmail(e.target.value)
  }

  const onSubmit= (e:any) => {
    e.preventDefault()
  }

    return (    
     <Container>  
        <InputContainer onSubmit={onSubmit}>    
            <input value={name} placeholder="Name" onChange={(e)=> handleName(e)} type="text" id="Name" name="Name" />            
            <input value={email} placeholder="Email" onChange={(e)=> handleEmail(e)} type="email" id="email" name="email" />
        </InputContainer>  
        <ButtonContainer>
            <SubmitButton onClick= {(e)=> onSubmit(e)}>Submit</SubmitButton>
        </ButtonContainer>
     </Container>
    );
}

export default Form;