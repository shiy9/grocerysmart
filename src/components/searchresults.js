import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

const PageBase = styled.div`
  display: flex;
  justify-content: center;
  grid-area: main;
  margin-left: 0;
`;

const MainCatBase = styled.div`
  display: flex;
  justify-content: space-around;
  background: #D9D9D9;
  width: 100%;
  height: 66px;
  align-items: center;
`;

const MainCatButton = styled.button`
  width: 14%;
  align-items: center;
  background: #FFFFFF;
  border-radius: 30px;
  height: 41px;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #FEECAC;
  }
`;

export const SearchResults = () => {
    // const item = window.location.href.split("/").pop();
    const mainCat = ["Produce", "Meat and Seafood", "Dairy and Eggs", "Beverage",
        "Household", "Personal Care"];
    return (
        <PageBase>
            <MainCatBase>
                {mainCat.map((cat, idx) => (
                    <MainCatButton onClick={() => {
                        console.log("Clicked " + cat)
                    }} key={idx}>
                        <div>{cat}</div>
                    </MainCatButton>))}
            </MainCatBase>
        </PageBase>
    )
};
