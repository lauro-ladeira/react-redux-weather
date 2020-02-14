import React from "react";
import "./App.scss";
/* import { selectCapital } from "../actions"; */
import CapitalList from "./CapitalList";

const App = () => {
  return (
    <div className="ui container">
      <CapitalList />
    </div>
  );
};

export default App;
