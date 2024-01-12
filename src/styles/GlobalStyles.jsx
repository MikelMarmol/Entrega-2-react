import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

  html{
    scroll-behavior: smooth;
  }

    body {
    margin: 0;
    padding: 0;
    background: #131415;
    color: white;
    -webkit-tap-highlight-color: transparent;
    overflow-x: hidden
    }

    a {
    text-decoration: none;
    }

    a:visited {
    color: #ffffff;
    }

    li {
    list-style: none;
    }

`;