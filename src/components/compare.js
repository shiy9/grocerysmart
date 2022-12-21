import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import inventory from "../data/inventory.json";
import priceCompare from "../data/priceCompare.json";
import cart from "../data/cart.json";
import selStores from "../data/selected-stores.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useNavigate, useHistory } from "react-router-dom";
import { AlignHorizontalLeft, Diversity1 } from "@mui/icons-material";
// import Table from 'react-bootstrap/Table';

const HomeBase = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
  background: hsla(202, 54%, 94%, 1);
  height: 100vh;
`;

const BackButton = styled.button`
  // width: 14%;
  align-items: left;
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
const hideBtnStyle = {
  backgroundColor: "hsla(205, 86%, 80%, 1)",
  borderRadius: "15px",
  width: "15%",
  textColor: "black",
  alignItems: "flex-start",
  borderCcolor: "hsla(205, 83%, 30%, 1)",
  textTransform: "none",
};
const deleteBtnStyle = {
  marginLeft: "20%",
  marginTop: "60%",
  backgroundColor: "hsla(205, 86%, 80%, 1)",
  borderRadius: "40px",
  width: "41px",
  height: "40px",
  // width:'41px',
  textColor: "black",
  alignItems: "flex-start",
  borderCcolor: "hsla(205, 83%, 30%, 1)",
  textTransform: "none",
  marginBottom: "100px",
  minWidth: "unset",
};
const storeBtnStyle = {
  backgroundColor: "hsla(205, 86%, 80%, 1)",
  borderRadius: "15px",
  width: "50%",
  textColor: "black",
  alignItems: "justified",
  textTransform: "none",
  borderCcolor: "hsla(205, 83%, 30%, 1)",
  marginLeft: "25%",
  marginBottom: "10px",
  marginTop: "4%",
};
const backBtnStyle = {
  backgroundColor: "hsla(0, 86%, 44%, 1)  ",
  borderRadius: "15px",
  width: "50",
  textColor: "white",
  alignItems: "justified",
  borderCcolor: "hsla(205, 83%, 30%, 1)",
  textTransform: "none",
  marginLeft: "25%",
  marginBottom: "10px",
  color: "white",
};
const checkoutBtnStyle = {
  backgroundColor: "hsla(119, 67%, 43%, 0.59)",
  borderRadius: "15px",
  width: "50",
  textColor: "hsla(0, 0%, 100%, 1)",
  alignItems: "justified",
  borderCcolor: "hsla(205, 83%, 30%, 1)",
  textTransform: "none",
  marginLeft: "25%",
  marginBottom: "10px",
  color: "white",
};
const ItemsContainer = styled.div`
  display: flex;

  // flex-wrap: wrap;
  // margin-top: 20px;
  // margin-left: 10px;
  // margin-top: 10%;
`;
const OneItDisplay = styled.div`
  //width: 24%;
  width: 300px;
  height: 200px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #d9d9d9;
  justify-content: center;
`;
const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 220px;
`;

const PictureDisplay = styled.img`
  max-width: 100%;
  height: 80%;
`;

const ItemTitle = styled.div`
  font-size: 19px;
  font-weight: 700;
  color: black;
  margin-left: 13px;
  margin-bottom: 15px;
  margin-right: 13px;
`;

const PriceDisplay = styled.div`
  display: flex;
  margin-left: 17px;
  margin-bottom: 15px;
  align-items: center;
`;

const TotalPrice = styled.div`
  flex: 1;
  font-size: 19px;
  font-weight: 700;
  color: #cf1010;
  text-align: left;
