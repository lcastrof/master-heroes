import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: Roboto, sans-serif;
    font-size: 16px;
  }

  html, body, #root {
    max-height: 100vh;
    max-width: 100vw;
    width: 100%;
    height: 100%;
  }

  body {
    background: #262833;
    padding-bottom: 20px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
    border: 0;
    outline: 0;
  }

  :root {
    --primary: #222831;
    --secondary: #393e46;
    --tertiary: #00adb5;
    --quaternary: #eeeeee;

    --error: #cf6679;
    --success: #4acfac;
    --primary-variant: #262833;
  }
`;
