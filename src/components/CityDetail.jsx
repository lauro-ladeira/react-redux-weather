import React from 'react';
import {connect} from 'react-redux';

class CityDetail extends React.Component {
  render() {

    if(!this.props.cityInfo){
      return null
    }
    return (
    <div>
      {this.props.cityInfo.name}: <strong>{this.props.cityInfo.temp}</strong>
    </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cityInfo: state.searchedCity
  }
}


export default connect(mapStateToProps)(CityDetail);