"use strict";

import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import { borderColor, fontFamily } from "@mui/system";
import  {useState} from 'react'
import {Routes, Route, useNavigate,useHistory} from 'react-router-dom';

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
          width: "10%",
          color:"black",
          border:"2px solid #000000",
          textTransform:"none",
          alignItems: 'right',
          marginLeft: '3%',
          fontSize: '19px'
      };
      // const styles = StyleSheet.create({
      //   input: {
      //     height: 40,
      //     // width: 100,
      //     margin: 12,
      //     borderWidth: 1,
      //     padding: 10,
      //   },
      // });
      
      
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
      

      // const searchBar = () => {

      //   const [searchInput, setSearchInput] = useState("");
       
      //   const countries = [
      //     {category: "Meat and Seafood", subCategory: "Beef" },
      //     { category: "Meat and Seafood", subCategory: "Chicken" },
      //     { category: "Meat and Seafood", subCategory: "Mutton" },
      //     { category: "Meat and Seafood", subCategory: "Pork" },
      //     { category: "Meat and Seafood", subCategory: "Fish" },
      //     { category: "Meat and Seafood", subCategory: "Seafood" },
      //     { category: "Produce", subCategory: "Fruits" },
      //     { category: "Dairy and Eggs", subCategory: "Eggs" },
      //     { category: "Beverage", subCategory: "Soft Drinks" },
      //     { category: "Household", subCategory: "Cleaning" },
      //     { category: "Personal Care", subCategory: "Hair Care" }
          
      //   ];
      //   const handleChange = (e) => {
      //     e.preventDefault();
      //     setSearchInput(e.target.value);
      //   };
      //   return({})
      // } ;
export const Home = () => {
  
  const [searchInput, setSearchInput] = useState("");

       
      const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      let history = useHistory();

  const redirect = () => {
    history.push('/search/'+searchInput)
  }
      
    
      return(
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
            <div>Search for items to add to your list</div>
            {/* </div> */}
            <div style={{display:"flex", flexFlow:"row wrap",width: "100%", textAlign: "center", marginTop: "30px",fontFamily:"inter"}}>
            
            <input 
   type="search"
   placeholder=""
   style={{width: "50%",height:'43px',alignItems:'center',marginLeft:'15%',border:"2px solid #000000",fontSize: '19px'}}
   onChange={handleChange}
   value={searchInput} />
   
                       <Button style={srchBtnStyle} onClick={redirect}>Search</Button>
                   
                    </div>
                    </div>
            <img src="src/data/images/home.jpeg"/>
        {/* <h2>This is home page test commit</h2> */}
    </HomeBase>
      )
};
