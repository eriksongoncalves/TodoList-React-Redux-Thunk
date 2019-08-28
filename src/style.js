import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    padding-top: 150px;
    background-color: #008cf7;
    font-size: 16px;
    font-family: Arial;
  }
`;

export default GlobalStyle;