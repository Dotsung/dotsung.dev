import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: #fed350;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  margin: 0 auto;
  width: 600px;
  display: block;

  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const TextArea = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: ${oc.gray[9]};
  h1 {
    font-size: 4rem;
    margin: 0;
  }
  span {
    font-size: 2rem;
    margin-top: 1rem;
  }
`;

const Intro = () => {
  return (
    <Wrapper>
      <Img src="https://dotsungfiles.s3.ap-northeast-2.amazonaws.com/main_image_1.png" />
      <TextArea>
        <h1>Hi, I'm HyeongTak</h1>
        <span>a.k.a. Dotsung</span>
      </TextArea>
    </Wrapper>
  );
};

export default Intro;
