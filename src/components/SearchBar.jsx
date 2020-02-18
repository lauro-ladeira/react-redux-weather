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
    this.resetInput();
  };

  resetInput = () => {
    this.setState({ term: "" });
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div className="ui left icon fluid action input">
        <i className="search icon"></i>
          <input
            autoFocus
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
          <div className="ui button">Search</div>
        </div>
      </form>
    );
  }
}

export default connect(null, { fetchLocations })(SearchBar);
