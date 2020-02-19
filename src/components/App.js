import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";
import WeatherDetail from "./WeatherDetail";
import "./App.scss";

const App = () => {
  return (
    <div className="ulala">
      <div className="ui container">
        <div className="ui grid">
          <div className="ten wide centered column">
            <WeatherDetail />
            <SearchBar />
            <CitiesList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
