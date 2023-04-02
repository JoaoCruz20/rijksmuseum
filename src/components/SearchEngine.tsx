/* eslint-disable no-restricted-globals */
import React, { Key, useEffect, useState} from "react";
import styled from "styled-components";
import fetcher from "../backend/fetcher";
import { Link } from "react-router-dom";

const Container = styled.div`
display:flex;
flex-direction:column;
border-style: solid;
margin: 0 4% 2% 4%;
padding: 10% 25% 10% 25%;
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

    &:hover{
       transform: scale(1.1)
    }

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

const SearchResults = styled.div`
margin: 2% 0 2% 0;
`;

const ReceivedSearch = styled.div`
    height: 100%;
    display: flex;
    justify-content:center;
    flex-direction:column;

    h2{
        margin:2%;
    }

`;

const NoResults = styled.div`
content: "No Results";
`;

    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&toppieces=true`
    const makerurl = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}`;

const Search = () => {

    const [myArray, setMyArray] = useState([]);    
    const [search, setSearch] = useState('');
    const [completedSearch, setCompletedSearch] = useState(true);
    const [isReceived, setIsReceived] = useState(false);
    const [researchData, setResearchData] = useState<any>();
    
    const firstDataFetcher = async (url:string) => {
        let data = await fetcher(url)
        // if anoniem do not repeat, make logic about that
        const names = data?.artObjects?.map((r:any) => r.principalOrFirstMaker)
        setMyArray(names)
        console.log(data)
    }  

    const resultDataFetcher = async (url:string, param:string) =>{
        let makerurl = url + `&involvedMaker=${param}`
        let data = await fetcher(makerurl)
        if(data.count === 0){
            let titleurl = url + `&title=${param}`
            let data = await fetcher(titleurl)
            if(data.count === 0){
                setIsReceived(false);
                return null
            }
        } 
        return data
    }

    const searchParams = (param:string) => {
        if(param && param !== undefined && param !== null){
            setCompletedSearch(false)
            setIsReceived(true);
           let data = resultDataFetcher(makerurl, param);
           data.then((data)=> setResearchData(data))
        }    
    }

    const buttonSearch = (e:any) => {
      let search = e.target.textContent;
      searchParams(search)    
    }

    const textSearch = (search:string) => {
        console.log(search)
        searchParams(search)    
    }

    useEffect(() => {
        firstDataFetcher(url);
    }, []);

    const handleChange = (e:any) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        console.log(search)
    };


    return (    
     <Container>        
        <h1>Search Engine</h1>
        <SearchInputContainer>
            <form onSubmit={handleSubmit}>
            <SearchInput value={search} onChange={(e)=> handleChange(e)}/>
            </form>
        </SearchInputContainer>
        <ButtonContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonContainer>
       {completedSearch ? <SuggestedSearchContainer>            
            {myArray?.map((value,index) => (
                <SuggestedSearch type="button" onClick={(e) => buttonSearch(e)} key={`${index}-${value}`}>{value}</SuggestedSearch>
            ))}            
        </SuggestedSearchContainer> : 
        <SearchResults>               
                    <h3>Count: {researchData?.count}</h3>
            {isReceived ? <ReceivedSearch>
                {researchData?.artObjects?.map((value: any,index: Key | null | undefined) => (
                        <>
                        <h2 key={index}>{value?.title}</h2>
                        <Link to={{
                            pathname:"/search",
                            hash: `${index}`
                        }} state={{
                            data: value
                        }}>
                            Link</Link>
                        </>
            ))} 
            </ReceivedSearch> :
             <NoResults>
                <h1>Not Received</h1>
             </NoResults> }
        </SearchResults> }    
     </Container>
    );
}

export default Search;