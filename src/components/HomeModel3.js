import React from "react";
import styled from "styled-components";
import Model3 from "./Model3";

function HomeModel3() {
  return (
    <Container>
      <Model3
        title="Model 3"
        description=""
        backgrounImg="model3.png"
        text1="3.1s"
        text2="0-60 mph*"
        text3="358 mi"
        text4="Range (EPA est.)"
        text5="AWD"
        text6="Dual Motor"
        text7=""
        text8=""
      />
    </Container>
  );
}

export default HomeModel3;

const Container = styled.div`
  height: 100vh;
`;
