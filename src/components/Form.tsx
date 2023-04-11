import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';
import { useReducer } from "react";

const Container = styled.div`
width:100%;
`;

const InputContainer = styled.form`
display:flex;
flex-direction: row;
justify-content:center;
flex-wrap: wrap;
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

function reducer(state:any, action:any){
  if(action.type === "set_name"){
    return {
      name: action.nextName,
      email: state.email
    }
  } else if (action.type === "set_email"){
    return {
      name: state.name,
      email: action.nextEmail
    }
  } else {
    throw new Error("Reducer error");
  }
}

const Form = () => {
 const [state, dispatch] = useReducer(reducer, {name: "", email: ""}) 

  const onSubmit= () => {
    if(state.name !== "" && state.email !== ""){
      window.location.href = `mailto:info@rijksmuseum.nl?subject=${state?.name}'s NewsLetter&body=message%20goes%20here`
    }else {
      window.location.href = `mailto:info@rijksmuseum.nl?subject=Subject&body=message%20goes%20here`
    }    
  }

    return (    
     <Container>  
        <InputContainer onSubmit={onSubmit}>    
            <input value={state?.name} placeholder="Name" onChange={(e)=> dispatch({type: 'set_name', nextName: e.target.value})} type="text" id="Name" name="Name" />            
            <input value={state?.email} placeholder="Email" onChange={(e)=> dispatch({type: 'set_email', nextEmail: e.target.value})} type="email" id="email" name="email" />
        </InputContainer>  
        <ButtonContainer>
            <SubmitButton onClick= {()=> onSubmit()}>Submit</SubmitButton>
        </ButtonContainer>
     </Container>
    );
}

export default Form;