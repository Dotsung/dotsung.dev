import styled from "styled-components";
import oc from "open-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  width: 100%;
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
`;

const ProjectDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 30px;

  p {
    margin: 0;
    margin-top: 10px;
    margin-left: 10px;
  }

  h2 {
    margin: 0;
    margin-left: 10px;
    font-size: 2rem;
  }

  span {
    margin: 0;
    margin-left: 10px;
  }
`;

const ProjectImg = styled.img`
  width: 100%;
`;

const DescDiv = styled.div`
  display: flex;
  margin-top: 10px;
`;

const ListDiv = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;

  h3 {
    margin: 0;
  }

  span {
    margin: 0;
  }
`;

const Slicer = styled.div`
  width: 150px;
  height: 1px;
  background-color: ${oc.gray[8]};
  margin: 3px 0;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${oc.gray[8]};
`;

const LinkDiv = styled.div`
  display: flex;
  margin: 3px 10px;

  div {
    width: 2rem;
    display: flex;
  }

  a {
    text-decoration: none;
    color: ${oc.indigo[7]};
    &:hover {
      text-decoration: underline;
      color: ${oc.indigo[9]};
    }
  }
`;

const Projects = () => {
  return (
    <Wrapper>
      <VLine />
      <ContentWrapper>
        <ProjectDiv>
          <p>2019.09 ~ now</p>
          <h2>BalloonSpace</h2>
          <LinkDiv>
            <div>
              <Icon icon={faGithub} />
            </div>
            <a href="https://github.com/balloonspace/balloonspace-client">
              GithubLink
            </a>
          </LinkDiv>
          <ProjectImg src="https://dotsungfiles.s3.ap-northeast-2.amazonaws.com/balloonspace.png" />
          <span>
            SNS 프로젝트
            <br />
            개발인원 4인 중 프론트엔드 담당으로 개발
          </span>
          <DescDiv>
            <ListDiv>
              <h3>What I did</h3>
              <Slicer />
              <span>레이아웃 디자인</span>
              <span>UI 디자인</span>
              <span>프론트엔드 전체 기능 개발</span>
            </ListDiv>
            <ListDiv>
              <h3>Stack</h3>
              <Slicer />
              <span>React.js를 사용한 프론트엔드 기능 구현</span>
              <span>Next.js를 사용한 서버사이드 랜더링</span>
              <span>Styled-components를 사용한 스타일링</span>
              <span>AWS S3를 사용한 호스팅</span>
            </ListDiv>
          </DescDiv>
        </ProjectDiv>
        <ProjectDiv>
          <p>2019.09 ~ 2019.09</p>
          <h2>잎새</h2>
          <LinkDiv>
            <div>
              <Icon icon={faGithub} />
            </div>
            <a href="https://github.com/BeanSil/IPSE-client">Github Link</a>
          </LinkDiv>
          <LinkDiv>
            <div>
              <Icon icon={faGlobe} />
            </div>
            <a href="http://entrygsmdemo.s3-website.ap-northeast-2.amazonaws.com/">
              Demo Link
            </a>
          </LinkDiv>
          <ProjectImg src="https://dotsungfiles.s3.ap-northeast-2.amazonaws.com/ipse.png" />
          <span>
            광주 소프트웨어 마이스터고등학교 입학 지원자들을 위한 온라인
            원서접수 웹
            <br />
            3인 팀에서 디자인 및 프론트엔드 개발 담당
          </span>
          <DescDiv>
            <ListDiv>
              <h3>What I did</h3>
              <Slicer />
              <span>레이아웃 및 UI/UX 디자인</span>
              <span>프론트엔드 전체 기능 개발</span>
              <span>Api서버 개발</span>
              <span>데이터베이스 설계, 관리</span>
            </ListDiv>
            <ListDiv>
              <h3>Stack</h3>
              <Slicer />
              <span>React.js를 사용한 프론트엔드 기능 구현</span>
              <span>Mobx를 사용한 상태관리</span>
              <span>Styled-components를 사용한 스타일링</span>
              <span>Koa.js를 사용한 백엔드 서버 개발</span>
              <span>MongoDB를 사용한 유저와 포스트 데이터 관리</span>
              <span>AWS S3를 사용한 파일 저장과 호스팅</span>
              <span>AWS Elastic Beanstalk을 사용한 Api서버 호스팅</span>
            </ListDiv>
          </DescDiv>
        </ProjectDiv>
        <ProjectDiv>
          <p>2019.05 ~ 2019.08</p>
          <h2>Dotia</h2>
          <LinkDiv>
            <div>
              <Icon icon={faGithub} />
            </div>
            <a href="https://github.com/Dotsung/Dotia">Github Link</a>
          </LinkDiv>
          <LinkDiv>
            <div>
              <Icon icon={faGlobe} />
            </div>
            <a href="https://dotia.org">Site Link</a>
          </LinkDiv>
          <ProjectImg src="https://dotsungfiles.s3.ap-northeast-2.amazonaws.com/dotia.png" />
          <span>
            픽셀 아트를 공유할 수 있는 커뮤니티 웹
            <br />
            풀스택 1인 개발
          </span>
          <DescDiv>
            <ListDiv>
              <h3>What I did</h3>
              <Slicer />
              <span>레이아웃 및 UI/UX 디자인</span>
              <span>프론트엔드 전체 기능 개발</span>
              <span>Api서버 개발</span>
              <span>데이터베이스 설계, 관리</span>
            </ListDiv>
            <ListDiv>
              <h3>Stack</h3>
              <Slicer />
              <span>React.js를 사용한 프론트엔드 기능 구현</span>
              <span>Mobx를 사용한 상태관리</span>
              <span>Styled-components를 사용한 스타일링</span>
              <span>Koa.js를 사용한 백엔드 서버 개발</span>
              <span>MongoDB를 사용한 유저와 포스트 데이터 관리</span>
              <span>AWS S3를 사용한 파일 저장과 호스팅</span>
              <span>AWS Elastic Beanstalk을 사용한 Api서버 호스팅</span>
            </ListDiv>
          </DescDiv>
        </ProjectDiv>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Projects;
