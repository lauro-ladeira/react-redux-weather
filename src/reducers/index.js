import { combineReducers } from "redux";

const searchedCityReducer = (searchedCities = [], action) => {
  if (action.type === "CITY_SEARCHED") {
    return [action.payload, ...searchedCities];
  }
  return searchedCities;
};

const temperatureClassReducer = (temperatureClass = null, action) => {
  if(action.type === "GET_CLASS") {
    return action.payload
  }
  return temperatureClass;
}


export default combineReducers({
  searchedCities: searchedCityReducer,
  temperatureClass: temperatureClassReducer
});

/*
  state:
  {
    searchedCity: {
      name: 'London',
      temp: '25º'
    }
  }

  temperatureClass: freezing

*/
