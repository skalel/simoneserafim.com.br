import Form from "../Form";

import styled, { keyframes } from "styled-components";
import { shade } from "polished";

const Wrapper = styled.div`
  margin-top: -95px;
  padding-top: 95px;

  h3 + h4 {
    margin-top: 8px;
  }
  h3 + h3 {
    margin-top: 8px;
  }
  h3,
  h4 {
    width: 70%;
    font-weight: lighter;
    text-align: center;
    margin: 16px auto;
  }

  @media screen and (max-width: 834px) {
    margin-top: -150px;
    padding-top: 150px;
  }
`;

export const Style = styled.div`
  .success {
    margin: 20px 0;
    border: 2px solid green;
    padding: 7px;
    font-weight: bold;
    width: 150%;
    text-align: center;
    translate: -15%;
  }

  .error {
    margin: 20px 0;
    border: 2px solid red;
    padding: 7px;
    font-weight: bold;
    width: 150%;
    text-align: center;
    translate: -15%;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url("/media/studio.JPG") no-repeat center;
  @supports (background-image: url('/media/studio.webp')) {
    background-image: url('/media/studio.webp');
  }
  background-size: cover;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;

  margin-top: 10vh;

  display: flex;
  align-items: stretch;

  h2,
  h3 {
    display: block;
    width: 100%;
    font-weight: 100;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 834px;
`;

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromRight} 1s;

  form {
    margin: 20px 0;
    width: 340px;

    & > input,
    textarea {
      color: #251f16;
    }

    .inputFormField {
      width: 100%;
      border-radius: 16px;
      border-color: #f8e9d2;
      padding: 8px 12px;
      margin: 8px 0;
    }

    .buttonForm {
      background-color: #cca352;
      box-shadow: 8px 8px 4px #251f16;
      color: #251f16;
      font-weight: 600;
      padding: 4px;
      border: 2px solid #cca352;
      border-radius: 8px;
      width: 45%;
      margin-top: 8px;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: background-color 0.2s;
      text-align: center;

      &:hover {
        background-color: ${shade(0.2, "#cca352fd")};
        border-color: ${shade(0.2, "#cca352")};
      }
    }

    textarea {
      width: 100% !important;
      resize: none;
    }

    h1 {
      margin-bottom: 24px;
    }
  }
`;

/* const ButtonToForm = styled.div`
  display: flex;
  background: linear-gradient(
    180deg,
    rgba(140, 108, 23, 1) 0%,
    rgba(37, 31, 22, 1) 45%
  );
  border: 2px solid #cca352;
  border-radius: 12px;
  width: 120%;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin: 24px 16px;
  font-size: 1.14em;

  box-shadow: 8px 8px 4px #251f16;

  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover {
    border: 2px solid ${shade(0.2, "#cca352")};
    color: #cca352;
  }

  & > a {
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 834px) {
    width: 95% !important;
    margin-bottom: 64px;
    margin-top: -24px;
  }
`; */

/**
 * @config preparing config prop.
 * api: url for the server endpoint
 * title: form title
 * successMessage: message will show in the UI when mail is successfully sent.
 * errorMessage: message will show in the UI when mail is not sent.
 * fields: this is the name of each field. This should be exact order of the fieldsConfig and fieldsConfig.fieldName should be  the same
 * fieldsConfig = settings for each input/textarea field
 */
export const config = {
  api: `https://simoneserafim.com.br/api/`,
  title: "Entre em contato",
  description: "Ficamos à sua disposição. Sejam bem-vindos.",
  successMessage: "Obrigado por nos contatar.",
  errorMessage: "Verifique as informações e tente novamente.",
  fields: {
    name: "",
    email: "",
    tel: "",
    message: "",
  },
  fieldsConfig: [
    {
      id: 1,
      label: "Nome: ",
      fieldName: "name",
      type: "text",
      placeholder: "Seu nome...",
      isRequired: true,
      className: "inputFormField",
    },
    {
      id: 2,
      label: "Email: ",
      fieldName: "email",
      type: "email",
      placeholder: "Seu e-mail...",
      isRequired: true,
      className: "inputFormField",
    },
    {
      id: 3,
      label: "Telefone: ",
      fieldName: "tel",
      type: "telephone",
      placeholder: "Seu telefone...",
      isRequired: true,
      className: "inputFormField",
    },
    {
      id: 4,
      label: "Mensagem: ",
      fieldName: "message",
      type: "textarea",
      placeholder: "Escreva sua mensagem...",
      isRequired: true,
      className: "inputFormField",
    },
  ],
};

export const FormHandler = () => {
  return (
    <Wrapper name="contato" id="contact">
      <h3>
        Nós prezamos por qualidade, nossos procedimentos são minuciosos e
        necessitam de um tempo exclusivo para que o resultado fique perfeito,
        então, nossos atendimentos são realizados com horários agendados
        antecipadamente.
      </h3>
      <h3>
        Preencha o formulário e nos envie um e-mail ou se preferir, entre em
        contato pelo WhatsApp, verifique as disponibilidades e agende seu
        horário com nossa equipe!
      </h3>
      <Container>
        <Background />
        <Content>
          <AnimatedContainer>
            {/* <ButtonToForm>
              <a
                href="https://forms.gle/BGmt7CaWa4ABqJWRA"
                rel="noreferrer"
                target="_blank"
              >
                Quero personalizar meu atendimento
              </a>
            </ButtonToForm> */}
            <Style>
              <Form config={config} />
            </Style>
          </AnimatedContainer>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default FormHandler;
