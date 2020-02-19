import React from "react";
import { connect } from "react-redux";

class WeatherDetail extends React.Component {
  renderForecasts() {
    const forecasts = this.props.city.forecasts;
    return forecasts.map((forecast, index) => {
      while (index < 5) {
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
      return null;
    }
    return (
      <div className="ui centered card">
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
    city: state.searchedCities[0]
  };
};
export default connect(mapStateToProps)(WeatherDetail);
