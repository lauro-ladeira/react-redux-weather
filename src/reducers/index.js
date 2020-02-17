import { combineReducers } from "redux";

const searchedCityReducer = (searchedCities = [], action) => {
  if (action.type === "CITY_SEARCHED") {
    return [action.payload, ...searchedCities];
  }
  return searchedCities;
};

export default combineReducers({
  searchedCities: searchedCityReducer
});

/*
  state:
  {
    searchedCity: {
      name: 'London',
      temp: '25º'
    }
  }
*/
