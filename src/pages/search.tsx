/* eslint-disable jsx-a11y/alt-text */
import React, { Key, useState } from "react";
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
width:60%;
border-style: solid;
margin: 1% 1% 2% 1%;
padding: 2%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
object-fit: cover;
`;

const SearchPage = () => {
    const location = useLocation().state;    
    return (
        <Container>
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
        </Container>     
    );
  }
  
  export default SearchPage;