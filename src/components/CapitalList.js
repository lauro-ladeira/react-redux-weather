import React from "react";
import { connect } from "react-redux";
import { selectCapital, fetchLocations } from "../actions";


class CapitalList extends React.Component {
  componentDidMount() {
    this.props.fetchLocations("sunnyvale,ca");
  }

  renderCapitals() {
    return this.props.capitals.map(capital => {
      return (
        <div key={capital.name}>
          <button
            onClick={() => this.props.selectCapital(capital)}
            className="ui button"
          >
            {capital.name}
          </button>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="ui vertical basic buttons">{this.renderCapitals()}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    capitals: state.capitals
  };
};

const mapDispatchToProps = {
  selectCapital,
  fetchLocations
}

export default connect(mapStateToProps, mapDispatchToProps)(CapitalList);
