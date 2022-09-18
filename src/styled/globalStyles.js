import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
  }
  body{
    font-family: 'Ubuntu', sans-serif;
    color: #edf2f4;
    background-color: #2b2d42;
  }
  button{
    font-family: 'Ubuntu', sans-serif;
    color: #edf2f4;
    background-color: #d90429;
  }
  input{
    font-family: 'Ubuntu', sans-serif;
    color: #2b2d42;
    background-color: #8d99ae;
    padding-left: 10px;
    padding-right: 10px;
    outline: none;
  }
  a{
    text-decoration: inherit;
    color: #d90429;
    font-weight: bold;
    text-shadow: .5px .5px .5px #8d99ae;
    transition: .2s all;
    cursor: pointer;
    &:hover{
      text-shadow: 0 0 0 #8d99ae;
      transition: .2s all;
      color: #8d99ae;
    }
  }
`;

export default GlobalStyle;
