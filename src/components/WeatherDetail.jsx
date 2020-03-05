import React from "react";
import { connect } from "react-redux";
import { getTemperatureClass } from "../actions";

class WeatherDetail extends React.Component {
  setTemperatureClass = () => {
    const tempC = this.props.city.temp;
    let textClass = " "

    if (tempC >= 30) {
      textClass = "hot"
    }
    if (tempC < 30 && tempC >= 25) {
      textClass = "hot"
    }
    if (tempC < 25 && tempC >= 18) {
      textClass = "warm"
    }
    if (tempC < 18 && tempC >= 10) {
      textClass = "warm"
    }
    if (tempC < 10) {
      textClass = "freezing"
    }
    this.props.getTemperatureClass(textClass)
  }

  renderForecasts() {
    const forecasts = this.props.city.forecasts;
    return forecasts.map((forecast, index) => {
      while (index > 0 && index < 6) {
        return (
          <div key={Math.random()} className="column">
            <div className="content">
              <div>
                <strong>{forecast.day}</strong>
              </div>
              <div>
                {forecast.low}° {forecast.high}°
              </div>
            </div>
          </div>
        );
      }
      return null;
    });
  }

  render() {
    const city = this.props.city;
    if (!city) {
      return <h1>How is the weather in your favorite city?</h1>;
    }
    return (
      <div className={`ui centered card ${this.props.temperatureClass}`}>
        {this.setTemperatureClass()}
        <div className="content">
          <div className="header">
            {city.name} {city.region} - {city.country}
          </div>
          <h2>
            {city.temp}°C&nbsp;&nbsp;&nbsp;{city.condition}
          </h2>
          <span>
            <i className="arrow down icon"></i>
            {city.min}
          </span>
          <span>
            <i className="arrow up icon"></i>
            {city.max}
          </span>
        </div>
        <div className="ui grid extra content">
          <div className="five column row">{this.renderForecasts()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    city: state.searchedCities[0],
    temperatureClass: state.temperatureClass
  };
};
export default connect(mapStateToProps, { getTemperatureClass })(WeatherDetail);
