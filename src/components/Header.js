import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useSelector } from "react-redux";
import { selectCars } from "../features/carSlice";
import { useNavigate, Link } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const [burger, setBurger] = useState(false);
  const cars = useSelector(selectCars);
  console.log(cars);
  // const [show, handlShow] = useState(false);
  // useEffect(() => {
  //   window.addEventListener("scroll", () => {
  //     if (window.scrollY > 100) {
  //       handlShow(false);
  //     } else handlShow(true);
  //   });
  //   return () => {
  //     window.removeEventListener("scroll");
  //   };
  // }, []);
  return (
    // className={`Container${show && "graye"}`}
    <Container>
      <a href="#" onClick={() => navigate("/")}>
        <img src="/img/logo.png" alt="" />
        <p>T E S L A</p>
      </a>
      {/* <Menu onClick={() => navigate("/models")}>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
      </Menu> */}
      <Menu>
        <a href="#" onClick={() => navigate("/models")}>
          Model S
        </a>
        <a href="#" onClick={() => navigate("/model3")}>
          Model 3
        </a>
        <a href="#" onClick={() => navigate("/modelx")}>
          Model X
        </a>
        <a href="#" onClick={() => navigate("/modely")}>
          Model Y
        </a>
        <a href="#" onClick={() => navigate("/solar")}>
          Solar Roof
        </a>
        <a href="#" onClick={() => navigate("/solarpanels")}>
          Solar Panels
        </a>
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurger(true)} />
      </RightMenu>
      <BurgerNav show={burger}>
        <CloseStyle>
          <CloseBtn onClick={() => setBurger(false)} />
        </CloseStyle>
        {cars &&
          cars.map((car, index) => (
            <li key={index}>
              <a href="#">{car}</a>
            </li>
          ))}
        <li>
          <a href="#">Existing Inventory</a>
        </li>
        <li>
          <a href="#">Used Inventory</a>
        </li>
        <li>
          <a href="#">Trade-in</a>
        </li>
        <li>
          <a href="#">Cybertruck</a>
        </li>
        <li>
          <a href="#">Roadaster</a>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const CloseStyle = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 300px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
   }
  li {
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  }
  a {
    font-weight: 600;
  }
`;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  a {
    display: flex;
    align-items: center;
    height: 40px;
  }
  img {
    height: 60px;
    border-radius: 50%;
    display: flex;
  }
  P {
    margin-left: 10px;
    color: black;
    font-family: "Permanent Marker", cursive;
  }
  a:hover,
  p:hover {
    color: blue;
    background-color: lightgray;
    border-radius: 10px;
    align-items: center;
    padding: 0 10px;
    border-bottom: none;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 768px) {
    display: none;
  }
  a:hover {
    color: blue;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
  a:hover {
    color: blue;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;
