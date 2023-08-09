import styled from "styled-components";

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  & > #404 {
    height: 100vh;
  }
`;

const NotFound = () => (
  <Container>
    <div id="404">
      <h1>:(</h1>
      <h2>Ops... Algo deu errado.</h2>
      <i>
        <h4>Nada foi encontrado no endereço em que está.</h4>
      </i>
      <p>
        <a href="/">
          <u>Clique aqui</u>
        </a>{" "}
        para ser redirecionado à página inicial
      </p>
    </div>
  </Container>
);

export default NotFound;
