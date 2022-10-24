import React, {useEffect, useState} from "react";
import styled from "styled-components";
import '../assets/fonts/Rijksmuseum-Normal.woff2';

const Container = styled.div`
display:flex;
justify-content: center;
height:500px;
border-style: solid;
margin: 0 4% 2% 4%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
div {
  padding: 5% 0 0 0;
  flex-direction:column;
}

p {
  display:flex;
  justify-content: center;
}

`;

const ButtonContainer = styled.div`
display:flex;
justify-content: center;
`;

const SubmitButton = styled.button`
display:flex;
flex-direction: column;
font-family: "Rijksmuseum-Normal", sans-serif;
font-size: 16px;
letter-spacing: 2px;
text-decoration: none;
text-transform: uppercase;
color: #000;
cursor: pointer;
border: 3px solid;
margin: 0 15% 0 15%;
padding: 5px 10px 5px 10px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;

&:hover {
box-shadow: 0px 0px 0px 0px;
top: 5px;
left: 5px;
}
`;

const IntroCard = () => {

    const apiKey = 'XmkBt1Tj';
    const facetsWithImage = 8588;
    let page = 1000 // cannot exceed 10000
    const url = `https://www.rijksmuseum.nl/api/nl/collection?key=${apiKey}&imgonly=true&p=`;

    const [myArray, setMyArray] = useState([]);
    const [myObj, setMyObj] = useState({});

    const Randomizer = (page: number) => {
      const resultpage = (Math.random() * page);
      let result = Math.round(resultpage);
      return result;
    }
    
    const getMyData = async (url:string, pageresults:number) => {  
        const finalurl = url + pageresults;

        const response = await fetch(finalurl)
        const data = await response.json()
        const urls = data?.artObjects?.map((r:any) => r.webImage.url) 
        
        setMyArray(urls)
        setMyObj(data)    
    }    

    useEffect(() => {
     const pageresults = Randomizer(page);
      setTimeout(getMyData,3000)
      getMyData(url,pageresults);  
           
    }, []);

    const Image = myArray[0];

    return (    
     <Container style={{backgroundImage:`url('${Image}')`}}>
        <div>
        <h1>Welcome to the Rijksmuseum</h1>
        <ButtonContainer>
        <SubmitButton>Get to Know us</SubmitButton>
        </ButtonContainer>
       </div>
     </Container>
    );
}

export default IntroCard;