import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import { Provider } from 'react-redux';
import { store } from './store';
import "./index.css"

ReactDOM.render(
    //@ts-ignore
    <Provider store={store}>
        <WeatherApp />
    </Provider>
, document.getElementById('root'));
