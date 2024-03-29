/* eslint-disable jsx-a11y/alt-text */
import { Key, useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
display:flex;
flex-direction:row;
border-style: solid;
margin: 1% 4% 2% 4%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
h1{
    display:flex;
    justify-content: center;
}
`;

const FullContainer = styled.div`
display:flex;
flex-direction:row;
justify-content: center;
`;

const ImageContainer = styled.img`
display:flex;
justify-content: center;
width:60%;
border-style: solid;
margin: 1% 1% 2% 1%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
object-fit: cover;
`;

const DataContainer = styled.div`
display:flex;
flex-direction:column;
width:50%;
border-style: solid;
margin: 1% 1% 2% 1%;
padding: 2%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
object-fit: cover;
`;

const MobileContainer = styled.div`
display:flex;
flex-direction:column;
flex-wrap:
width:50%;
border-style: solid;
margin: 1% 1% 2% 1%;
padding: 2%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
object-fit: cover;
`;

const MobileDataContainer = styled.div`
display:flex;
flex-direction:column;
width:90%;
border-style: solid;
margin: 1% 1% 2% 1%;
padding: 2%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
object-fit: cover;
`;

const MobileImageContainer = styled.img`
display:flex;
justify-content: center;
width:95%;
border-style: solid;
margin: 1% 1% 5% 1%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
object-fit: cover;
`;

const SearchPage = () => {
    const location = useLocation().state;  
    const [isMobile, setIsMobile] = useState(true)

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

    return (
        <Container>
            {isMobile ? 
            <FullContainer>
                <ImageContainer src={location?.data?.webImage?.url} alt="Image" /> 
                <DataContainer>
                    <h2>Title: {location?.data?.title}</h2>
                    <h2>Principal Maker: {location?.data?.principalOrFirstMaker}</h2>
                    {location?.data?.productionPlaces.map((value:any,index:Key) => (
                    <h2 key={index}>{value}</h2>
                        ))}
                    <h3>Rijksmuseum Object Number: {location?.data?.objectNumber}</h3>
                    <h3>Long Title: {location?.data?.longTitle}</h3>
                </DataContainer>
            </FullContainer> 
            :       
            <MobileContainer>
                <MobileImageContainer src={location?.data?.webImage?.url} alt="Image" />
                <MobileDataContainer>
                    <h2>Title: {location?.data?.title}</h2>
                    <h2>Principal Maker: {location?.data?.principalOrFirstMaker}</h2>
                    {location?.data?.productionPlaces.map((value:any,index:Key) => (
                    <h2 key={index}>{value}</h2>
                        ))}
                    <h3>Rijksmuseum Object Number: {location?.data?.objectNumber}</h3>
                    <h3>Long Title: {location?.data?.longTitle}</h3>
                </MobileDataContainer> 
            </MobileContainer> }          
        </Container>     
    );
  }
  
  export default SearchPage;