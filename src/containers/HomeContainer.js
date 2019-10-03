import styled from "styled-components";
import oc from "open-color";

import PageTemplate from "containers/PageTemplate";
import Intro from "components/Intro";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HomeContainer = () => {
  return (
    <PageTemplate>
      <Wrapper>
        <Intro />
      </Wrapper>
    </PageTemplate>
  );
};

export default HomeContainer;
