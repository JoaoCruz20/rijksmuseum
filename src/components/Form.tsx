import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';


const Container = styled.div`
display:flex;
flex-direction: column;
width:100%;
`;

const InputContainer = styled.div`
display:flex;
flex-direction: row;

input {
  display:flex;
  margin: 0 2% 3% 0;
  padding: 5px;
  font-size: 16px;
  letter-spacing: 2px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  border: 3px solid;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
}
`;

const ButtonContainer = styled.div`
display:flex;
flex-direction: row;

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
  
  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
    }

`;

const Form = () => {

  const Nothing = (e:any) => {
    console.log("nothing")
  }

    return (    
     <Container>  
        <InputContainer>    
            <input value="Name" onChange={(e)=>Nothing(e)} type="text" id="Name" name="Name" />            
            <input value="Email" onChange={(e)=>Nothing(e)} type="email" id="email" name="email" />
        </InputContainer>  
            <ButtonContainer>
                	<SubmitButton>Submit</SubmitButton>
            </ButtonContainer>
     </Container>
    );
}

export default Form;