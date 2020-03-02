import React from "react";
import SearchBar from "./SearchBar";
import CitiesList from "./CitiesList";
import WeatherDetail from "./WeatherDetail";
import "./App.scss";
import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <div id="div-root" className={`theme ${this.props.temperatureClass}`}>
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
  }
}

const mapStateToProps = state => {
  return {
    temperatureClass: state.temperatureClass
  };
};

export default connect(mapStateToProps)(App);
