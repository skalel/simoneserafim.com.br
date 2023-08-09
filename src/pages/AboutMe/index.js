import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const Style = styled.div`

  * {
    box-sizing: border-box;
  }
  #aboutMe {
    margin: 8px 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    margin-top: 8px;

    & h2 {
      text-align: center;
    }
  }
  .pageDivisor {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;

    & + .pageDivisor {
      margin-top: 8px;
    }
  }
  #mapWrapper {
    margin: 0 auto;
    width: 96%;
    height: 80vh;
    position: relative;

    display: block;

    * {
      background-color: transparent;
      color: black;
    }
  }
  #companyArea {
    display: inline-flex;
    justify-content: space-evenly;
  }
  h2 {
    text-align: center;
    margin: 24px 8px;
  }
  #VertSobreMim {
    display: none;
  }
  .pageDivisor.mosaicProps {
    & .imageContainer {
      width: 60%;
      & img {
        width: 100%;
        padding-right: 8px;
      }
    }
  }
  @media screen and (max-width: 720px)  {
    margin:8px;
    #aboutMe {
      display: block;
      margin-top: -220px;
      padding-top: 220px;
    }
    .pageDivisor {
      flex-direction: column-reverse;
    }
    #HorizSobreMim {
      width: 100%;
    }
    .pageDivisor.mosaicProps {
      max-width: 100%;
      & .imageContainer {
        width: 100%;

        margin: auto auto;
        & img {
          width: 100%;
        }
      }
    }
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    margin:8px;
    #HorizSobreMim {
      width: 100%;
    }
    .pageDivisor {
      flex-direction: column-reverse;
    }
    .mosaicProps {
      margin-right: 0px;
    }
    .pageDivisor.mosaicProps {
      width: 100%;
      flex-direction: column;
      & .imageContainer {
        width: 95%;
        margin: 16px 24px;
      }
      & .imageContainer > img {
        width: 100%;
        max-width:400px;
      }
    }
  }
`;

const CarouselSobreMim = styled.div`
  width: 40%;
  margin-bottom: 8px;

  position: relative;

  .carousel-root {
    margin: 8px 16px;
  }
  .carousel .slide img {
    background-color: #f8e9d2;
    max-width: 500px;
  }
  .carousel.carousel-slider .control-arrow {
    background: #000 !important;
    height: 50px !important;
    position: absolute;
    top: 50%;
  }
`;

const MeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 50%;
  margin: 0 32px;
  p + p {
    margin: 8px 0;
  }
  @media screen and (max-width: 720px)  {
    max-width: 100%;
    & > p {
      text-align: justify;
    }
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    display: inline-block;
    max-width: 100%;
    & > p {
      text-align: justify;
    }
  }
`;

const UpperMeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 60%;
  margin: 0 32px;
  p + p {
    margin: 8px 0;
  }
  @media screen and (max-width: 720px)  {
    margin-top: 8px;
    max-width: 100%;
    & > p {
      text-align: justify;
    }
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    margin-top: 8px;
    display: block;
    max-width: 100%;
    & > p {
      text-align: justify;
    }
  }
`;

const AboutMe = () => (
  <Style id="aboutMe">
    <NavBar />
    <div>
      <div className="pageDivisor">
        <UpperMeText>
          <p>
            Oie, eu sou Simone Serafim, e é um prazer estar aqui me apresentando
            pra você!
          </p>
          <p>
            Sou esteticista e especialista em micropigmentação realista, com
            muita responsabilidade e amor pelo que faço, tenho a honra de estar
            com a empresa sólida no mercado a mais de 13 anos.
          </p>
          <p>
            Tenho especialidades em micropigmentação paramédica reconstrutora de
            auréola mamária, micropigmentação capilar, revitalização labial e
            também remoção de tatuagem. Com 27 especializações, sendo 8 delas
            internacionais, entre estas a incrível técnica de micropigmentação
            capilar com o especialista de Israel Adir Schendel, realismo em
            paramédica aureolar com Alla Romazanova de Bielorrússia e
            microblanding realista com a referência Nhung Phan diretamente do
            Vietnam.
          </p>
          <p>
            Com a experiência de tantos casos que já realizei e conhecendo a
            necessidade de minhas clientes, desenvolvi uma técnica maravilhosa
            que proporciona um misto de resultados, o que eleva a satisfação de
            nossas clientes além das expectativas.
          </p>
        </UpperMeText>
        <CarouselSobreMim id="HorizSobreMim">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            dynamicHeight={true}
          >
            <img src="/media/aboutme/1q.webp" alt="Sobre mim - Imagem 1" />
            <img src="/media/aboutme/2q.webp" alt="Sobre mim - Imagem 2" loading="lazy"/>
          </Carousel>
        </CarouselSobreMim>
      </div>
      <div className="pageDivisor mosaicProps">
      <CarouselSobreMim id="HorizSobreMim">
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            swipeable={true}
            autoPlay={true}
            interval={6000}
            dynamicHeight={true}
          >
            <img src="/media/aboutme/mosaico.webp" alt="Sobre mim - Mosaico 1" />
            <img src="/media/aboutme/mosaico2.webp" alt="Sobre mim - Mosaico 2" loading="lazy"/>
          </Carousel>
        </CarouselSobreMim>
        <MeText>
          <p>
            O método Simone Serafim, consiste na junção de algumas técnicas que
            proporcionam um resultado inovador e único, no que se diz respeito
            ao realismo e naturalidade na micropigmentação de sobrancelhas.
          </p>
          <p>
            Desde meus 5 anos de idade sou apaixonada pela arte e lidar com
            pessoas, hoje me sinto realizada pessoal e profissionalmente, pois
            ter o poder de proporcionar felicidade a tantas pessoas me faz feliz
            e motiva a ser cada dia melhor.
          </p>
          <h2>
            Venha fazer parte do nosso time de clientes modernas,
            <br /> lindas e práticas, você vai amar!
          </h2>
        </MeText>
      </div>
    </div>
    <Footer />
  </Style>
);

export default AboutMe;
