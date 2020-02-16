import axios from "axios";
import { generateAuth } from "../apis/yahooWeather";

export const selectCapital = capital => {
  return {
    type: "CAPITAL_SELECTED",
    payload: capital
  };
};

export const fetchLocations = location => dispatch => {
  const query = {
    location,
    format: "json",
    u: "c"
  };
  const yahoo_forecast_url =
    "https://weather-ydn-yql.media.yahoo.com/forecastrss";
  const app_id = "5Ofa6j4s";

  const auth_header = generateAuth(query, yahoo_forecast_url);

  axios
    .get(yahoo_forecast_url, {
      params: query,
      headers: {
        Authorization: auth_header,
        "X-Yahoo-App-Id": app_id
      }
    })
    .then(resp => {
      dispatch({
        type: "CAPITAL_SELECTED",
        payload: {
          name: resp.data.location.city,
          temp: `${resp.data.current_observation.condition.temperature}°C`
        }
      });
    });
};
