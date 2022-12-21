import React, { useEffect, useState } from "react";
import inventory from "../data/inventory.json";
import IconButton from "@mui/material/IconButton";
import styled from "styled-components";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link, useHistory } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Switch from "@mui/material/Switch";
import Typography from "@mui/material/Typography";
import { styled as muistyled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { Fragment } from "react";
import RoomIcon from "@mui/icons-material/Room";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { accordionSummaryClasses } from "@mui/material";

const PageBase = styled.div`
  margin: 30px 20px 30px 20px;
  display: inline;
  justify-content: center;
  grid-area: main;
`;

const MainSection = styled.div`
  border: 2px solid black;
`;

const FirstRowBase = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;

const FirRowLeft = styled.div`
  flex: 1;
  font-weight: 700;
  font-size: 16px;
  color: black;
  padding-left: 15px;
`;

const FirRowRight = styled.div`
  flex: 1;
  text-align: right;
  padding-right: 15px;
`;

const SecRowBase = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid black;
  padding-bottom: 10px;
`;

const ToggleSection = styled.div`
  flex: 1;
  min-width: 350px;
  padding-left: 15px;
`;

const AddressSection = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
`;

const ReminderText = styled.div`
  flex: 3;
  color: #bb0909;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
`;

const TitleText = styled.div`
  width: 100%;
  font-weight: 700;
  font-size: 34px;
  text-align: center;
  margin-top: 15px;
`;

const ListMapBase = styled.div`
  display: flex;
  width: 100%;
`;

const ListBase = styled.div`
  flex: 1;
`;

const SearchLabel = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: black;
  padding-left: 15px;
  margin-bottom: 10px;
`;

const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 50%;
`;

const MapDisplay = styled.img`
  margin-top: 15px;
  max-width: 100%;
  max-height: 100%;
`;

const Stores = styled.div`
  scroll-behavior: smooth;
  overflow-y: scroll;
  max-height: 800px;
`;

const OneStoreBase = styled.div`
  display: flex;
  min-height: 150px;
  margin-bottom: 15px;
`;

const MarkerIconBase = styled.div`
  flex: 1;
  text-align: center;
`;

const StoreInfo = styled.div`
  flex: 10;
`;

const StoreTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  color: black;
  margin-bottom: 10px;
`;

const AddrDistance = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
`;

const HoursDeliveryFee = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 18px;
`;

const addBtnTheme = createTheme({
  palette: {
    primary: {
      main: "#3195DDC2",
      darker: "#97ACBC",
    },
  },
});

const SelectedDoneBtn = styled.div`
  display: flex;
  margin-bottom: 15px;
`;

const SelectedStores = styled.div`
  margin-top: 25px;
  flex: 1;
`;

const StoreDispWrapped = styled.div`
  margin-left: 15px;
  scroll-behavior: smooth;
  overflow-y: scroll;
  max-height: 200px;
`;

const StoreEntry = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const DoneBtnContainer = styled.div`
  flex: 1;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const BottomSection = styled.div`
  display: flex;
  width: 100%;
  border: 2px solid black;
`;

const ZipcodeSection = styled.div`
  flex: 1;
  border-right: 2px solid black;
`;

const OneStore = ({ storeInfo }) => {
  const [storeAdded, setStoreAdded] = useState(false);

  const toggleAdd = () => {
    let selStores =
      sessionStorage.getItem("sel-stores") === null
        ? []
        : JSON.parse(sessionStorage.getItem("sel-stores"));
    if (storeAdded) {
      selStores = selStores.filter(
        (s) => s["store-id"] !== storeInfo["store-id"]
      );
    } else {
      selStores.push(storeInfo);
    }
    sessionStorage.setItem("sel-stores", JSON.stringify(selStores));
    setStoreAdded(!storeAdded);
  };
  return (
    <OneStoreBase>
      <MarkerIconBase>
        <RoomIcon fontSize={"large"} />
      </MarkerIconBase>
      <StoreInfo>
        <StoreTitle>{storeInfo["store-name"]}</StoreTitle>
        <AddrDistance>
          <div style={{ flex: 3 }}>Address: {storeInfo["location"]}</div>
          <div style={{ flex: 2 }}>Distance: {storeInfo["distance"]}</div>
        </AddrDistance>
        <HoursDeliveryFee>
          <div style={{ flex: 3 }}>Hours: M-F 6am-9pm, Weekend: 10pm-5pm</div>
          <div style={{ flex: 2 }}>
            Est.Delivery fee:{" "}
            {storeInfo["delivery-fee"] === 0
              ? "Free"
              : "$" + storeInfo["delivery-fee"]}
          </div>
        </HoursDeliveryFee>
        <div style={{ width: "100%", textAlign: "center" }}>
          <ThemeProvider theme={addBtnTheme}>
            {storeAdded ? (
              <Button
                color={"primary"}
                variant="contained"
                size={"large"}
                style={{
                  border: "2px solid",
                  fontWeight: "700",
                  fontSize: "14px",
                  width: "60%",
                  marginTop: "12px",
                }}
                onClick={toggleAdd}
              >
                Store added
              </Button>
            ) : (
              <Button
                color={"primary"}
                variant="outlined"
                size={"large"}
                style={{
                  border: "2px solid",
                  fontWeight: "700",
                  fontSize: "14px",
                  width: "60%",
                  marginTop: "12px",
                }}
                onClick={toggleAdd}
              >
                Add Store
              </Button>
            )}
          </ThemeProvider>
        </div>
      </StoreInfo>
    </OneStoreBase>
  );
};

const StoreDisp = () => {
  let selStores =
    sessionStorage.getItem("sel-stores") === null
      ? []
      : JSON.parse(sessionStorage.getItem("sel-stores"));
  const keyGenerator = (s) => {
    const curDate = new Date();
    return s["store-id"] + s["store-name"] + curDate.getTime();
  };

  return (
    <StoreDispWrapped>
      {selStores.map((s) => (
        <StoreEntry key={keyGenerator(s)}>
          {s["store-name"]} ({s["location"]}), distance: {s["distance"]},
          delivery fee:{" "}
          {s["delivery-fee"] === 0 ? "Free" : "$" + s["delivery-fee"]}
        </StoreEntry>
      ))}
    </StoreDispWrapped>
  );
};

export const StoreSelection = () => {
  const [storeDisp, setStoreDisp] = useState([]);
  const [curList, setCurList] = useState([]);
  const [dummy, setDummy] = useState(false);
  const invData = JSON.parse(JSON.stringify(inventory));
  const history = useHistory();

  useEffect(() => {
    let selStores =
      sessionStorage.getItem("sel-stores") === null
        ? []
        : JSON.parse(sessionStorage.getItem("sel-stores"));
    setCurList(selStores);
    setStoreDisp(invData);
  }, []);

  const keyGenerator = (s) => {
    const curDate = new Date();
    return s["store-id"] + s["store-name"] + curDate.getTime();
  };

  const toHomePage = () => {
    history.push("/home");
  };

  const addAllThenHome = () => {
    let selStores = [];
    invData.forEach((s) => {
      selStores.push(s["store-id"]);
    });
    console.log(selStores);
    sessionStorage.setItem("sel-stores", JSON.stringify(selStores));
    history.push("/home");
  };

  return (
    <PageBase>
      <MainSection>
        <FirstRowBase>
          <FirRowLeft>Choose Shopping Method:</FirRowLeft>
          <FirRowRight>
            <Link to={"/nowhere"}>How this works?</Link>
            <IconButton color="primary" aria-label="close" onClick={toHomePage}>
              <HighlightOffIcon fontSize={"large"} />
            </IconButton>
          </FirRowRight>
        </FirstRowBase>
        <SecRowBase>
          <ToggleSection>
            <Stack direction={"row"} spacing={0} alignItems={"center"}>
              <Typography>Option: Shop Yourself</Typography>
              <Switch defaultChecked />
              <Typography>Delivery</Typography>
            </Stack>
          </ToggleSection>
          <AddressSection>
            <div style={{ flex: 1 }}>
              <Fragment>Delivery Address: </Fragment>
            </div>
            <TextField
              style={{ flex: 2 }}
              variant={"outlined"}
              label={"Search"}
              size={"small"}
            ></TextField>
          </AddressSection>
          <ReminderText>
            Delivery is only available from one selected store.
          </ReminderText>
        </SecRowBase>
        <TitleText>Search for the stores</TitleText>
        <ListMapBase>
          <ListBase>
            <SearchLabel>Enter store name:</SearchLabel>
            <TextField
              style={{
                paddingLeft: "15px",
                marginBottom: "15px",
                width: "50%",
              }}
              variant={"outlined"}
              label={"Search"}
              size={"small"}
            ></TextField>
            <Stores>
              {storeDisp.map((s) => (
                <OneStore
                  key={keyGenerator(s)}
                  storeInfo={s}
                  dummy={dummy}
                  setDummy={setDummy}
                ></OneStore>
              ))}
            </Stores>
          </ListBase>
          <MapContainer>
            <MapDisplay src={require("../data/images/map.png")}></MapDisplay>
          </MapContainer>
        </ListMapBase>
        <SelectedDoneBtn>
          <SelectedStores>
            <SearchLabel>Selected Stores:</SearchLabel>
            <StoreDisp dummy={dummy}></StoreDisp>
          </SelectedStores>
          <DoneBtnContainer>
            <Button
              variant="contained"
              size={"large"}
              style={{
                border: "2px solid",
                fontWeight: "700",
                fontSize: "14px",
                width: "60%",
                marginTop: "12px",
              }}
              onClick={toHomePage}
            >
              Done! Start Shopping!
            </Button>
          </DoneBtnContainer>
        </SelectedDoneBtn>
      </MainSection>
      <Divider
        style={{ marginTop: "25px", fontSize: "25px", marginBottom: "25px" }}
      >
        OR
      </Divider>
      <BottomSection>
        <ZipcodeSection>
          <div
            style={{
              fontWeight: "700",
              fontSize: "20px",
              marginTop: "15px",
              marginLeft: "25px",
              marginBottom: "5px",
            }}
          >
            Enter zipcode to show results from all nearby stores
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: "30px",
              marginLeft: "25px",
              marginBottom: "35px",
              alignItems: "center",
            }}
          >
            <TextField
              variant={"outlined"}
              label={"Zipcode"}
              size={"small"}
            ></TextField>
            <div
              style={{
                marginLeft: "25px",
                alignItems: "center",
                justifyItems: "center",
                textAlign: "center",
              }}
            >
              <Button
                variant="outlined"
                size={"small"}
                style={{
                  border: "1px solid",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
                onClick={toHomePage}
              >
                Enter
              </Button>
            </div>
          </div>
        </ZipcodeSection>
        <DoneBtnContainer>
          <Button
            variant="outlined"
            size={"large"}
            style={{
              border: "2px solid",
              fontWeight: "700",
              fontSize: "14px",
              width: "40%",
              marginTop: "12px",
            }}
            onClick={addAllThenHome}
          >
            Just browsing prices!
          </Button>
        </DoneBtnContainer>
      </BottomSection>
    </PageBase>
  );
};
