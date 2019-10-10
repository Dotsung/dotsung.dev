import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const TitleWrapper = styled.div`
  display: flex;
`;

const VLine = styled.div`
  min-width: 2px;
  min-height: calc(100% - 20px);
  margin-top: 20px;
  background-color: ${oc.gray[8]};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5px;

  p {
    margin: 0;
    margin-top: 10px;
  }
`;

const ProjectDiv = styled.div`
  display: flex;
  width: 100%;
`;

const ProjectImg = styled.img`
  width: 100%;
`;

const Projects = () => {
  return (
    <Wrapper>
      <VLine />
      <ContentWrapper>
        <p>2019.09 ~ now</p>
        <ProjectDiv>
          <ProjectImg src="https://dotsungfiles.s3.ap-northeast-2.amazonaws.com/balloonspace.png" />
        </ProjectDiv>
        <p>2019.05 ~ 2019.08</p>
        <ProjectDiv>
          <ProjectImg src="https://dotsungfiles.s3.ap-northeast-2.amazonaws.com/dotia.png" />
        </ProjectDiv>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Projects;
