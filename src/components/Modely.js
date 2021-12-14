import React from "react";
import styled from "styled-components";
import HomeModely from "./HomeModely";

function Modely() {
  return (
    <Container>
      <HomeModely
        title="Model x"
        description="Plaid"
        backgrounImg="modelx.png"
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

export default Modely;

const Container = styled.div`
  height: 100vh;
`;
