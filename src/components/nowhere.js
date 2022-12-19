"use strict";

import React from "react";
import styled from "styled-components";

const HomeBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
`;

export const NoWhere = () => (
  <HomeBase>
    <h2>A dummy page that was not to be implemented :)</h2>
  </HomeBase>
);
