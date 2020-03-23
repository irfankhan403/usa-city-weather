import axios from '../../../services/axios';
import { CityBody } from '../types/CityBody';
import { WeatherBody } from '../types/WeatherBody';

const getCityList = (searchQuery:string) => {
    return axios.get(`/api/city?q=${searchQuery}`)
        .then((res: any) => {
            let cities: CityBody[] = res.data;
            return Promise.resolve(cities);
        });
}

const getCityWeather = (cityId:string) => {
    return axios.get(`/api/weather-report/${cityId}`)
        .then((res: any) => {
            let weatherReport: WeatherBody = res.data;
            return Promise.resolve(weatherReport);
        });
}

export const cityService = {
    getCityList,
    getCityWeather
}