import axios from "axios"
import CryptoJS from "crypto-js"

export const selectCapital = capital => {
  return {
    type: "CAPITAL_SELECTED",
    payload: capital
  }
}

export const fetchLocations = location => dispatch => {
  const yahoo_forecast_url =
    "https://weather-ydn-yql.media.yahoo.com/forecastrss"
  const app_id = "5Ofa6j4s"
  const consumer_key =
    "dj0yJmk9TWNYcEpRYWYwaVlNJmQ9WVdrOU5VOW1ZVFpxTkhNbWNHbzlNQS0tJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWE4"
  const consumer_secret = "1d0ad91a5e4cf552f65ef3c88c4fb231bf35860f"
  const concat = "&"
  const query = { location, format: "json" }
  const merged = {}
  const oauth = {
    oauth_consumer_key: consumer_key,
    oauth_nonce: Math.random()
      .toString(36)
      .substring(2),
    oauth_signature_method: "HMAC-SHA1",
    oauth_timestamp: parseInt(new Date().getTime() / 1000).toString(),
    oauth_version: "1.0"
  }

  Object.assign(merged, query, oauth)
  const merged_arr = Object.keys(merged)
    .sort()
    .map(key => [`${key}=${encodeURIComponent(merged[key])}`])

  const signature_base_str = [
    "GET",
    encodeURIComponent(yahoo_forecast_url),
    encodeURIComponent(merged_arr.join(concat))
  ].join(concat)

  const composite_key = encodeURIComponent(consumer_secret) + concat
  const hash = CryptoJS.HmacSHA1(signature_base_str, composite_key)
  const signature = hash.toString(CryptoJS.enc.Base64)

  oauth["oauth_signature"] = signature
  const auth_header =
    "OAuth " +
    Object.keys(oauth)
      .map(key => [`${key}="${oauth[key]}"`])
      .join(",")

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
          temp: `${resp.data.forecasts[0].low}°C`
        }
      })
    })
}
