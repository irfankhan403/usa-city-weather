import React from 'react';
import ReactDOM from 'react-dom';
import WeatherApp from './WeatherApp';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
    <Provider store={store}>
        <WeatherApp />
    </Provider>
, document.getElementById('root'));
