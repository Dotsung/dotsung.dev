import styled from "styled-components";
import oc from "open-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {} from "@fortawesome/free-regular-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt, faDiscord } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const ProfileWrapper = styled.div`
  display: flex;
`;

const IntroduceWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  span {
    margin-left: 20px;
    margin-top: 0.3rem;
    color: ${oc.gray[8]};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  min-width: 200px;
  justify-content: flex-end;

  h2 {
    margin: 0;
    font-weight: 100;
    font-size: 1.3rem;
    color: ${oc.gray[9]};
  }
`;

const Avatar = styled.img`
  display: block;
  width: 200px;
  height: 200px;
  border-radius: 5px;
`;

const DescriptSection = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  div {
    display: flex;
  }
  h1 {
    margin: 0;
    color: ${oc.gray[9]};
  }
  p {
    margin: 0;
    margin-left: 5px;
    margin-top: 1rem;
    color: ${oc.gray[7]};
  }
  span {
    font-size: 1rem;
    color: ${oc.gray[9]};
  }
  a {
    font-size: 1rem;
    text-decoration: none;
    color: ${oc.indigo[6]};
    cursor: pointer;

    &:hover {
      text-decoration: underline;
      color: ${oc.indigo[8]};
    }
  }
`;

const IconDiv = styled.div`
  display: flex;
  margin-top: 7px;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 2rem;
  display: flex;
  height: 100%;
  align-items: center;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
  color: ${oc.gray[8]};
`;

const Profile = () => {
  return (
    <Wrapper>
      <ProfileWrapper>
        <Avatar src="https://avatars2.githubusercontent.com/u/27345523?s=460&v=4" />
        <DescriptSection>
          <div>
            <h1>전형탁</h1>
            <p>HyeongTak Jeon</p>
          </div>
          <span>Web Frontend Developer</span>
          <IconDiv style={{ marginTop: `10px` }}>
            <IconWrapper>
              <Icon icon={faEnvelope} />
            </IconWrapper>
            <a>dotsung22@gmail.com</a>
          </IconDiv>
          <IconDiv>
            <IconWrapper>
              <Icon icon={faPhone} />
            </IconWrapper>
            <a>010-4376-7028</a>
          </IconDiv>
          <IconDiv>
            <IconWrapper>
              <Icon icon={faGithubAlt} />
            </IconWrapper>
            <a>github.com/Dotsung</a>
          </IconDiv>
          <IconDiv>
            <IconWrapper>
              <Icon icon={faDiscord} />
            </IconWrapper>
            <a>형탁#5136</a>
          </IconDiv>
        </DescriptSection>
      </ProfileWrapper>
      <IntroduceWrapper>
        <TitleWrapper>
          <h2>Introduce</h2>
        </TitleWrapper>
        <span>
          웹 프론트엔드 엔지니어 전형탁 입니다. 현재 학생 신분이라 아직 경력은
          없지만, 여러 프로젝트를 수행하면서 개발 역량을 쌓아왔습니다. 주로
          자바스크립트를 사용하며, 리액트 프레임워크를 사용해 개발하고 있습니다.
          <br />
          <br />
          1인 개발 프로젝트를 개발 시작부터 배포까지 혼자 진행해보며, 프론트엔드
          말고도 백엔드와 디자인 직군의 역할의 이해도를 키웠습니다. 여러
          프로젝트에서 디자인부분까지 맡으면서 디자인 역량도 조금이나마 쌓게
          되었고, 현재는 어느정도의 디자인 감각이 있는 프론트엔드 개발자를
          지향하고 있습니다.
          <br />
          <br />
          또한, 여러 협업 프로젝트를 진행하면서 다른 직군과 소통하는 것의
          중요성을 알게 되었고, 프로젝트 시 주기적으로 회의하고 수시로
          소통합니다. 슬랙, 노션, 제플린 등의 협업 툴 활용능력도 쌓으며 다양한
          프로젝트에 적용하고 있습니다.
          <br />
          거의 모든 프로젝트를 깃허브를 활용해 관리하며 진행하고 있습니다.
          <br />
          <br />
          2020년 2월 광주 소프트웨어 마이스터고등학교 졸업 예정이며, 현재
          현장실습의 형태로 출근 및 직무수행이 가능합니다.
        </span>
      </IntroduceWrapper>
    </Wrapper>
  );
};

export default Profile;
