import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import inventory from "../data/inventory.json"
import cart from "../data/cart.json"
import selStores from "../data/selected-stores.json"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {Routes, Route, useNavigate,useHistory} from 'react-router-dom';
import { AlignHorizontalLeft } from "@mui/icons-material";
// import Table from 'react-bootstrap/Table';



const HomeBase = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
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
  alignItems:'flex-start',
  borderCcolor: "hsla(205, 83%, 30%, 1)",
  textTransform:"none"
};
const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  // margin-top: 20px;
  // margin-left: 10px;
  // margin-top: 10%;
`;
const OneItDisplay = styled.div`
  //width: 24%;
  width: 300px;
  height: 250px;
  margin-bottom: 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #D9D9D9;
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
  max-height: 80%;
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
  color: #CF1010;
  text-align: left;
`;

const UnitPrice = styled.div`
  flex: 3;
  font-size: 15px;
  font-weight: 700;
  color: #505050;
  text-align: left;
`;

const ItemDetails = styled.div`
  font-size: 13px;
  font-weight: 400;
  margin-left: 17px;
  margin-bottom: 15px;
`;
const OneItem = ({itemInfo}) => {
  console.log(itemInfo)
  // console.log('Hia an here')
  const invData = JSON.parse(JSON.stringify(inventory));
  return (
   
      <OneItDisplay style={{backgroundColor:'hsla(206, 47%, 74%, 1)'}}>
          <PictureContainer>
              <PictureDisplay src={require("../data/images/" + itemInfo["pic-dir"])}></PictureDisplay>
          </PictureContainer>
          <ItemTitle>{itemInfo["item-name"]}</ItemTitle>
          <PriceDisplay>
              <TotalPrice>${itemInfo["tot-price"]}</TotalPrice>
              
          </PriceDisplay>
          <Stack
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={0}
              marginRight="17px"
          >
              
                  
          </Stack>
      </OneItDisplay>
 
  )
};
const AddDiv =(store_cart) => {
  return (
    <div style={{disply:'flex',flexDirection:'row'}}>
      {store_cart.map((itemInfo, idx) => <OneItem itemInfo={itemInfo} key={idx}/>)}
    </div>
  );
};
const store_map =(store_cart,store_num,cart_num) =>{
  let temp=[]
  for (let i=0;i<cart_num;i++){
    
    // for (let j=0;j<store_num;j++){
    //   console.log('in store_map')
       temp.push(AddDiv(store_cart[i]))
    //  temp.push(OneItem(store_cart[j][i][0]))
    // }
    // temp.push(<AddDiv key={i}/>)

    }
    console.log(temp)
    return temp;
  }

  // const store_map_html =(store_cart,store_num,cart_num) =>{
  //   let temp=[]
  //   for (let i=0;i<cart_num;i++){
  //     <></>
  //     { 
  //       // store_cart[0].map(item ).map((itemInfo, idx) => <OneItem itemInfo={itemInfo} key={idx}/>)}
  //       store_map(store_cart,1,2)
  //       }
  //   }
  
export const Compare = () => {

        let history = useHistory();
       

        const redirect = () => {
          history.push('/')
        }
        const cartData = JSON.parse(JSON.stringify(cart));
        const storeData = JSON.parse(JSON.stringify(selStores));
        const invData = JSON.parse(JSON.stringify(inventory));
        const cartCompare=new Array(storeData.length) 
        let store_cart = new Array(storeData.length);
        for (let i=0;i<cartData.length;i++){
          store_cart[i]=new Array(cartData.length)
        }
        let x=0;
        // console.log(cartData)
        for (let i=0;i<cartData.length;i++){
          for (let j=0;j<storeData.length;j++){
          if(invData[storeData[j]]['items'].filter(item => item["item-name"].includes(cartData[i]['item-name']))){
          // store_cart[j][i]
          
          // .filter(item => item["item-name"].includes(cartData[i]['item-name']))));
          store_cart[j][i]=invData[storeData[j]]["items"].filter(item => item["item-name"].includes(cartData[i]['item-name']));
        x=1;  
        }
          else 
          store_cart[j][i]=null;
          }

        }
        // console.log(store_map(store_cart,2,2))
        // console.log(store_cart[0][0][0]['pic-dir'])
        // for (i in cartData)
        // for (let id in storeData){}
        // for (let id in cartData) {
        //     if (storeData.includes(id)) {
        //         tmp1 = tmp1.concat(invData[id]["items"].filter(item => item["item-name"].toUpperCase().includes(searchItem.toUpperCase())));
        //     } else {
        //         tmp2 = tmp2.concat(invData[id]["items"].filter(item => item["item-name"].toUpperCase().includes(searchItem.toUpperCase())));
        //     }
        // }
  

    
    return (
      <HomeBase>
        <div style={{display:'flex',marginTop:'3%',marginLeft:'3%'}}>
        <div style={{width: "50%",backgroundColor:'yellow'}}>
                        <Button style={hideBtnStyle} startIcon={<ChevronLeftIcon/>}>Cart</Button>
                        </div>
      <div style={{width: "110%",backgroundColor:'red'}}>
      Please select the store that you prefer
      </div></div> 
       <div style={{flex:'5',backgroundColor:'blue'}}> 
        yes
       {/* <ItemsContainer style={{backgroundColor:'blue'}}>
                        { 
                        // store_cart[0].map(item ).map((itemInfo, idx) => <OneItem itemInfo={itemInfo} key={idx}/>)}
                        store_map(store_cart,1,2)
                        } */}
                        {/* </ItemsContainer>  */}
                        <ItemsContainer style={{backgroundColor:'blue', display:'flex',flexDirection:'column'}}>
                        { 
                        // store_cart[0].map(item ).map((itemInfo, idx) => <OneItem itemInfo={itemInfo} key={idx}/>)}
                        store_map(store_cart,2,2)
                        }
                        </ItemsContainer> 
                        </div>
                      
                        
      </HomeBase>
    )
};
