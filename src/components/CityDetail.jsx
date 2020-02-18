import React from "react";
import { connect } from "react-redux";

class CityDetail extends React.Component {
  state = { textClass: null };

  handleActive= () => {
    this.setState({ textClass: "active" });
  };

  renderWeather = (city) => {
    return (
      <tr
        key={city.name}
        className={this.state.textClass}
        onClick={this.handleActive}
      >
        <td>{city.name}</td>
        <td>{city.temp}</td>
        <td>{city.pressure}</td>
        <td>{city.humidity}</td>
      </tr>
    );
  }

  render() {
    if (!this.props.cities) {
      return null;
    }
    return (
      <table className="ui selectable table">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>{this.props.cities.map(this.renderWeather)}</tbody>
      </table>
    );
  }
}

const mapStateToProps = state => {
  return {
    cities: state.searchedCities
  };
};

export default connect(mapStateToProps)(CityDetail);
