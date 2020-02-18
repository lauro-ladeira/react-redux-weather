import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";
import WeatherDetail from "./WeatherDetail";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "20px" }}>
      <div className="ui grid">
        <div className="ten wide centered column">
          <WeatherDetail />
          <SearchBar />
          <CitiesList />
        </div>
      </div>
    </div>
  );
};

export default App;
