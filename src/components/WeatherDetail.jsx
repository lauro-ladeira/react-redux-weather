import React from "react";
import { connect } from "react-redux";

class WeatherDetail extends React.Component {
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
            {city.temp}&nbsp;&nbsp;&nbsp;{city.condition}
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
          <div className="five column row">
            <div className="column">Tue 25°</div>
            <div className="column">Wed 25°</div>
            <div className="column">Thu 25°</div>
            <div className="column">Fri 25°</div>
            <div className="column">Sat 25°</div>
          </div>
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
