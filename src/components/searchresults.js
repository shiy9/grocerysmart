import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Button from "@mui/material/Button";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import inventory from "../data/inventory.json";
import selStores from "../data/selected-stores.json";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const PageBase = styled.div`
  display: inline;
  justify-content: center;
  grid-area: main;
  margin-left: 0;
`;

const MainCatBase = styled.div`
  display: flex;
  justify-content: space-around;
  background: #d9d9d9;
  width: 100%;
  min-height: 66px;
  align-items: center;
`;

const MainCatButton = styled.button`
  width: 14%;
  align-items: center;
  background: #ffffff;
  border-radius: 30px;
  min-height: 41px;
  font-size: 19px;
  font-weight: 400;
  letter-spacing: 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: #feecac;
  }
`;

const MainBase = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0;
`;

const SideBar = styled.div`
  flex: 3;
  background-color: #feecac;
`;

const HiddenSideBar = styled.div`
  flex: 1;
`;

const hideBtnStyle = {
  backgroundColor: "#D9D9D9",
  borderRadius: "15px",
  width: "50%",
  textColor: "black",
};

const unhideBtnStyle = {
  backgroundColor: "#D9D9D9",
  borderRadius: "15px",
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
    background-color: #feecac;
  }
`;

const MainContent = styled.div`
  flex: 24;
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
  color: #cf1010;
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
`;

const SecTitle = styled.div`
  width: auto;
  margin-top: 45px;
  align-items: flex-start;
`;

const AvailItemsText = styled.b`
  margin-left: 15px;
  border: 2px solid;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #505050;
  padding: 3px 10px 3px 10px;
`;

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-left: 10px;
`;
const OneItDisplay = styled.div`
  //width: 24%;
  width: 300px;
  height: 440px;
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
  color: #cf1010;
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
  font-size: 15px;
  font-weight: 400;
  margin-left: 17px;
  margin-bottom: 15px;
