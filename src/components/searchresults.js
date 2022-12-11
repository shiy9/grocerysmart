import React from "react";
import styled from "styled-components";
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const PageBase = styled.div`
  display: inline;
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

const MainBase = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
`;

const SideBar = styled.div`
  //height: auto;
  //width: 13%;
  flex: 1;
  background-color: #A0D3F8;
`;

const hideBtnStyle = {
    backgroundColor: "#D9D9D9",
    borderRadius: "15px",
    width: "50%",
    textColor: "black"
};

const SubCatButton = styled.button`
  align-items: center;
  height: 41px;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;
  border: none;
  background: none;
  width: 100%;

  &:hover {
    background-color: #FEECAC;
  }
`;

const MainContent = styled.div`
  flex: 6;
`;

const FirstRow = styled.div`
  display: flex;
  width: 100%;
  margin-top: 15px;
  align-items: center;
`;

const SearchResDisplay = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 19px;
  color: #CF1010;
  padding-left: 35px;
`;

const SortSelectorContainer = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 35px;
`;

const SortSelector = styled.select`
  font-size: 15px;
  font-weight: 700;
`

export const SearchResults = () => {
    const item = window.location.href.split("/").pop();
    const mainCat = ["Produce", "Meat and Seafood", "Dairy and Eggs", "Beverage",
        "Household", "Personal Care"];
    const subCat = ["Beef", "Chicken", "Mutton", "Pork", "Fish", "Seafood"];
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
            <MainBase>
                <SideBar>
                    <div style={{width: "100%", textAlign: "center", marginTop: "30px"}}>
                        <Button style={hideBtnStyle} startIcon={<ChevronLeftIcon/>}>Hide</Button>
                    </div>
                    <div style={{
                        width: "100%", textAlign: "center", marginTop: "30px", marginBottom: "30px",
                        fontSize: "25px", fontWeight: "700"
                    }}>
                        Categories
                    </div>

                    {subCat.map((cat, idx) => (
                        <div key={idx}>
                            <SubCatButton onClick={() => {
                                console.log("Clicked " + cat)
                            }}>
                                <div>{cat}</div>
                            </SubCatButton>
                        </div>
                    ))}
                </SideBar>
                <MainContent>
                    <FirstRow>
                        <SearchResDisplay>Search Results for "{item}"</SearchResDisplay>
                        <SortSelectorContainer>
                            <SortSelector>
                                <option value={"best-seller"}>Sorted by (Best Sellers)</option>
                                <option value={"price-low-high"}>Sorted by (Price Low-to-High)</option>
                                <option value={"price-high-low"}>Sorted by (Price High-to-Low)</option>
                            </SortSelector>
                        </SortSelectorContainer>
                    </FirstRow>
                </MainContent>
            </MainBase>
        </PageBase>
    )
};
