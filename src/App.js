import "./App.css";
import CardDisplay from "./Components/CardDisplay";
import MainMen from "./Components/MainMen.js";
import SearchBar from "./Components/SearchBar";
import { AiFillLeftCircle } from "react-icons/ai";
import { AiFillRightCircle } from "react-icons/ai";
import { IconButton } from "@mui/material";
import SmallCard from "./Components/SmallCard";
import Footer from "./Components/Footer";
import ContextMenuComponent from "./Components/ContextMenuComponent";
import { Button } from "primereact/button";
import TabMenuComponent from "./Components/TabMenuComponent";

function App() {
  return (
    <>
      <div className="App width100 inlinFlx">
        {/* <header className="App-header">
         <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */}

        <label className="mt9">
          <b className="mr5">P2E PRO</b>
        </label>
        <SearchBar className="width50" />
        <MainMen />
      </div>

      <div className="mt-2">
        <ContextMenuComponent />
      </div>

      <div className="mt-2">
        <label>
          <b className="ft22">{"Trending Auctions"}</b>
        </label>
        <span className="fr">
          <IconButton>
            <AiFillLeftCircle />
          </IconButton>
          <IconButton>
            <AiFillRightCircle />
          </IconButton>
          <Button>View All</Button>
        </span>
      </div>
      <div className="width100 inlinFlx">
        {[1, 2, 3].map((d) => (
          <span className="mr5">
            <CardDisplay />
          </span>
        ))}
      </div>

      <div className="mt-2">
        <label>
          <b className="ft22">{"Our Top Sellers"}</b>
        </label>
        <span className="fr">
          <IconButton>
            <AiFillLeftCircle />
          </IconButton>
          <IconButton>
            <AiFillRightCircle />
          </IconButton>
          <Button>View All</Button>
        </span>
      </div>
      <div className="width100 inlinFlx">
        {[1, 2, 3].map((d) => (
          <span className="mr5">
            <SmallCard />
          </span>
        ))}
      </div>

      <div className="mt-2">
        <div className="width100 inlinFlx">
          <b>MarketPlace</b>
          {/*<span className="fr">
             <InputText
              id="alphanumeric"
              keyfilter="alphanum"
              className="w-full"
            />
          </span> */}
        </div>
        <div>
          <TabMenuComponent />
        </div>
        <div className="width100 inlinFlx">
          {[1, 2, 3].map((d) => (
            <span className="mr5">
              <CardDisplay />
            </span>
          ))}
        </div>
      </div>

      <div className="mt-2">
        <Footer />
      </div>
    </>
  );
}

export default App;
