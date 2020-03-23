import WeatherReport from './components/WeatherReport';
import cityReducers from './reducers/CityReducers';
// import usersReducers from './reducers/usersReducers'

const components = { WeatherReport };

const reducers = cityReducers;
export { components, reducers };
