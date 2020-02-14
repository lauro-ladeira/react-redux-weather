import React from "react";
import "./App.scss";
/* import { selectCapital } from "../actions"; */
import CapitalList from "./CapitalList";
import CapitalDetail from "./CapitalDetail";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <CapitalList />
        </div>
        <div className="column eight wide">
          <CapitalDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
