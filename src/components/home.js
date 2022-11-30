"use strict";

import React from "react";
import styled from "styled-components";

const HomeBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
`;

export const Home = () => (
    <HomeBase>
        <h2>This is home page</h2>
    </HomeBase>
);
