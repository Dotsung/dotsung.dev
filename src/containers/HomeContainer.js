import styled from "styled-components";
import oc from "open-color";

import PageTemplate from "containers/PageTemplate";
import Intro from "components/Intro";
import Profile from "components/Profile";

const Contents = styled.div`
  display: flex;
  flex-direction: column;
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

const HomeContainer = () => {
  return (
    <PageTemplate>
      <Intro />
      <Contents>
        <Profile />
      </Contents>
    </PageTemplate>
  );
};

export default HomeContainer;
