/* eslint-disable no-restricted-globals */
import React, { Key, useEffect, useState} from "react";
import styled from "styled-components";
import fetcher from "../backend/fetcher";
import Suggestions from "./Suggestions";
import Results from "./Results";

const Container = styled.div`
display:flex;
flex-direction:column;
border-style: solid;
margin: 0 4% 2% 4%;
padding: 0 0 2% 0;
justify-content: center;
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
justify-content:center;
margin: 10px 0 0 0;
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

const SuggestionsContainer = styled.div`
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

const SuggestionResultsMobile = styled(SuggestionResults)`
width: 265px;
button{
    width: 350px;
}
`

const ResultsContainer = styled.div`
display:flex;
justify-content:center;
`

const url:string = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&toppieces=true`
const makerurl:string = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}`;

const Search = () => {
    const [suggestions, setSuggestions] = useState<string[]>([]);      
    const [search, setSearch] = useState<string>('');
    const [completedSearch, setCompletedSearch] = useState<boolean>(true);
    const [isReceived, setIsReceived] = useState<boolean>(false);
    const [researchData, setResearchData] = useState<any>();
    const [isMobile, setIsMobile] = useState(true);   

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
      setSearch("")
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

    useEffect(()=> {
        let interval = setInterval(() =>{
            if(window.innerWidth < 881){
                setIsMobile(false)
            } else {
                setIsMobile(true)
            }
        }, 500)
        return () => clearInterval(interval)
    })

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
        }, 300)
        return () => clearTimeout(timeout)
    }
    }, [search])

    return (    
     <Container>
        {isMobile ? <h1>Search Engine</h1> : <h1>Search</h1>}        
        <SearchInputContainer onSubmit={handleSubmit}>    
            <input placeholder="Search" value={search} onChange={(e)=> handleChange(e)}/>           
        </SearchInputContainer>
        <SuggestionsContainer>
        {search ? suggestions.map((result:string, index: Key| undefined) => {
            return (
            <div>
            {isMobile ? 
                <SuggestionResults key={`div-${index}`} role="button" placeholder="Button to product">
                    <button key={`button-${index}`} onClick={(e)=> Search(e)}>{result}</button>
                </SuggestionResults>
             :  
                <SuggestionResultsMobile key={`div-${index}`} role="button" placeholder="Button to product">
                    <button key={`button-${index}`} onClick={(e)=> Search(e)}>{result}</button>
                </SuggestionResultsMobile> 
            }
            </div>
        )}) : ""}
        </SuggestionsContainer>
        <ButtonContainer>
            <SubmitButton type="submit" onClick={handleSubmit}>Submit</SubmitButton>
        </ButtonContainer>   
        {completedSearch ? <div>
        {isMobile ? 
        <Suggestions url={url} search={Search} /> 
        : "" }
        </div>         
        : 
        <ResultsContainer>
            <Results data={researchData} received={isReceived} />
        </ResultsContainer> }
     </Container>
    );
}

export default Search;