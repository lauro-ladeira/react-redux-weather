import React from "react";
import { connect } from "react-redux";

class CitiesList extends React.Component {

  renderWeather = (city) => {
    return (
      <tr
        key={city.name}
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
      <table className="ui selectable unstackable table">
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
  console.log(state);
  return {
    cities: state.searchedCities
  };
};

export default connect(mapStateToProps)(CitiesList);
