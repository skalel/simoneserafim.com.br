import React from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import data from "./data.json";

const Style = styled.div`
  /*products Start*/
  #productsProps {
    padding: 32px 4px;
    position: relative;
    display: block;
    margin: 0 66px 16px 66px;
  }
  #productsProps h1 {
    text-align: center;
    margin-bottom: 24px;
  }
  #productsProps img {
    background-color: transparent;
  }
  .procedureBox {
    margin: 8px;
  }
  @media screen and (max-width:834px){
    #productsProps {
      margin: 0 0 16px 0;
    }
  }
  /*products End*/
`;

const Wrapper = styled.div`
  display: block;
  height: 100%;

  & > div {
    display: flex;
  }
  .reversed {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 720px)  {
    flex-direction: column;
    .reversed {
      flex-direction: column;
    }
    & > div {
      flex-direction: column;
    }
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    flex-direction: column;
    .reversed {
      flex-direction: column;
    }
    & > div {
      flex-direction: column;
    }
  }
`;

const CarouselStyle = styled.div`
  display: block;
  height: 60%;
  width: 30%;
  max-width: 20%;

  .carousel-root {
    margin: 8px 16px;
  }
  .carousel .slide img {
    background-color: #f8e9d2;
  }
  .carousel .control-dots .dot {
    box-shadow: none;
    background: #f8e9d2;
    outline: 0;
  }

  .carousel.carousel-slider .control-arrow {
    background: #000 !important;
    height: 50px !important;
    position: absolute;
    top: calc(50% - 25px);
  }
  @media screen and (max-width: 720px)  {
    width: 90%;
    height: 100%;
    margin: 8px auto;
    max-width: 100%;
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    width: 70%;
    height: 100%;
    margin: 8px auto;
    max-width: 100%;
  }
`;

const RelDiv = styled.div`
  position: relative;
`;

const ProcedureText = styled.div`
  display: block;
  max-width: 70%;
  height: 100%;
  padding: 24px;
  margin: auto 16px;

  .titleProc {
    font-size: 32px;
    font-weight: 200;
    margin: 16px 0 24px 0;
    font-weight: 300;
  }
  .descProc {
    font-size: 22px;
    margin: 16px 0;
    font-weight: lighter;
  }
  .detProc {
    font-size: 16px;
    margin: 8px 0;
    font-weight: lighter;
  }

  @media screen and (max-width: 720px)  {
    max-width: 100%;
    .titleProc {
      font-size: 24px;
      margin: 12px 0 16px 0;
    }
    .descProc {
      font-size: 16px;
      text-align: justify;
    }
  }
  @media screen and (min-width: 721px) and (max-width: 834px) {
    max-width: 100%;
    .titleProc {
      font-size:24px;
      margin: 12px 0 16px 0;
    }
    .descProc {
      font-size: 16px;
      text-align: justify;
    }
  }
`;

const Divisor = styled.div`
  & > hr {
    margin: 16px auto;
    opacity: 0.6;
    width: 80%;
    border: 1px solid #f8e9d2;
  }
`;

const TextBox = styled.div`
  display: flex;

  flex-direction: column;

  margin: 16px 48px;

  & > h2{
    font-size: 32px;
    text-align: center;
  }

  & > div{
    display: flex;
    flex-wrap: wrap;
    flex-basis: 20%;
  }

  @media screen and (max-width:834px){
    margin: 16px 8px;
    & > div{
      margin: 8px 32px;
      & > p {
      text-align: justify;
      }
    }
  }
`;

const ProdContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  margin: 24px auto;

  & > img {
    max-width: 50%;
  }

  & > h3{
    font-size: 24px;
    padding: 8px 20px;
  }

  &:nth-child(4){
      display: none;
    }

  @media screen and (max-width:834px){
    &:nth-child(1){
      display: none;
    }
    &:nth-child(2){
      display: none;
    }
    &:nth-child(3){
      display: none;
    }

    &:nth-child(4){
      display: block;
      flex-direction: column;

      margin: 0;

      & > img {
        max-width:100%;
      }

      & > h3{
      font-size: 20px;
      padding: 8px 0;
      }
      & > h5 {
        padding: 8px 0;
      }
    }
  }
