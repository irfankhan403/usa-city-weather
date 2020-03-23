import { CityBody } from '../types/CityBody';
import { cityService } from '../services/cityService';
import { CityActions } from "../types/CityAction";
import { WeatherBody } from '../types/WeatherBody';



const getCityList = (searchQuery:string) => (dispatch: any) => {
    const success = (data: CityBody[]): CityActions => ({ type: 'LOAD_CITIES', data });
    cityService.getCityList(searchQuery).then((res: any) => { dispatch(success(res.data)) })
}

const getCityWeather = (cityID:string) => (dispatch: any) => {
    dispatch({ type: 'LOADING'});
    const success = (data: WeatherBody): CityActions => ({ type: 'LOAD_CITY_WEATHER', data });
    cityService.getCityWeather(cityID).then((res: any) => { dispatch(success(res.data)) })
}


export {
    getCityList,
    getCityWeather
}