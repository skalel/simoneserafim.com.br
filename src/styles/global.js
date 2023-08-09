import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  /*General Styles Start*/
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;

  font-smooth: antialiased;

  font-family: Helvetica, sans-serif;
  font-weight: lighter;

  color: #f8e9d2;
}
html{
  scroll-behavior: smooth;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-y: auto;

  background: rgb(92,76,54);
  background: linear-gradient(315deg,rgba(180,132,9,0.4) 0%,rgba(37,31,22,0.9) 25%) !important;
  position: fixed;
}
a {
  text-decoration: none;
  color: #f8e9d2;
  transition: color 0.2s ease;
}
a:hover {
  color: #f8e9d2d5;
}
#watermark {
      position: fixed;
      z-index: -1;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: url("/media/watermark.png");
      @supports (background-image: url('/media/watermark.webp')) {
        background-image: url('/media/watermark.webp');
      }
      width: 40vw;

      margin: 0 auto;

      opacity: 0.1;

      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
    }
@media screen and (max-width:834px){
  #watermark{
    width: 85vw;
  }
}
/*General Styles End*/
`;
