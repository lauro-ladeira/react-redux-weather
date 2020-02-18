import React from "react";
import SearchBar from "./SearchBar";
import CityDetail from "./CityDetail";


const App = () => {
  return (
    <div className="ui container" style={{marginTop: '20px'}}>
      <SearchBar />
      <CityDetail /> 
    </div>
  );
};

export default App;
