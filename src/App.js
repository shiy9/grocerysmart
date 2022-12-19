import "./App.css";

import { BrowserRouter, Route } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./components/header";
import { Home } from "./components/home";
import { SignIn } from "./components/signin";
import { SignUp } from "./components/signup";
import { SearchResults } from "./components/searchresults";
import { MainCategory } from "./components/maincategory";
import { SubCategory } from "./components/subcategory";
import { Welcome } from "./components/welcome";
import { Compare } from "./components/compare";
import { StoreSelection } from "./components/storeselection";
import { NoWhere } from "./components/nowhere";

const GridBase = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "hd"
    "main"
    "ft";

  @media (min-width: 500px) {
    grid-template-columns: 40px 50px 1fr 50px 40px;
    grid-template-rows: auto auto auto;
    grid-template-areas:
      "hd hd hd hd hd"
      "main main main main main"
      "ft ft ft ft ft";
  }
`;

function App() {
  return (
    <BrowserRouter>
      <GridBase>
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/storeselect" render={() => <StoreSelection />} />
        <Route path="/signin" render={() => <SignIn />} />
        <Route path="/signup" render={() => <SignUp />} />
        <Route path="/search/:item" render={() => <SearchResults />} />
        <Route path="/maincat/:cat" render={() => <MainCategory />} />
        <Route path="/subcat/:cat" render={() => <SubCategory />} />
        <Route path="/welcome" render={() => <Welcome />} />
        <Route path="/compare" render={() => <Compare />} />
        <Route path="/nowhere" render={() => <NoWhere />} />
      </GridBase>
    </BrowserRouter>
  );
}

export default App;
