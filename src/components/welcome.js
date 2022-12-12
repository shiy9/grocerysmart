"use strict";

import React from "react";
import styled from "styled-components";

const HomeBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
`;
const CenterWindow = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
  background: #0D588E;
`;

export const Welcome = () => (
    <HomeBase>
      <CenterWindow>
        <h2>This is welcome page</h2>
        </CenterWindow>
    </HomeBase>
);