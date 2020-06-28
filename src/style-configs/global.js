import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  html, body, #root {
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height:100vh;
    margin: 0;
    border:0;
    outline:none;
    box-sizing:border-box;
    margin: 0;
    border:0;
    padding:0;
    outline:hidden;
    outline: 0;
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing:border-box;
    overflow: hidden;
    *:focus {
      outline: 0;
      outline: none;
    }
  input[type="text"], input[type="password"], textarea, select {
    outline: none;
  }
  }
`;

export default GlobalStyle;
