"use strict";

import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { borderColor, fontFamily } from "@mui/system";
import  {useState} from 'react'

const HomeBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  font-size: 25px;
`;
const MainCatBase = styled.div`
  display: flex;
  justify-content: space-around;
  background: #D9D9D9;
  width: 100%;
  min-height: 66px;
  align-items: center;
`;

const MainCatButton = styled.button`
  width: 14%;
  align-items: center;
  background: #FFFFFF;
  border-radius: 30px;
  min-height: 41px;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
  &:hover {
    background-color: #FEECAC;
  }
`;
const mainCat = ["Produce", "Meat and Seafood", "Dairy and Eggs", "Beverage",
        "Household", "Personal Care"];
const srchBtnStyle = {
          // backgroundColor: "#000000",
          display: "flex",
          flexDirection: "row",
          borderRadius: "15px",
          cornerRadius: "30px",
          height: "43px",
          width: "131px",
          color:"black",
          border:"2px solid #000000",
          textTransform:"none"
          
      };
      
      
      // const searchBar = () => {
      
       
      // const [searchInput, setSearchInput] = useState("");

       
    //   const handleChange = (e) => {
    //     e.preventDefault();
    //     setSearchInput(e.target.value);
    //   };
      
    //   // if (searchInput.length > 0) {
    //   //     countries.filter((country) => {
    //   //     return country.name.match(searchInput);
    //   // });
    //   // }
      
    //   <div>
      
    //   <input
    //      type="search"
    //      placeholder="Search here"
    //      onChange={handleChange}
    //      value={searchInput} />
      
    //   </div>
      
      
      //  };
      
    
export const Home = () => (
    <HomeBase>
      <MainCatBase>
      
                {mainCat.map((cat, idx) => (
                    <MainCatButton onClick={() => {
                        console.log("Clicked " + cat)
                    }} key={idx}>
                        <div>{cat}</div>
                    </MainCatButton>))}
            </MainCatBase>
            <div style={{display:"flex", flexDirection:"column",height: "80%",width:"100%",textAlign: "center",alignItems:"center",justifyContent:"center",position: "fixed"}}>
            {/* <div style={{display:"flex", height: "80%",width:"100%",textAlign: "center",alignItems:"center",justifyContent:"center",verticalAlign:"middle"}}>  */}
            <div>Search for items to add to your list
            {/* </div> */}
            <div style={{width: "100%", textAlign: "center", marginTop: "30px",fontFamily:"inter"}}>
                        <Button style={srchBtnStyle}>Search</Button>
                    </div>
                    </div>
                    </div>
            
        {/* <h2>This is home page test commit</h2> */}
    </HomeBase>
);
