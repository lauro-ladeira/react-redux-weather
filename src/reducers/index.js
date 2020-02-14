import { combineReducers } from "redux";

const capitalsReducer = () => {
  return [
    { name: "London", temp: "8°C" },
    { name: "New York", temp: "10°C" },
    { name: "Sydney", temp: "23°C" },
    { name: "Rome", temp: "17°C" }
  ];
};

const selectedCapitalReducer = (selectedCapital = null, action) => {
  if (action.type === "CAPITAL_SELECTED") {
    return action.payload;
  }
  return selectedCapital;
};

export default combineReducers({
  capitals: capitalsReducer,
  selectedCapital: selectedCapitalReducer
});
