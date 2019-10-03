import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body{
    margin: 0;
  }
  *{
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  display: flex;
`;

const PageTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>{children}</Wrapper>
    </>
  );
};

export default PageTemplate;
