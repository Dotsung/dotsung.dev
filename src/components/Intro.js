import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  //background-color: #fed350;
  background-color: ${oc.yellow[3]};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 0;
`;

const Img = styled.img`
  margin: 0 auto;
  width: 500px;
  display: block;

  animation-name: MoveUpImage;
  animation-timing-function: ease-in;
  animation-duration: 0.8s;

  @keyframes MoveUpImage {
    0% {
      opacity: 0;
      padding-top: 50px;
    }
    100% {
      opacity: 1;
    }
  }

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

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  h1 {
    font-size: 4rem;
    margin: 0;

    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1.5s;

    @media screen and (max-width: 600px) {
      font-size: 2.5rem;
    }
  }
  span {
    font-size: 2rem;
    margin-top: 1rem;

    animation-name: FadeIn;
    animation-timing-function: ease-in;
    animation-duration: 1.9s;

    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
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
