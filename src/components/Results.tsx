import { Key} from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SearchResults = styled.div`
margin: 2% 4% 2% 4%;
display: flex;
justify-content:center;
flex-direction:column;
`;

const ReceivedSearch = styled.div`
height: 100%;
display: flex;
flex-direction: column;
flex-wrap: wrap;
`;
const InfoBlock = styled.div`
display:flex;
h2{
    text-align: left;
}
div{
margin: auto;
float: right;
}
a {
    font-size: 20px;
    color: black;
    text-decoration: none;
    &:hover {
        transform: scale(1.05);
        color: blue;
        text-decoration: underline;
    }
}

`
const NoResults = styled.div`
content: "No Results";
`;

const Results = (props: any) => {
return(
    <SearchResults>               
            <h3>Count: {props?.data?.count}</h3>
            {props?.received ? <ReceivedSearch>
                {props?.data?.artObjects?.map((value: any,index: Key | null | undefined) => (
                    <InfoBlock>
                        <h2 key={index}>{value?.title}</h2>
                            <div>
                                <Link to={{
                                    pathname:"/search",
                                    hash: `${index}`
                                }} state={{
                                    data: value
                                }}>
                                    Info&rarr;</Link>
                            </div>
                    </InfoBlock>
            ))} 
        </ReceivedSearch> :
        <NoResults>
            <h1>Not Received</h1>
        </NoResults> }
    </SearchResults> 
    )
};
export default Results;