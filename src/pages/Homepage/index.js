import styled from "styled-components";

import { CarouselHead } from "../../components/CarouselHead/carousel";

import NavBar from "../../components/NavBar";
import AboutUs from "../../components/AboutUs";
import FormHandler from "../../components/Contact";
import Footer from "../../components/Footer";

const Text = styled.div`
  font-style: italic;

  font-size: 24px;
  text-align: center;

  padding-top: 40px;

  @media screen and (max-width:834px){
  margin: 12px 24px 8px 24px;
  font-size: 16px;
  text-align: center;
  padding: 16px 0;

  &>h2{
    font-smooth: antialiased;
  }
}
`;

export const Homepage = () => (
  <>
    <NavBar />
    <div id="index"></div>
    <CarouselHead />
    <Text>
      <h2>
        Responsabilidade e compromisso com a sua realização!
      </h2>
    </Text>
    <AboutUs />
    <FormHandler />
    <Footer />
  </>
);

export default Homepage;