`;

const wishlistBtnTheme = createTheme({
  palette: {
    primary: {
      main: "#F19999",
      darker: "#a86b6b",
    },
  },
});

const OneItem = ({ itemInfo }) => {
  const invData = JSON.parse(JSON.stringify(inventory));
  const [inWishlist, setInWishlist] = useState(false);

  useEffect(() => {
    let listData;
    if (sessionStorage.getItem("wishlist") === null) {
      setInWishlist(false);
    } else {
      listData = JSON.parse(sessionStorage.getItem("wishlist"));
      listData.forEach((item) => {
        if (item["item-id"] === itemInfo["item-id"]) {
          setInWishlist(true);
        }
      });
    }
  }, []);

  const addToCart = () => {
    // sessionStorage.removeItem("cart");
    let cartData =
      sessionStorage.getItem("cart") === null
        ? []
        : JSON.parse(sessionStorage.getItem("cart"));
    let inCart = false;
    cartData.forEach((item) => {
      if (item["item-id"] === itemInfo["item-id"]) {
        inCart = true;
        ++item["quantity"];
      }
    });
    if (!inCart) {
      let tmp = { ...itemInfo };
      tmp["quantity"] = 1;
      cartData.push(tmp);
    }
    sessionStorage.setItem("cart", JSON.stringify(cartData));
    // JSON.parse(sessionStorage.getItem("cart")).forEach((item) => {
    //   console.log(item["item-name"]);
    //   console.log(item["quantity"]);
    // });
  };

  const toggleWishlist = () => {
    let listData =
      sessionStorage.getItem("wishlist") === null
        ? []
        : JSON.parse(sessionStorage.getItem("wishlist"));
    let inList = false;
    listData.forEach((item) => {
      if (item["item-id"] === itemInfo["item-id"]) {
        inList = true;
        ++item["quantity"];
      }
    });

    if (!inList) {
      // If it was not in list, add it
      setInWishlist(true);
      listData.push({ ...itemInfo });
    } else {
      // if it was in list, remove it
      setInWishlist(false);
      listData = listData.filter(
        (item) => item["item-id"] !== itemInfo["item-id"]
      );
    }
    sessionStorage.setItem("wishlist", JSON.stringify(listData));
  };

  return (
    <OneItDisplay>
      <PictureContainer>
        <PictureDisplay
          src={require("../data/images/" + itemInfo["pic-dir"])}
        ></PictureDisplay>
      </PictureContainer>
      <ItemTitle>{itemInfo["item-name"]}</ItemTitle>
      <PriceDisplay>
        <TotalPrice>${itemInfo["tot-price"]}</TotalPrice>
        <UnitPrice>
          ${itemInfo["unit-price"]}/{itemInfo["unit"]}
        </UnitPrice>
      </PriceDisplay>
      <ItemDetails>
        <div>{itemInfo["num-sold"]} sold</div>
        <div>Free Delivery Thu, Dec 1</div>
        <div>
          Available at{" "}
          {
            invData.filter(
              (store) => store["store-id"] === itemInfo["storeid"]
            )[0]["store-name"]
          }
          ,{" "}
          {
            invData.filter(
              (store) => store["store-id"] === itemInfo["storeid"]
            )[0]["location"]
          }
        </div>
      </ItemDetails>
      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        spacing={0}
        marginRight="17px"
      >
        <ThemeProvider theme={wishlistBtnTheme}>
          <IconButton
            color="primary"
            aria-label="add to wish list"
            onClick={toggleWishlist}
          >
            {inWishlist ? (
              <FavoriteIcon fontSize={"large"} />
            ) : (
              <FavoriteBorderIcon fontSize={"large"} />
            )}
          </IconButton>
        </ThemeProvider>
        <IconButton
          color="primary"
          aria-label="add to shopping cart"
          onClick={addToCart}
        >
          <AddShoppingCartIcon fontSize={"large"} />
        </IconButton>
      </Stack>
    </OneItDisplay>
  );
};

export const SearchResults = () => {
  const [searchKey, setSearchKey] = useState("");
  const [avail, setAvail] = useState([]);
  const [unavail, setUnavail] = useState([]);
  const [hideSideBar, setHideSideBar] = useState(false);

  useEffect(() => {
    const searchItem = window.location.href.split("/").pop();
    let tmp1 = [];
    let tmp2 = [];
    const invData = JSON.parse(JSON.stringify(inventory));
    const storeData = JSON.parse(JSON.stringify(selStores));
    invData.forEach((store) => {
      if (storeData.includes(store["store-id"])) {
        tmp1 = tmp1.concat(
          store["items"].filter((item) =>
            item["item-name"].toUpperCase().includes(searchItem.toUpperCase())
          )
        );
      } else {
        tmp2 = tmp2.concat(
          store["items"].filter((item) =>
            item["item-name"].toUpperCase().includes(searchItem.toUpperCase())
          )
        );
      }
    });
    setSearchKey(searchItem);
    setAvail(tmp1);
    setUnavail(tmp2);
  }, []);

  const mainCat = [
    "Produce",
    "Meat and Seafood",
    "Dairy and Eggs",
    "Beverage",
    "Household",
    "Personal Care",
  ];
  const subCat = ["Beef", "Chicken", "Mutton", "Pork", "Fish", "Seafood"];

  return (
    <PageBase>
      <MainCatBase>
        {mainCat.map((cat, idx) => (
          <MainCatButton
            onClick={() => {
              console.log("Clicked " + cat);
            }}
            key={idx}
          >
            <div>{cat}</div>
          </MainCatButton>
        ))}
      </MainCatBase>
      <MainBase>
        {hideSideBar ? (
          <HiddenSideBar>
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "30px" }}
            >
              <Button
                style={unhideBtnStyle}
                startIcon={<ChevronRightIcon />}
                onClick={() => {
                  setHideSideBar(false);
                }}
              ></Button>
            </div>
          </HiddenSideBar>
        ) : (
          <SideBar>
            <div
              style={{ width: "100%", textAlign: "center", marginTop: "30px" }}
            >
              <Button
                style={hideBtnStyle}
                startIcon={<ChevronLeftIcon />}
                onClick={() => {
                  setHideSideBar(true);
                }}
              >
                Hide
              </Button>
            </div>
            <div
              style={{
                width: "100%",
                textAlign: "center",
                marginTop: "30px",
                marginBottom: "30px",
                fontSize: "25px",
                fontWeight: "700",
              }}
            >
              Categories
            </div>

            {subCat.map((cat, idx) => (
              <div key={idx}>
                <SubCatButton
                  onClick={() => {
                    console.log("Clicked " + cat);
                  }}
                >
                  <div>{cat}</div>
                </SubCatButton>
              </div>
            ))}
          </SideBar>
        )}

        <MainContent>
          <FirstRow>
            <SearchResDisplay>
              Search Results for "{searchKey}"
            </SearchResDisplay>
            <SortSelectorContainer>
              <SortSelector>
                <option value={"best-seller"}>Sorted by (Best Sellers)</option>
                <option value={"price-low-high"}>
                  Sorted by (Price Low-to-High)
                </option>
                <option value={"price-high-low"}>
                  Sorted by (Price High-to-Low)
                </option>
              </SortSelector>
            </SortSelectorContainer>
          </FirstRow>
          <SecTitle>
            <AvailItemsText>Items Available in Selected Stores</AvailItemsText>
          </SecTitle>
          <ItemsContainer>
            {avail.map((itemInfo, idx) => (
              <OneItem itemInfo={itemInfo} key={idx} />
            ))}
          </ItemsContainer>
          <SecTitle>
            <AvailItemsText>
              Items Not Available in Selected Stores
            </AvailItemsText>
          </SecTitle>
          <ItemsContainer>
            {unavail.map((itemInfo, idx) => (
              <OneItem itemInfo={itemInfo} key={idx} />
            ))}
          </ItemsContainer>
        </MainContent>
      </MainBase>
    </PageBase>
  );
};
