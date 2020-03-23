import { CityBody } from './CityBody';
import { WeatherBody } from './WeatherBody';

export type CityActions =
    | { type: 'LOAD_CITIES', data: CityBody[] }
    | { type: 'LOAD_CITY_WEATHER', data: WeatherBody }
    | { type: 'LOADING'}

