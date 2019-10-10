import styled from "styled-components";
import oc from "open-color";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
`;

const ListWrapper = styled.div`
  margin-top: 5px;
  width: 350px;
  display: flex;
  flex-direction: column;

  h3 {
    margin: 0;
    font-weight: 100;
  }

  div {
    margin-top: 10px;
    display: flex;
    align-items: center;
  }

  p {
    margin: 0;
    margin-left: 10px;
  }

  img {
    width: 30px;
    height: 30px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

const FamiliarList = [
  {
    img: "https://cdn.auth0.com/blog/react-js/react.png",
    name: "React.js"
  },
  {
    img: "https://miro.medium.com/max/400/1*nvHO6KuxX5B6FVXZ_hqTZw.png",
    name: "Mobx"
  },
  {
    img:
      "https://spectrum.imgix.net/communities/e8792514-dc32-43ff-a26e-81c85754f193/test.png.0.3184486404030735?w=256&h=256&dpr=2&auto=compress&expires=1568073600000&ixlib=js-1.4.1&s=8fdc007520f4b3102ed53191b6839844",
    name: "Styled-components"
  },
  {
    img:
      "https://slack-files2.s3-us-west-2.amazonaws.com/avatars/2018-08-28/424668624724_3d9a8923cf9349adcb2c_230.png",
    name: "Koa.js"
  },
  {
    img: "https://miro.medium.com/max/3200/1*DiNIG4Bfpm65_wwXf_JwMA.png",
    name: "MongoDB"
  },
  {
    img:
      "https://alduncanson.gallerycdn.vsassets.io/extensions/alduncanson/react-hooks-snippets/1.1.6/1564630918767/Microsoft.VisualStudio.Services.Icons.Default",
    name: "React Hooks"
  },
  {
    img: " https://t1.daumcdn.net/cfile/tistory/215E7444573996F735",
    name: "Aws S3"
  },
  {
    img:
      "https://i2.wp.com/www.awsomeblog.com/wp-content/uploads/2015/07/elastic_beanstalk.png?fit=256%2C256",
    name: "Aws Elastic Beanstalk"
  }
];

const TriedList = [
  {
    img:
      "https://images.velog.io/post-images/ashnamuh/71316b70-9948-11e9-9406-b5826f0adafc/vueblog.png",
    name: "Vue.js"
  },
  {
    img: "https://miro.medium.com/max/1400/0*U2DmhXYumRyXH6X1.png",
    name: "Redux"
  },
  {
    img: "https://miro.medium.com/max/600/1*LKaM6rFUCeB-O0oo0kowoQ.png",
    name: "Sass"
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbL-hMqGTRWJWDubQxDKyAl8OeiMyb1p56ZPMnz4ur5ixwg7d9",
    name: "Express.js"
  },
  {
    img:
      "https://images.velog.io/post-images/dongwon2/95f04080-3845-11e9-acb0-ebd80ec9a711/10ei2MOQxAzF7krm-v60wnQ.jpeg",
    name: "Typescript"
  },

  {
    img:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Electron_Software_Framework_Logo.svg/1200px-Electron_Software_Framework_Logo.svg.png",
    name: "Electron"
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6XginJ7FYpkZJYF6XfoM5Vvaie7YfBWVubCpQQiy5GmwhGla3",
    name: "GraphQL"
  }
];

const LanguageList = [
  {
    img:
      "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_960_720.png",
    name: "JavaScript"
  },
  {
    img: "https://www.python.org/static/opengraph-icon-200x200.png",
    name: "Python"
  },
  {
    img:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5gIVp7atUS9A3zTTby4nm9-Emal7UYCiAlafAel8eYpWpnOgOXA",
    name: "C"
  }
];

const Skills = () => {
  return (
    <>
      <Wrapper>
        <ListWrapper>
          <h3>Familiar</h3>
          {FamiliarList.map((item, idx) => (
            <div key={idx}>
              <img src={item.img} />
              <p>{item.name}</p>
            </div>
          ))}
        </ListWrapper>
        <ListWrapper>
          <h3>Tried</h3>
          {TriedList.map((item, idx) => (
            <div key={idx}>
              <img src={item.img} />
              <p>{item.name}</p>
            </div>
          ))}
        </ListWrapper>
        <ListWrapper>
          <h3>Language</h3>
          {LanguageList.map((item, idx) => (
            <div key={idx}>
              <img src={item.img} />
              <p>{item.name}</p>
            </div>
          ))}
        </ListWrapper>
      </Wrapper>
    </>
  );
};

export default Skills;
