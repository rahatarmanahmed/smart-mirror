import fetchJSONP from 'fetch-jsonp';

const key = process.env.FORECAST_API_KEY;

export default (long, lat) => fetchJSONP(
    `https://api.forecast.io/forecast/${key}/${long},${lat}?`
)
.then((response) => response.json());
