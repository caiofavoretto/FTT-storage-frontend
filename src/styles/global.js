import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    min-height: 100%;
  }
  body {
    background: #2A2A2D;
    -webkit-font-smoothing: antialiased !important;
  }
  body, input, button, textarea {
    color: #fff;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
  }
  button {
    cursor: pointer;
  }
  hr {
    border: none;
  }
`;
