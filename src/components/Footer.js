import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${oc.gray[8]};
`;

const Footer = () => {
  return <Wrapper></Wrapper>;
};

export default Footer;
