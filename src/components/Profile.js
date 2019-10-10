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
`;

const Avatar = styled.img`
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
    </Wrapper>
  );
};

export default Profile;