`;

const VidBox = styled.div`
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;

  margin: 8px 0 0 0;

  & > iframe {
    width: 25%;
    height: 40vh;
  }

  @media screen and (max-width: 834px) {
    flex-direction: column;
    margin: 24px auto;

    & > iframe {
      width: 90%;
      height: 32vh;
      margin: 24px 0;
    }
  }
`;

export const Products = () => {
  return (
    <div id="products">
      <NavBar />
      <Style>
        <div id="productsProps">
          <h1>SKIN BABY</h1>
          {data.results.map((result) => (
            <Wrapper key={result.id}>
              <div className={result.id % 2 !== 0 ? "reversed" : ""}>
                <CarouselStyle>
                  <RelDiv>
                    <Carousel
                      showArrows={true}
                      showStatus={false}
                      showIndicators={false}
                      infiniteLoop={true}
                      showThumbs={false}
                      swipeable={true}
                      autoPlay={true}
                      interval={3000}
                    >
                      {result.images.map((image, index) => (
                        <img key={index} src={image} alt={`Imagem ${index + 1}`} loading={index >= 1 ? "lazy" : "eager"} />
                      ))}
                    </Carousel>
                  </RelDiv>
                </CarouselStyle>
                <ProcedureText>
                  <div>
                    <p className="titleProc">{result.name}</p>
                    <p className="descProc">{result.desc}</p>
                    <p className="detProc">
                      <i>{result.details}</i>
                    </p>
                  </div>
                </ProcedureText>
                </div>
                <Divisor>
                  <hr />
                </Divisor>
            </Wrapper>
          ))}
        <TextBox>
            <h2>Produtos de tratamento SKIN BABY</h2>
            <div>
              <ProdContainer>
                <img src="/media/products/serum.webp" alt="Sérum SKIN BABY" />
                <h3>⚜ Sérum de nutrição celular</h3>
              </ProdContainer>
              <ProdContainer>
                <img src="/media/products/saboneteliq.webp" alt="Sabonete Líquido Facial SKIN BABY" />
                <h3>⚜ Sabonete líquido facial</h3>
              </ProdContainer>
              <ProdContainer>
                <img src="/media/products/protfacial.webp" alt="Protetor Solar SKIN BABY" />
                <h3>⚜ Protetor solar com 2 opções de cor e incolor</h3>
              </ProdContainer>
              <ProdContainer>
                <img src="/media/products/kittratamento.webp" alt="Kit de Tratamento SKIN BABY" />
                <h3>⚜ Kit de Tratamento SKIN BABY</h3>
                <h5>O Kit contém: um Sérum de nutrição, Sabonete Líquido facial e Protetor Solar.</h5>
              </ProdContainer>
              <p>Estes produtos são de formulação compatível com o protocolo SKIN BABY - bioplacenta, um tratamento que visa a regeneração celular, resultando no clareamento de manchas, rejuvenescimento, uniformização em cicatrizes de acnes e melhora da estrutura da pele num todo.
              O uso contínuo dos produtos em casa darão a continuidade nos resultados clareadores e uniformizadores na pele, gerados pelo protocolo SKIN  BABY-bioplacenta.</p>
              <br/>
              <p>O sabonete líquido facial com essência suave e agradável, traz uma sensação de frescor e limpeza, com ativos cicatrizantes é também muito indicado para equilibrar peles oleosas.</p>
              <br/>
              <p>Já o sérum, composto de ativos riquíssimos antioxidantes, purificantes e fator de crescimento, supre a necessidade de nutrição celular noturna, com toque aveludado proporciona uma pele tratada, macia e uniforme.</p>
              <br/>
              <p>O protetor facial tem fator 50 FPS, é vegano, anti oleosidade e também com vitamina E, com opções incolor, e 2 tons de bege com cobertura média, pode ser usado como base, unificando o tratamento e efeito estético num só produto. Nele contém ativos de nutrição para manter o cuidado durante o dia.</p>
            </div>
        </TextBox>
        <Divisor>
          <hr />
        </Divisor>
        <VidBox>
          <iframe
            src="https://youtube.com/embed/OHtPa0p6bDU?feature=share"
            title="Uma experiência! Isso que buscamos em cada atendimento!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </VidBox>
        </div>
      </Style>
      <Footer />
    </div>
  );
};

export default Products;
