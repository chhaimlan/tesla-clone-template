import React from "react";
import { Fade } from "react-reveal";
import styled from "styled-components";

function Section({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgrounImg,
}) {
  return (
    <Fade bottom>
      <Container backgrounImg={backgrounImg}>
        <Fade bottom>
          <ItemText>
            <h1>{title}</h1>
            <p>{description}</p>
          </ItemText>
        </Fade>
        <Button>
          <Fade bottom>
            <ButtonGroup>
              <LeftButton>{leftBtnText}</LeftButton>
              {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
            </ButtonGroup>
            <DownArrow src="/img/down-arrow.png" />
          </Fade>
        </Button>
      </Container>
    </Fade>
  );
}

export default Section;

const Button = styled.div``;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/img/model.png");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: ${(props) => `url("/img/${props.backgrounImg}")`};
`;
const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
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
`;

const DownArrow = styled.img`
  height: 20px;
  overflow-x: hidden;
  background-color: #393c41;
  color: white;
  margin-left: 47%;
  animation: animateDown infinite 1.5s;
`;
const RightButton = styled(LeftButton)`
  background: white;
  opacity: 065;
  color: black;
`;
