"use strict";

import React from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import { Routes, Route, useNavigate, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom";

const HomeBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
`;
const StartButton = styled.button`
  width: 14%;
  align-items: center;
  background: hsla(205, 86%, 80%, 1);
  border-radius: 30px;
  min-height: 41px;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
  border-color: hsla(205, 83%, 30%, 1);
`;
const CenterWindow = styled.div`
  justify-content: center;
  grid-area: main;
  font-size: 25px;
  background-color: hsla(205, 69%, 90%, 0.95);
  // background: linear-gradient(0deg, #0D588E, #0D588E),
  // linear-gradient(0deg, rgba(214, 233, 248, 0.77), rgba(214, 233, 248, 0.77));
  height: 60%;
  width: 50%;
  border: 2px solid #0d588e;
`;
const BackgroundImage = styled.div`
  background-color: orange;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-image: url("/welcome.png");
  position: fixed;
  top: 8%;

  height: 100%;
  width: 100%;
  margin: auto;
`;

// const navigate = useNavigate();

export const Welcome = () => {
  // const navigate = useHistory();
  // const navigateHome = () => {
  //   // 👇️ navigate to /
  //   navigate('/');
  // };
  let history = useHistory();

  const redirect = () => {
    history.push("/storeselect");
  };

  return (
    <HomeBase>
      <BackgroundImage>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "80%",
            width: "100%",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            position: "fixed",
          }}
        >
          <CenterWindow>
            <div style={{ fontWeight: "bold", marginTop: "5%" }}>
              Welcome to Grocery Smart!
            </div>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "bold",
                marginTop: "4%",
                marginLeft: "2%",
                marginRight: "2%",
              }}
            >
              <p>
                Want to find the best grocery prices from your favorite stores?
                GrocerySmart will save you trips to the stores and provide the
                best prices! We offer simple price comparisons and delivery
                services. Start by entering your preferred stores and your
                grocery list.
              </p>
              <p>
                Need help ordering groceries? Learn more about our Help Another
                Program, where other users can help you order. Or simply share
                our website or the QR code below with a trusted friend or family
                member!
              </p>
            </div>
            <div
              style={{
                display: "flex",
                fontSize: "16px",
                fontWeight: "bold",
                marginLeft: "2%",
                marginRight: "2%",
              }}
            >
              <div>
                <u>Website:</u>
                <br></br>www.grocerysmart.com
              </div>
              <div style={{ flex: "3", textAlign: "right", marginRight: "2%" }}>
                QR Code:
              </div>

              <div style={{ flex: "2" }}>
                <img
                  style={{ maxWidth: "100%", maxHeight: "60%" }}
                  src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"
                  // width={30%}
                  // height={80}
                  class="qr-code img-thumbnail img-responsive"
                />
                {/* </div> */}
              </div>
            </div>
            <div
              style={{
                textAlign: "center",
                fontFamily: "inter",
              }}
            >
              {/* <Button style={{}}>Start</Button> */}
              <StartButton onClick={redirect}>Start</StartButton>
            </div>
          </CenterWindow>
        </div>
      </BackgroundImage>
    </HomeBase>
  );
};
