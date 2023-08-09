import styled from "styled-components";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Style = styled.div``;

const Text = styled.div`
  text-align: justify;
  margin: 16px auto !important;
  @media screen and (min-width: 721px) and (max-width: 834px) {
    margin: 24px auto !important;
    font-size: 1.3em;
    margin: 16px 24px;
  }
  @media screen and (max-width: 720px)  {
    margin: 24px auto !important;
    font-size: 1em;
    margin: 24px 32px;
  }
`;

const TestimContainer = styled.div`
  width: 95vw;
  display: block;
  margin: 8px auto 40px auto;
`;

const PhotoContainer = styled.div`
  width: 40%;

  display: inline-block;

  & > div {
    width: 100%;

    & > img {
      width: 100%;
    }
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    display: none;
  }
  @media screen and (max-width: 720px)  {
    display: none;
  }
`;
const ContentContainer = styled.div`
  width: 60%;

  display: inline-block;

  & > div {
    margin: 0 auto;
    width: 80%;
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    width: 100%;
  }
  @media screen and (max-width: 720px)  {
    width: 100%;
  }
`;
const CarouselStyle = styled.div`
  width: 55% !important;
  .thumb {
    border: 3px solid #cca352;
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    width: 70% !important;
  }
  @media screen and (max-width: 720px)  {
    width: 80% !important;
  }
`;

const Testimonials = () => {
  const mePath = [
    "6.webp",
    "7.webp",
  ]
  const imagePaths = [
    "9.webp",
    "10.webp",
    "11.webp",
    "12.webp",
    "13.webp",
    "1.webp",
    "2.webp",
    "3.webp",
    "4.webp",
    "5.webp",
  ];

  return (
    <Style id="testimonials">
      <NavBar />
      <TestimContainer>
        <PhotoContainer>
          <div id="pic1">
            <img src={`/media/testimonials/${mePath[0]}`} alt="Foto Simone" />
          </div>
          <div id="pic2">
            <img src={`/media/testimonials/${mePath[1]}`} alt="Foto Simone" />
          </div>
        </PhotoContainer>
        <ContentContainer>
          <Text className="textBox">
            <p>
              Cada feedback que recebemos é inspirador e muito importante, pois
              com a sua avaliação podemos medir nosso nível de qualidade, e
              melhor, com isso você nos motiva a melhorar em todos os aspectos.
            </p>
            <p>
              É com muita alegria que compartilhamos aqui, algumas de nossas
              avaliações e feedbacks, esperamos em breve ver a sua por aqui
              também!
              <br />
              <br />
              Compartilhe sua experiência conosco{" "}
              <a
                href="https://g.page/studiosimoneserafim-google/review?gm"
                target="_blank"
                rel="noreferrer"
              >
                <u>clicando aqui</u>
              </a>
              .
            </p>
          </Text>
          <CarouselStyle>
            <Carousel
              className="photoBox"
              showArrows={true}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={true}
              showThumbs={true}
              swipeable={true}
            >
              {imagePaths.map((imagePath, index) => (
                <img src={`/media/testimonials/${imagePath}`} alt={`Depoimento ${index + 1}`} key={index} loading={index >= 1 ? "lazy" : "eager"} />
              ))}
            </Carousel>
          </CarouselStyle>
        </ContentContainer>
      </TestimContainer>
      <Footer />
    </Style>
  );
};

export default Testimonials;
