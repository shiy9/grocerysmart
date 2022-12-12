"use strict";

import React from "react";
import PropTypes from "prop-types"; // for prop type checking
import styled from "styled-components";


// Example of prop-type usage, could be helpful later as well
export const ErrorMessage = ({ msg = "", hide = false }) => {
    return (
        <div></div>
        // <ErrorBase style={{ display: hide ? "none" : "inherit" }}>{msg}</ErrorBase>
    );
};

ErrorMessage.propTypes = {
    msg: PropTypes.string,
    hide: PropTypes.bool,
};

// Example of a styled component
// TODO: rename or delete later
export const Button = styled.button`
  max-width: 200px;
  min-width: 150px;
  max-height: 2em;
  background: #6495ed;
  border: none;
  border-radius: 5px;
  line-height: 2em;
  font-size: 0.8em;
`;