`;
const OneItem = ({ itemInfo }) => {
  itemInfo = itemInfo[0];
  console.log("I am in item info");
  console.log(itemInfo);
  // console.log('Hia an here')
  const invData = JSON.parse(JSON.stringify(inventory));
  return (
    <OneItDisplay
      style={{
        backgroundColor: "white",
        display: "flex",
        flexdirection: "row",
      }}
    >
      <PictureContainer>
        <PictureDisplay
          src={require("../data/images/" + itemInfo["pic-dir"])}
        ></PictureDisplay>
      </PictureContainer>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignContent: "center",
          marginTop: "20%",
        }}
      >
        <ItemTitle>{itemInfo["item-name"]}</ItemTitle>
        <PriceDisplay>
          <TotalPrice>${itemInfo["tot-price"]}</TotalPrice>
        </PriceDisplay>
        {DropDown()}
      </div>
      {/* <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={0}
              marginRight="17px"
          >


          </Stack> */}
    </OneItDisplay>
  );
};
const DropDown = () => {
  const [value, setValue] = React.useState("fruit");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div style={{ alignItems: "right", marginLeft: "50%" }}>
      <label>
        <select
          value={value}
          onChange={handleChange}
          style={{
            borderColor: "hsla(0, 0%, 65%, 1)",
            background: "hsla(0, 0%, 93%, 1)",
            borderRadius: "10px",
          }}
        >
          <option value="Qty:1">Qty:1</option>
          <option value="Qty:2">Qty:2</option>
          <option value="Qty:3">Qty:3</option>
          <option value="Qty:4">Qty:4</option>
          <option value="Qty:5">Qty:5</option>
        </select>
      </label>
    </div>
  );
};
const addDeleteButton = () => {
  return <Button style={deleteBtnStyle}> - </Button>;
};
const addDelete = (store_num) => {
  let temp = [];
  for (let i = 0; i < store_num; i++) {
    temp.push(addDeleteButton());
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "10%" }}>
      {temp}
    </div>
  );
};
const AddDiv = (store_cart, store_name, total) => {
  console.log("-----in add Div", store_cart);
  return (
    <div>
      <div
        style={{
          disply: "flex",
          flexDirection: "row",
          background: "white",
          marginLeft: "3px",
        }}
      >
        <Button style={storeBtnStyle}> {store_name}</Button>
        {store_cart.map((itemInfo, idx) => (
          <OneItem itemInfo={itemInfo} key={idx} />
        ))}
      </div>
      <div style={{ color: "red", alignContent: "center", marginLeft: "40%" }}>
        ${total}
      </div>
    </div>
  );
};
const store_map = (
  store_cart,
  store_num,
  cart_num,
  storeData,
  invData,
  total
) => {
  let temp = [];
  for (let i = 0; i < store_num; i++) {
    temp.push(
      AddDiv(store_cart[i], invData[storeData[i]]["store-name"], total[i])
    );
  }
  console.log(temp);
  return temp;
};

export const Compare = () => {
  let history = useHistory();
  const backredirect = () => {
    history.push("/cart");
  };

  const redirect = () => {
    history.push("/checkout");
  };
  // const cartData = JSON.parse(JSON.stringify(cart));
  const cartData = JSON.parse(JSON.stringify(cart));

  const cartCompare = JSON.parse(JSON.stringify(priceCompare));
  const invData = cartCompare;
  const storeData = new Array(invData.length);
  for (let i = 0; i < storeData.length; i++) {
    storeData[i] = i;
  }
  console.log("storee", storeData);
  let store_cart = new Array(storeData.length);
  let total = new Array(storeData.length);
  for (let i = 0; i < storeData.length; i++) {
    total[i] = 0;
  }
  for (let i = 0; i < storeData.length; i++) {
    store_cart[i] = [];
  }

  for (let i = 0; i < cartData.length; i++) {
    for (let j = 0; j < storeData.length; j++) {
      if (
        invData[storeData[j]]["items"].filter((item) =>
          item["item-name"].includes(cartData[i]["item-name"])
        )
      ) {
        total[j] =
          total[j] +
          invData[storeData[j]]["items"].filter((item) =>
            item["item-name"].includes(cartData[i]["item-name"])
          )[0]["tot-price"];

        store_cart[j].push(
          invData[storeData[j]]["items"].filter((item) =>
            item["item-name"].includes(cartData[i]["item-name"])
          )
        );
      } else
        store_cart[j].push([
          { "pic-dir": "none.png", "item-name": " ", "tot-price": 0 },
        ]);
    }
  }
  console.log("total:", total);

  return (
    <HomeBase>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "-5%",
          marginLeft: "3%",
        }}
      >
        <div style={{ width: "50%" }}>
          <Button
            style={hideBtnStyle}
            startIcon={<ChevronLeftIcon />}
            onClick={backredirect}
          >
            Cart
          </Button>
        </div>
        <div style={{ width: "110%" }}>
          Please select the store that you prefer
        </div>
      </div>
      <div>
        <ItemsContainer
          id="main"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            marginTop: "2%",
            alignSelf: "center",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <div style={{ alignSelf: "flex-end" }}>Total:</div>

          {
            // store_cart[0].map(item ).map((itemInfo, idx) => <OneItem itemInfo={itemInfo} key={idx}/>)}
            store_map(
              store_cart,
              storeData.length,
              cartData.length,
              storeData,
              invData,
              total
            )
          }
          {addDelete(cart.length)}
        </ItemsContainer>
      </div>
      {/* <div style={{width: "50%",display:'flex',marginLeft:'25%',flexDirection:'row'}}>total:{totalCal(total)}</div> */}
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginLeft: "3%",
          marginTop: "3%",
        }}
      >
        <div style={{ width: "50%", textColor: "white", marginLeft: "25%" }}>
          <Button style={backBtnStyle} onClick={backredirect}>
            Back
          </Button>
          <Button style={checkoutBtnStyle} onClick={redirect}>
            Checkout
          </Button>
        </div>
      </div>
    </HomeBase>
  );
};
