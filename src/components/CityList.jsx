import React from "react";
import { connect } from "react-redux";
import { fetchLocations } from "../actions";

const cities = [
  { name: "Rio de Janeiro" },
  { name: "São Paulo" },
  { name: "Belo Horizonte" },
  { name: "Fortaleza" },
  { name: "Manaus" }
];

class CityList extends React.Component {

  renderlist() {
    return cities.map(el => {
      return <li>{el.name}</li>;
    });
  }
  render() {
    return <ul>{this.renderlist()}</ul>;
  }
}

export default connect(null, { fetchLocations })(CityList);
