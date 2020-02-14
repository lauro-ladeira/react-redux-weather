import React from "react";
import { connect } from "react-redux";

const CapitalDetail = ({ capital }) => {
  if (!capital) {
    return <div>Select a city</div>;
  }
  return (
    <div>
      <h1 className="ui header">{capital.temp}</h1>
      <div>{capital.name}</div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    capital: state.selectedCapital
  };
};

export default connect(mapStateToProps)(CapitalDetail);
