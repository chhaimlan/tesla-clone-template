import React from "react";
import styled from "styled-components";
import HomeSolarPanel from "./HomeSolarPanel";

function SolarPanel() {
  return (
    <Container>
      <HomeSolarPanel
        title="Solar for Existing Roofs"
        description="Lowest Cost Solar Panels in America—Money-back guarantee"
        backgrounImg="solarpanel.png"
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

export default SolarPanel;

const Container = styled.div`
  height: 100vh;
`;
