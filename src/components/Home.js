import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online Touchless Delivery"
        backgrounImg="model.png"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model Y"
        description="Order Online Touchless Delivery"
        backgrounImg="modely.png"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model 3"
        description="Order Online Touchless Delivery"
        backgrounImg="model03.png"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Model X"
        description="Order Online Touchless Delivery"
        backgrounImg="modelx.png"
        leftBtnText="Custom order"
        rightBtnText="Existing inventory"
      />
      <Section
        title="Solar Panels"
        description="
        Lowest Cost Solar Panels in America"
        backgrounImg="modelpanel.png"
        leftBtnText="order now"
        rightBtnText="learn more"
      />
      <Section
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof"
        backgrounImg="solaroof.png"
        leftBtnText="Order now"
        rightBtnText="Lear nmore"
      />
      <Section
        title="Accessories"
        description=""
        backgrounImg="accessary.png"
        leftBtnText="Order now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
