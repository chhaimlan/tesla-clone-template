import React from "react";
import styled from "styled-components";
import Models from "./Models";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import "swiper/swiper.min.css";
import "swiper/modules/pagination/pagination.min.css";
import { Fade } from "react-reveal";
import { Button } from "@material-ui/core";
SwiperCore.use([Pagination, Navigation, Autoplay]);
function HomeModel() {
  return (
    <Fade bottom>
      <Container>
        <Models
          title="Model S"
          description="Plaid"
          backgrounImg="model.png"
          text1="396mi"
          text2="Range (EPA est)"
          text3="1.99s"
          text4="0-60 mph*"
          text5="200mph"
          text6="Top Speed+"
          text7="1,020hp"
          text8="Peak Pawer"
        />
        <Models
          title="All-New Inventer"
          description=""
          backgrounImg="allnew.png"
        />

        <Models
          title=""
          description=""
          backgrounImg="allnew2.png"
          text1=""
          text2=""
          text3=""
          text4=""
          text5=""
          text6=""
          text7=""
          text8=""
        />

        <Models
          title=""
          description=""
          backgrounImg="allnew4.png"
          text1=""
          text2=""
          text3=""
          text4=""
          text5=""
          text6=""
          text7=""
          text8=""
        />
        {/* <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="slider-test"
      > */}
        {/* slidesPerView={1}
        spaceBetween={50}
        loop={true}
        scrollbar={{ draggable: true }}
        navigation
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }} */}
        {/* > */}
        <Backgroud>
          <ModelsSlider>
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              className="slider-test"
              navigation={{
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }}
              autoplay={{ delay: 900 }}
            >
              <Fade bottom>
                <SwiperSlide>
                  <Sider>
                    <img src="/img/allnew1.png" alt="" />
                    <h3>17” Cinematic Display</h3>
                    <p>
                      With 2200x1300 resolution, ultra bright, true colors and
                      exceptional responsiveness, the new center display is the
                      best screen to watch anywhere.
                    </p>
                  </Sider>
                </SwiperSlide>
                <SwiperSlide>
                  <Sider>
                    <img src="/img/allnew2.png" alt="" />
                    <h3>Focus on Driving</h3>
                    <p>
                      The ultimate focus on driving: no stalks, no shifting.
                      Model S is the best car to drive, and the best car to be
                      driven in.
                    </p>
                  </Sider>
                </SwiperSlide>
                <SwiperSlide>
                  <Sider>
                    <img src="/img/allnew3.png" alt="" />
                    <h3> Prefer to Investment</h3>
                    <p>Keep going on the driving and focus on the way.</p>
                  </Sider>
                </SwiperSlide>
                <SwiperSlide>
                  <Sider>
                    <img src="/img/allnew4.png" alt="" />
                    <h3>Perfect Environment</h3>
                    <p>
                      Clean, powerful yet invisible cabin conditioning. Tri-zone
                      temperature controls, ventilated front seats and HEPA
                      filtration come standard.
                    </p>
                  </Sider>
                </SwiperSlide>
                <SwiperSlide>
                  <Sider>
                    <img src="/img/allnew5.png" alt="" />
                    <h3>Redesigned Second Row</h3>
                    <p>
                      Seating for three adults, with extra legroom, headroom and
                      a stowable armrest with integrated storage and wireless
                      charging.
                    </p>
                  </Sider>
                </SwiperSlide>
                <SwiperSlide>
                  <Sider>
                    <img src="/img/allnew.png" alt="" />
                    <h3>Demo of Car</h3>
                    <p>
                      Seating for three adults, with extra legroom, headroom and
                      a stowable armrest with integrated storage and wireless
                      charging.
                    </p>
                  </Sider>
                </SwiperSlide>
              </Fade>
              <Next className="swiper-button-next"></Next>
              <Next className="swiper-button-prev"></Next>
            </Swiper>
          </ModelsSlider>
          <SubImg>
            <ChildImg>
              <Fade bottom>
                <img src="/img/sub.png" alt="" />
                <BoxtText>
                  <h3>Game from Anywhere</h3>
                  <p>
                    Up to 10 teraflops of processing power enables in-car gaming
                    on-par with today’s newest consoles. Wireless controller
                    compatibility lets you game from any seat.
                  </p>
                </BoxtText>
              </Fade>
            </ChildImg>

            <ChildImg>
              <Fade bottom>
                <BoxtText>
                  <h3>Stay Connected</h3>
                  <p>
                    Multi-device Bluetooth, wireless and USB-C charging for
                    every passenger, with enough power to fast-charge your
                    tablets and laptop.
                  </p>
                </BoxtText>
                <img src="/img/sub1.png" alt="" />
              </Fade>
            </ChildImg>
            <ChildImg>
              <Fade bottom>
                <BoxtText>
                  <h3>Your Best Audio System</h3>
                  <p>
                    A 22-speaker, 960-watt audio system with Active Road Noise
                    Reduction offers the best listening experience wherever you
                    are.
                  </p>
                </BoxtText>
                <img src="/img/sub2.png" alt="" />
              </Fade>
            </ChildImg>

            <ChildImg>
              <Fade bottom>
                <img src="/img/sub3.png" alt="" />
                <BoxtText>
                  <h3>Game from Anywhere</h3>
                  <p>
                    Up to 10 teraflops of processing power enables in-car gaming
                    on-par with today’s newest consoles. Wireless controller
                    compatibility lets you game from any seat.
                  </p>
                </BoxtText>
              </Fade>
            </ChildImg>
            <ChildImg>
              <Fade bottom>
                <img src="/img/sub4.png" alt="" />
                <BoxtText>
                  <h3>Game from Anywhere</h3>
                  <p>
                    Up to 10 teraflops of processing power enables in-car gaming
                    on-par with today’s newest consoles. Wireless controller
                    compatibility lets you game from any seat.
                  </p>
                </BoxtText>
              </Fade>
            </ChildImg>
            <ChildImg>
              <Fade bottom>
                <BoxtText>
                  <h3>Real Storage</h3>
                  <p>
                    With front and rear trunks and fold-flat seats, Model S is a
                    luxury car where you can fit your bike without taking the
                    wheel off, and your luggage too.
                  </p>
                </BoxtText>
                <img src="/img/sub5.png" alt="" />
              </Fade>
            </ChildImg>
            <ChildImg>
              <Fade bottom>
                <img src="/img/sub5.png" alt="" />
                <BoxtText>
                  <h3>Real Storage</h3>
                  <p>
                    With front and rear trunks and fold-flat seats, Model S is a
                    luxury car where you can fit your bike without taking the
                    wheel off, and your luggage too.
                  </p>
                </BoxtText>
              </Fade>
            </ChildImg>
          </SubImg>
        </Backgroud>
        {/* ......
      </Swiper> */}
        <Models
          title=""
          description=""
          backgrounImg="model15.png"
          text1="1,020hp"
          text2="Peak Power"
          text3="9.23s"
          text4="@155 mph 1/4 mile"
          text5="1.99s"
          text6="0-60 mph*"
          text7=""
          text8=""
        />
        <Fotter>
          <h1>
            Paid <span>Beyond Ludicrous</span>
          </h1>
          <Button style={{ backgroundColor: "gray", color: "white" }}>
            Order now
          </Button>
          <h4>
            With the longest range and quickest acceleration of any electric
            vehicle in production, Model S Plaid is the highest performing sedan
            ever built. All Model S powertrains, with updated battery
            architecture, are capable of back-to-back, consistent 1/4 mile runs.
          </h4>
        </Fotter>
      </Container>
    </Fade>
  );
}

export default HomeModel;

const Fotter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 20px;
  h1 {
    font-size: 20px;
    color: black;
  }
  h4 {
    font-size: 15px;
  }
`;

const Backgroud = styled.div`
  background-color: black;
`;
const Container = styled.div`
  height: 100vh;
`;
const ModelsSlider = styled.div`
  display: flex;
  margin-left: 100px;
  margin-right: 100px;
`;
const Sider = styled.div`
  display: block;
  flex: 1;
  opacity: 1;
  img {
    display: flex;
    height: 90vh;
    width: 100vw;
  }
  h3 {
    font-size: 18px;
    padding: 10px;
    color: white;
  }
  p {
    color: white;
  }
`;
const Next = styled.div``;

const SubImg = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`;
const ChildImg = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 100px;
  margin-right: 100px;
  img {
    height: 50vh;
    width: 44vw;
  }
`;
const BoxtText = styled.div`
  display: inline-block;
  top:20%;
  align-items:center;
  h3 {
    position: relative;
    display: inline;
    font-size: 15px;
    color: #eee;
    margin-left: 30px;    
  }
  p {   
    color: #eee;
    align-items: center;
    margin-left: 30px;
    line-height: 1.8rem;
  }
  }
`;
