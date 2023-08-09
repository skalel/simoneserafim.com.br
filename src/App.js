import { BrowserRouter } from "react-router-dom";

import SocialButton from "./components/SocialButtons";

import Routes from "./routes/index.js";

import GlobalStyle from "./styles/global.js";

const App = () => (
  <>
    <BrowserRouter>
      <div id="watermark"></div>
      <div id="top"></div>
      <Routes />
      <SocialButton />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
