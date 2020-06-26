import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

  body, #root {
    font-family: 'Roboto', sans-serif;
    width: 100vw;
    height: 100%;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  input[type="text"], input[type="password"], textarea, select {
    outline: none;
  }
`;
