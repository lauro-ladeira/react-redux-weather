import { combineReducers } from "redux";

const capitalsReducer = () => {
  return [
    { name: "London", temp: null },
    { name: "Albuquerque", temp: null },
    { name: "Sydney", temp: null },
    { name: "São Paulo", temp: null }
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
