import styled from "styled-components";
import oc from "open-color";

import PageTemplate from "containers/PageTemplate";
import Intro from "components/Intro";
import Profile from "components/Profile";
import Skills from "components/Skills";

const ContentsPositioner = styled.div`
  display: flex;
  margin-top: 97vh;
  background-color: white;
  position: relative;
  z-index: 1;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

  animation-name: ContentPop;
  animation-timing-function: ease-in;
  animation-duration: 2.3s;

  @keyframes ContentPop {
    0% {
      margin-top: 100vh;
    }
    80% {
      margin-top: 100vh;
    }
    100% {
    }
  }
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  width: 1000px;
  margin: auto;
`;

const HomeContainer = () => {
  return (
    <PageTemplate>
      <Intro />
      <ContentsPositioner>
        <Contents>
          <Profile />
          <Skills />
        </Contents>
      </ContentsPositioner>
    </PageTemplate>
  );
};

export default HomeContainer;
