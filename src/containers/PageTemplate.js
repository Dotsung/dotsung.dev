import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    }
  body{
    margin: 0;
    height: 100%;
  }
  #__next{
    height: 100%;
  }
  *{
    box-sizing: border-box;
    font-family: "Roboto Condensed", sans-serif;
  }
`;

const PageTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default PageTemplate;
