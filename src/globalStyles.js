import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

body{
    background:${({ theme }) => theme.bodyBackground};
    font-family: 'Noto Sans JP', sans-serif;
}

`;

export default GlobalStyle;
