import { combineReducers } from "redux";

const searchedCityReducer = (searchedCity = null, action) => {
  if (action.type === "CITY_SEARCHED") {
    return action.payload;
  }
  return searchedCity;
};

export default combineReducers({
  searchedCity: searchedCityReducer
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