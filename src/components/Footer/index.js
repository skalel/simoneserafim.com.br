import styled from "styled-components";

import { HashLink } from "react-router-hash-link";

const Container = styled.div`
  position: relative;

  margin-top: 24px;
  display: grid;
  height: 25vh;
  width: 100%;
  grid-template-columns: 34% 33% 33%;

  #cnpj {
    font-size: 12px !important;
  }

  & #footerMap {
    margin: 0 auto 8px auto;
    width: 96%;
    height: 100;
    position: relative;

    display: block;

    * {
      background-color: transparent;
      color: #000;
    }
  }

  & #footerLogo {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  & #footerLogo img {
    margin-left: 64px;
    margin-top: -40px;
  }
  & #footerExtra {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 24px;

    #cnpj + h6 {
      margin-top: 24px;
    }
  }
  @media screen and (max-width: 834px) {
    grid-column: 1fr 1fr;
    grid-template-columns: 50% 50%;
    #footerMap {
      display: none;
    }
    #footerLogo img {
      max-width: 80%;
      margin: 0 24px;
    }
    #footerExtra {
      text-align: center !important;
      & > p {
        font-size: 16px;
      }
    }
    .telContainer {
      font-size: 14px !important;
    }
  }
`;

export const Footer = () => (
  <Container>
    <div id="footerLogo">
      <HashLink smooth to="/#top">
        <img src="/media/logo.webp" alt="Simone Serafim" width={300} />
      </HashLink>
    </div>

    <div id="footerMap">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14026.487611965278!2d-49.009971!3d-28.4909312!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x2a9fa6fd46f1db30!2sStudio%20Simone%20Serafim%20-%20Tubar%C3%A3o!5e0!3m2!1spt-BR!2sbr!4v1635943869507!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Mapa - Simone Serafim"
      ></iframe>
    </div>

    <div id="footerExtra">
      <p>Horário de Funcionamento:</p>
      <h4>
        <br />
        Segunda à Sexta
      </h4>
      <h5>Das 08:30h-12:00h</h5>
      <h5>Das 13:30h-18:30h</h5>
      <p className="telContainer">
        <br />
        Telefone:{" "}
        <a href="tel:48991502600">
          <u>+55 48 99150 2600</u>
        </a>
      </p>
      <p>
        <br />
        Simone Serafim
      </p>
      <p id="cnpj">CNPJ: 37.299.407/0001-71</p>
      <p>
        <br />
        Av. Pedro Zapelini - Centro, Tubarão - SC
      </p>
    </div>
  </Container>
);

export default Footer;
