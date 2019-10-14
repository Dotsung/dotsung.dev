import styled from "styled-components";
import oc from "open-color";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  height: 70px;
  //background-color: ${oc.gray[8]};
  display: flex;
  padding: 0 20px;
  align-items: center;

  span {
    color: ${oc.gray[9]};
    font-weight: 100;
  }

  a{
    text-decoration: none;
    color: ${oc.indigo[7]};
    cursor: pointer;

    &:hover{
      color: ${oc.indigo[9]};
    }
  }
`;

const Spacer = styled.div`
  flex: 1;
`;

const Icon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  color: ${oc.gray[8]};
`;

const Footer = () => {
  return (
    <Wrapper>
      <span>
        Created by <a href="https://github.com/Dotsung">Dotsung</a>
      </span>
      <Spacer />
      <a href="https://github.com/Dotsung/dotsung.dev">
        <Icon icon={faGithub} />
      </a>
    </Wrapper>
  );
};

export default Footer;
