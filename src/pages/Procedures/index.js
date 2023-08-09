import { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import styled from "styled-components";

import { AiOutlineWarning } from "react-icons/ai";

import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";

import data from "./data.json";

const Style = styled.div`
  /*Procedures Start*/
  #proceduresProps {
    padding: 32px 4px;
    position: relative;
    display: block;
    margin: 0 66px 16px 66px;
  }
  #proceduresProps h1 {
    text-align: center;
    margin-bottom: 24px;
  }
  #proceduresProps img {
    background-color: transparent;
  }
  .procedureBox {
    margin: 8px;
  }
  @media screen and (max-width:834px){
    #proceduresProps {
      margin: 0 0 16px 0;
    }
  }
  /*Procedures End*/
`;

const Wrapper = styled.div`
  display: block;
  height: 100%;

  .invisible {
    .slider-wrapper {
      filter: blur(10px) grayscale(1);
    }
  }

  .visible {
    .slider-wrapper {
      filter: unset;
    }
  }

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

  .invisibleOverlay {
    opacity: 0;
    visibility: hidden;
    display: none;
  }

  .buttonOverlay {
    margin: 8px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #251f16cc;
    visibility: visible;
    opacity: 1;
    transition: 0.3s ease-in-out;
    z-index: 4;

    .buttons {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: #f8e9d2;
      margin: 0 16px;
      border-radius: 18px;

      svg {
        margin: 4px;
      }
      p {
        color: #251f16;
        text-align: center;
        margin: 2px 8px;
        padding: 4px 12px;
      }
      .button {
        color: #f8e9d2;
        background-color: #251f16cc;
        padding: 12px;
        margin: 4px 4px 8px 4px;
        border: 2px solid #251f16;
        border-radius: 15px;
        box-shadow: 1px 1px 1px #251f16;
        cursor: pointer;
      }
    }
  }

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

const VidBox = styled.div`
  display: flex !important;
  justify-content: space-evenly;
  align-items: center;

  & > iframe {
    width: 48%;
    height: 50vh;
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

export const Procedures = () => {
  const [visible, setVisible] = useState(false);

  function ShowImages() {
    setVisible(!visible);
  }

  return (
    <div id="procedures">
      <NavBar />
      <Style>
        <div id="proceduresProps">
          <h1>Procedimentos</h1>
          {data.procedures.map((procedure) => (
            <Wrapper key={procedure.id}>
              <div className={procedure.id % 2 !== 0 ? "reversed" : ""}>
                <CarouselStyle>
                  <RelDiv>
                    {procedure.sensible_content === true && (
                      <div className={!visible ? "buttonOverlay" : "invisibleOverlay"}>
                        <div className="buttons">
                          <AiOutlineWarning fill="#251f16" size={40} />
                          <p>
                            O conteúdo a seguir pode ser considerado sensível.
                            <br />
                            Clique abaixo se desejar exibir.
                          </p>
                          <div className="button" onClick={ShowImages}>
                            Clique aqui
                          </div>
                        </div>
                      </div>
                    )}
                    <Carousel
                      showArrows={true}
                      showStatus={false}
                      showIndicators={false}
                      infiniteLoop={true}
                      showThumbs={false}
                      swipeable={true}
                      autoPlay={true}
                      interval={3000}
                      className={procedure.sensible_content ? (visible ? "visible" : "invisible") : ""}
                    >
                      {procedure.images.map((image, index) => (
                        <img key={index} src={image} alt={`Imagem ${index + 1}`} loading={index >= 1 ? "lazy" : "eager"} />
                      ))}
                    </Carousel>
                  </RelDiv>
                </CarouselStyle>
                <ProcedureText>
                  <div>
                    <p className="titleProc">{procedure.name}</p>
                    <p className="descProc">{procedure.desc}</p>
                    <p className="detProc">
                      <i>{procedure.details}</i>
                    </p>
                  </div>
                </ProcedureText>
                </div>
                <Divisor>
                  <hr />
                </Divisor>
            </Wrapper>
          ))}
        <VidBox>
          <iframe
            src="https://www.youtube.com/embed/pF-_d2jg0rA"
            title="Uma experiência! Isso que buscamos em cada atendimento!"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <iframe
            src="https://youtube.com/embed/4ZKq29TDWxQ?feature=share"
            title="Método Simone Serafim"
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

export default Procedures;
