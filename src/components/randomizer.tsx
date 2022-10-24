import React, {useEffect, useState} from "react";

interface RandomImage {

}

const RandomImage = () => {
const apiKey = 'XmkBt1Tj';
let page = 1000 ;
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
    console.log(urls)
    console.log(myObj)      
}    

useEffect(() => {
 const pageresults = Randomizer(page);
  setTimeout(getMyData,3000)
  getMyData(url,pageresults);      
}, []);


const Image = myArray[0];
return Image;
};

export default RandomImage;