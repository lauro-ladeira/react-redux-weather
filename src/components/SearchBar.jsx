import React from "react";
import { connect } from "react-redux";
import { fetchLocations } from "../actions";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = e => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = e => {
    e.preventDefault();
    this.props.fetchLocations(this.state.term);
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          autoFocus
          className="form-control"
          placeholder="Search"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn secondary">
            Search
          </button>
        </span>
      </form>
    );
  }
}

export default connect(null, { fetchLocations })(SearchBar);
