import { CityActions } from '../types/CityAction';
import { CityBody } from '../types/CityBody';
import { WeatherBody } from '../types/WeatherBody';

interface CityState {
    cities: CityBody[],
    weatherReport:WeatherBody|null,
    loading:boolean
};

const initialState: CityState = {
    cities: [],
    weatherReport:null,
    loading:false,
};


const CityReducers = (state = initialState, action: CityActions) => {
    switch (action.type) {
        case 'LOAD_CITIES': {
            return { ...state,loading:false, cities: action.data }
        }
        case 'LOAD_CITY_WEATHER':{
            return { ...state,loading:false, weatherReport: action.data }
        }
        case 'LOADING':{
            return { ...state,loading:true }
        }
        default:
            return state;
    }
}
export default CityReducers;