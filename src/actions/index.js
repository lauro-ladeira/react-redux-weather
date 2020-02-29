import axios from "axios";
import { generateAuth } from "../apis/yahooWeather";

export const getTemperatureClass = tempClass => {
  return {
    type: 'GET_CLASS',
    payload: tempClass
  }
}


export const fetchLocations = location => dispatch => {
  const query = {
    location,
    format: "json",
    u: "c"
  };
  const yahoo_forecast_url =
    "https://weather-ydn-yql.media.yahoo.com/forecastrss";
  const app_id = process.env.REACT_APP_ID;

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
        type: "CITY_SEARCHED",
        payload: {
          name: resp.data.location.city,
          temp: resp.data.current_observation.condition.temperature,
          min: `${resp.data.forecasts[0].low}°`,
          max: `${resp.data.forecasts[0].high}°`,
          condition: resp.data.current_observation.condition.text,
          humidity: resp.data.current_observation.atmosphere.humidity,
          pressure: resp.data.current_observation.atmosphere.pressure,
          region: resp.data.location.region.length > 3 ? null: `,${resp.data.location.region}`,
          country: resp.data.location.country,
          forecasts: resp.data.forecasts
        }
      });
    });
};

