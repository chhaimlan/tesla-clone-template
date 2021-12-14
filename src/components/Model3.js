import React from "react";
import styled from "styled-components";

function Model3({
  title,
  description,
  backgrounImg,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  text7,
  text8,
}) {
  return (
    <Container backgrounImg={backgrounImg}>
      <ItemText>
        <h1>{title}</h1>
        <p>{description}</p>
      </ItemText>
      <Bottom>
        <GridText>
          <p>
            {text1}
            <span>{text2}</span>
          </p>
        </GridText>
        <GridText>
          <p>
            {text3}
            <span>{text4}</span>
          </p>
        </GridText>
        <GridText>
          <p>
            {text5}
            <span>{text6}</span>
          </p>
        </GridText>
        <GridText>
          <p>
            {text7} <span>{text8}</span>
          </p>
        </GridText>
        <Button>ORDER NOW</Button>
      </Bottom>
    </Container>
  );
}

export default Model3;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/model03.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  /* background-image: ${(props) => `url("/img/${props.backgrounImg}")`}; */
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const Bottom = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 100px;
  }
`;
const GridText = styled.div`
  flex: grid;
  flex-wrap: column;
  p {
    font-size: 20px;
    color: white;
    margin-left: 70px;
  }
  span {
    display: block;
    font-size: 13px;
    color: white;
    margin-top: 10px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;
const Button = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 200px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
  :hover {
    background-color: white;
    color: black;
  }
`;
