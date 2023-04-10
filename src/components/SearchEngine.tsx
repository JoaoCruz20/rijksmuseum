/* eslint-disable no-restricted-globals */
import React, { Key, useEffect, useState} from "react";
import styled from "styled-components";
import fetcher from "../backend/fetcher";
import { Link } from "react-router-dom";
import { resolve } from "path";

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

const SearchInputContainer = styled.form`
display:flex;
justify-content: center;
    input {
    padding: 7px 40px 7px 40px;
    margin: 0 2% 0 0;
    font-size: 16px;
    letter-spacing: 2px;
    text-decoration: none;
    color: #000;
    border: 3px solid;
    box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
    }
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
margin:10px 0 0 0;
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

const SearchResults = styled.div`
margin: 2% 0 2% 0;
display: flex;
justify-content:center;
flex-direction:column;
`;

const ReceivedSearch = styled.div`
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
    h2{
        margin:2%;

    }
    a {
        color: black;
        padding: 3% 0.2%;
        text-decoration: none;
        &:hover {
            transform: scale(1.05)
            color: blue;
            text-decoration: underline;
        }
    }
`;

const InfoBlock = styled.div`
flex-direction: row;
display:flex;
`

const NoResults = styled.div`
content: "No Results";
`;

const SuggestionResults = styled.div`
display:flex;
flex-wrap: wrap;
justify-content:center;
button{
    width: 265px;
    padding: 7px 40px 7px 7px;
    font-size: 16px;
    background-color: white;
    text-align:left;
    &:hover {
        transform: scale(1.05);
        text-decoration: underline;
    }
}
`

    const url:string = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&toppieces=true`
    const makerurl:string = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}`;

const Search = () => {
    const [myArray, setMyArray] = useState<string[]>();
    const [suggestions, setSuggestions] = useState<string[]>([]);      
    const [search, setSearch] = useState<string>('');
    const [completedSearch, setCompletedSearch] = useState<boolean>(true);
    const [isReceived, setIsReceived] = useState<boolean>(false);
    const [researchData, setResearchData] = useState<any>();
    
    const firstDataFetcher = async (url:string) => {
        let data = await fetcher(url, "call")
        // if anoniem do not repeat, make logic about that
        const names: string[] = data?.artObjects?.map((r:{principalOrFirstMaker:string}) => r?.principalOrFirstMaker)
        setMyArray(names)
    }  

    const resultDataFetcher = async (url:string, param:string) =>{
        let makerurl:string = url + `&involvedMaker=${param}`
        let data = await fetcher(makerurl, "call")
        if(data.count === 0){
            let titleurl:string = url + `&title=${param}`
            let data = await fetcher(titleurl, "call")
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

    const Search = (e:any) => {
      let search:string = e.target.textContent;
      searchParams(search)    
    }

    const textSearch = (search:string) => {
        searchParams(search)    
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>): void => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        textSearch(search)
    };

    useEffect(() => {
        firstDataFetcher(url);
    }, []);

    useEffect(()=> {
        if(search !== ""){       
        let timeout = setTimeout(()=> {
          let data = fetcher(`https://www.rijksmuseum.nl/api/nl/collection?key=XmkBt1Tj&involvedMaker&q=${search}`, "search")
            data.then((data) => {
            let bucket:string[] = []
            setSuggestions(bucket)
             for(let i = 0; i < 10; i++){
                if(data?.facets[0]?.facets[i] != null || data?.facets[0]?.facets[i] !== undefined){
                    bucket[i] = data?.facets[0]?.facets[i].key
                }
              } 
                setSuggestions(bucket)                
           })
        }, 500)
        return () => clearTimeout(timeout)
    }
    }, [search])

    console.log(researchData)

    return (    
     <Container>        
        <h1>Search Engine</h1>
        <SearchInputContainer onSubmit={handleSubmit}>    
            <input placeholder="Search" value={search} onChange={(e)=> handleChange(e)}/>           
        </SearchInputContainer>
        {search ? suggestions.map((result:string, index: Key| undefined) => {
            return (
            <SuggestionResults key={`div-${index}`} role="button" placeholder="Button to product">
                <button key={`button-${index}`} onClick={(e)=> Search(e)}>{result}</button>
            </SuggestionResults>
        )}) : ""}
        <ButtonContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonContainer>
       {completedSearch ? <SuggestedSearchContainer>            
            {myArray?.map((value:string,index:Key | undefined) => (
                <SuggestedSearch type="button" onClick={(e) => Search(e)} key={`${index}-${value}`}>{value}</SuggestedSearch>
            ))}            
        </SuggestedSearchContainer> : 
        <SearchResults>               
                    <h3>Count: {researchData?.count}</h3>
            {isReceived ? <ReceivedSearch>
                {researchData?.artObjects?.map((value: any,index: Key | null | undefined) => (
                    <InfoBlock>
                        <h2 key={index}>{value?.title}</h2>
                        <Link to={{
                            pathname:"/search",
                            hash: `${index}`
                        }} state={{
                            data: value
                        }}>
                             Info&rarr;</Link>
                    </InfoBlock>
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