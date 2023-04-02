import React, {useEffect, useState} from "react";
import styled from "styled-components";

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

const Profile = (params:any) => {


    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${process.env.REACT_APP_API_KEY}&involvedMaker=${params}&title=${params}`;

    const [myArray, setMyArray] = useState([]);
    const [myObj, setMyObj] = useState({});

    const getMyData = async (url:string) => {
        const response = await fetch(url)
        const data = await response.json()
        const names = data?.artObjects?.map((r:any) => r.title) 

        setMyArray(names)
        setMyObj(data)
    }

    useEffect(() => {
        getMyData(url);
    }, []);
    

    return (
        <Container>
           <h1></h1>
        </Container>        
    );

}

export default Profile;