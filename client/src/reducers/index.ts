import { combineReducers } from 'redux';

import { reducers as weatherReport } from '../app/weatherReport';

const rootReducer = combineReducers({
    weatherData : weatherReport
});

export default rootReducer;