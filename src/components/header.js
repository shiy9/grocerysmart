import React, { Fragment, useEffect, useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled as muistyled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

const HeaderLeftBase = styled.div`
  flex-grow: 1;
  font-style: italic;

  & > a {
    text-decoration: none;

    & > h2 {
      font-family: "Inter";
      color: #e2c218;
      margin: 0.75em 0 0.75em 0.5em;
      font-weight: 700;
      font-style: normal;
      -webkit-text-stroke: 0.01px #feecac;
      font-size: 30px;
    }
  }
`;

const HeaderLeft = () => {
  return (
    <HeaderLeftBase>
      <Link to="/home">
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
    text-decoration: none;
    color: black;
    padding-right: 0.5em;
    font-family: Inter;
    font-weight: 700;
    font-size: 16px;
    margin-left: 5px;
    margin-right: 5px;
  }
`;

const SearchBarWrapper = styled.div`
  margin-right: 20px;
`;

const SearchBox = muistyled(TextField)(() => ({
  "& fieldset": {
    borderRadius: "25px",
  },
}));

const HeaderRight = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  useEffect(() => {
    setQuery("");
  }, []);

  const wishlistBtnTheme = createTheme({
    palette: {
      primary: {
        main: "#F19999",
        darker: "#a86b6b",
      },
    },
  });

  const cartBtnTheme = createTheme({
    palette: {
      primary: {
        main: "#FFC700",
        darker: "#CC9F00",
      },
    },
  });

  const searchHandler = (e) => {
    setQuery(e.target.value);
  };

  const submitHandler = (e) => {
    if (e.key === "Enter") {
      history.push("/search/" + query);
    }
  };

  return (
    <HeaderRightBase>
      <Fragment>
        <Link id="gethelp" to="/gethelp">
          Get Help
        </Link>
        <Link id="helpanother" to="/helpanother">
          Help Another
        </Link>
      </Fragment>
      <SearchBarWrapper>
        <SearchBox
          onChange={searchHandler}
          onKeyDown={submitHandler}
          variant={"outlined"}
          label={"Search"}
          size={"small"}
          style={{ borderRadius: 15 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </SearchBarWrapper>
      <Fragment>
        <Link id="signinLink" to="/signin">
          Sign In
        </Link>
        <Link id="signupLink" to="/signup">
          Sign Up
        </Link>
      </Fragment>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={0}
        marginRight="17px"
      >
        <ThemeProvider theme={cartBtnTheme}>
          <IconButton
            color="primary"
            aria-label="go to shopping cart"
            onClick={() => {
              console.log("Go to cart");
            }}
          >
            <ShoppingCartIcon fontSize={"large"} />
          </IconButton>
        </ThemeProvider>

        <ThemeProvider theme={wishlistBtnTheme}>
          <IconButton
            color="primary"
            aria-label="go to wish list"
            onClick={() => {
              console.log("Go to wish list");
            }}
          >
            <FavoriteIcon fontSize={"large"} />
          </IconButton>
        </ThemeProvider>
      </Stack>
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
  background: #a0d3f8;
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
