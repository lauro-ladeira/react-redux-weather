import React from "react";
import { connect } from "react-redux";

class CapitalList extends React.Component {
  renderCapitals() {
    return this.props.capitals.map(capital => {
      return (
        <div key={capital.name}>
          <div>
            {capital.name}: {capital.temp}
          </div>
        </div>
      );
    });
  }

  render() {
    console.log(this.props);
    return <div>{this.renderCapitals()}</div>;
  }
}

const mapStateToProps = state => {
  return {
    capitals: state.capitals
  };
};

export default connect(mapStateToProps)(CapitalList);
