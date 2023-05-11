import { Key, memo, useEffect, useState} from "react";
import styled from "styled-components";
import fetcher from "../backend/fetcher";

const SuggestedSearchContainer = styled.div`
display:flex;
margin: 20px;
flex-wrap: wrap;
justify-content:center;
padding: 0 25%;
`;

const SuggestedSearchButton = styled.button`
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

const Suggestions = (props: {url:string, search:Function}) => {
    const [myArray, setMyArray] = useState<string[]>([]);

    const firstDataFetcher = async (url:string) => {
        let data = await fetcher(url, "call")
        const names: string[] = data?.artObjects?.map((r:{principalOrFirstMaker:string}) => r?.principalOrFirstMaker)
        setMyArray(names)
    }  

    useEffect(() => {
        firstDataFetcher(props.url);
    }, [props.url]);

    const SuggestedSearch = memo(function SuggestedSearch({value, search ,index}:any) {
        return <SuggestedSearchButton type="button" onClick={(e) => search(e)} key={`${index}-${value}`}>{value}</SuggestedSearchButton>
    })

    return(
         <SuggestedSearchContainer>            
             {myArray?.map((value:string,index:Key | undefined) => (
               <SuggestedSearch value={value} index={index} search={props.search} />
            ))}         
        </SuggestedSearchContainer>
    )
};
export default Suggestions;