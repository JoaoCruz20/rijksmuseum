/* eslint-disable no-restricted-globals */
import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Profile from "../pages/profile";

const Container = styled.div`
display:flex;
flex-direction:column;
border-style: solid;
margin: 0 4% 2% 4%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;

h1{
    display:flex;
    justify-content: center;
}
`;

const SearchInputContainer = styled.div`
display:flex;
justify-content: center;
`;

const SearchInput = styled.input`
padding: 10px 40px 10px 40px;
margin: 0 2% 3% 0;
font-size: 16px;
letter-spacing: 2px;
text-decoration: none;
text-transform: uppercase;
color: #000;
border: 3px solid;
box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;

`;

const SuggestedSearchContainer = styled.div`
display:flex;
margin: 40px;
flex-wrap: wrap;
justify-content:center;

`;

const SuggestedSearch = styled.button`

    border-radius: 10px;
    border: 2px solid #000;
    padding :20px;
    background-color: #000;
    color: #ffffff;
    margin:5px;

`;

const ButtonContainer = styled.div`
display:flex;
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

  &:hover {
    box-shadow: 0px 0px 0px 0px;
    top: 5px;
    left: 5px;
    }
`;

const Search = () => {

    const apiKey = 'XmkBt1Tj';
    const facetsWithImage = 8588;
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&toppieces=true`;

    const [myArray, setMyArray] = useState([]);
    const [myObj, setMyObj] = useState({});
    const [search, setSearch] = useState('');
    
    const getMyData = async (url:string) => {
        const response = await fetch(url)
        const data = await response.json()
        const names = data?.artObjects?.map((r:any) => r.title) 

        setMyArray(names)
        setMyObj(data)
        console.log(myObj)
    }

    const SearchParams = (param:any) => {
        console.log(param)
        return <Profile></Profile>;
    }

    const ButtonSearch = (e:any) => {
        console.log(e.target.value)
    }

    useEffect(() => {
        getMyData(url);
    }, []);


    return (    
     <Container>        
        <h1>Search engine</h1>
        <SearchInputContainer>
            <SearchInput value={search} onChange={(e) => setSearch(e.target.value)}/>
        </SearchInputContainer>
        <ButtonContainer>
            <SubmitButton  onClick={() => SearchParams(search)}>Submit</SubmitButton>
        </ButtonContainer>
        <SuggestedSearchContainer>            
            {myArray?.map((value,index) => (
                <SuggestedSearch type="button" onClick={(e) => ButtonSearch(e)} key={`${index}-${value}`}>{value}</SuggestedSearch>
            ))}            
        </SuggestedSearchContainer>
     </Container>
    );
}

export default Search;