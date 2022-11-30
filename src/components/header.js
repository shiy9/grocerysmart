"use strict";

import React, {Fragment} from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";


const fontColor = "#c4a1a1";

const HeaderLeftBase = styled.div`
  flex-grow: 1;
  font-style: italic;

  & > a {
    text-decoration: none;
    & > h2 {
      color: ${fontColor};
      margin: 0.75em 0 0.75em 0.5em;
    }
  }
`;

const HeaderLeft = () => {
    return (
        <HeaderLeftBase>
            <Link to='/'>
                <h2>GrocerySmart</h2>
            </Link>
        </HeaderLeftBase>
    );
};

// For future use
// HeaderLeft.propTypes = {
//
// };

/*************************************************************************/

const HeaderRightBase = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-right: 0.5em;

  & > a {
    color: ${fontColor};
    padding-right: 0.5em;
  }
`;

const HeaderRight = () => {
    return (
        <HeaderRightBase>
            <Fragment>
                <Link id="signinLink" to="/signin">
                    Sign In
                </Link>
                <Link id="signupLink" to="/signup">
                    Sign Up
                </Link>
            </Fragment>
        </HeaderRightBase>
    );
};

// For future use
// HeaderRight.propTypes = {
//
// };

/*******************************************************************/

const HeaderBase = styled.div`
  grid-area: hd;
  display: flex;
  background: #000;
  //height: 50px;
`;

export const Header = () => (
    <HeaderBase>
        <HeaderLeft />
        <HeaderRight />
    </HeaderBase>
);

// For future use
// Header.propTypes = {
//
// };
