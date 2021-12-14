import React from "react";
import styled from "styled-components";
import HomeSolar from "./HomeSolar";

function Solar() {
  return (
    <Container>
      <HomeSolar
        title="Solar Roof"
        description="Transform your roof and produce clean energy"
        backgrounImg="solar.png"
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

export default Solar;

const Container = styled.div`
  height: 100vh;
`;
