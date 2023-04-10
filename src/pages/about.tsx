import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from "styled-components";
import Museum from '../assets/images/rijkmuseum.png';
import '../assets/fonts/Rijksmuseum-Normal.woff2';

const Information = styled.div`
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
border-style: solid;
font-family: "Rijksmuseum-Normal", Times, serif;
margin: 0 4% 4% 4%;
padding: 0 7% 0 7%;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
div {
    margin: 0 10%;    
    p{
        font-size: 18px;
    }
}
img {
    width:80%;
    height:80%;
    margin: 2% 10%;
    border: solid;
}
`;

const About = () => {
    return (
        <div>
            <Navbar />
            <Information>
                <div>
                    <h1>Rijksmuseum</h1>
                    <p>The Rijksmuseum was founded in The Hague on 19 November 1798 and moved to Amsterdam in 1808</p>
                    <p>The collection of the Rijksmuseum was built over a period of 200 years and did not originate from a royal collection incorporated into a national museum. Its origins were modest, with its collection fitting into five rooms at in Huis ten Bosch palace in The Hague. Although the seventeenth century was beginning to be recognized as the key period in Dutch art, the museum did not then hold paintings by Frans Hals, Rembrandt, Jan Steen, Johannes Vermeer, or Jacob van Ruisdael. The collection was built up by purchase and donation. Napoleon had carried off the stadholder's collection to Paris; the paintings were returned to The Netherlands in 1815 but housed in the Mauritshuis in The Hague rather than the Rijksmuseum. With the founding of the Rijksmuseum in 1885, holdings from other entities were brought together to establish the Rijksmuseum's major collections.</p>
                </div>
                <img src={Museum} alt="Rijkmuseum"/>
            </Information>
            <Footer />
        </div>
    );
  }
  
  export default About;