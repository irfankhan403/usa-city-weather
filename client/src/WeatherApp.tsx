import React from 'react';
import { components as weatherReportComponents } from "./app/weatherReport";

const { WeatherReport } = weatherReportComponents;

function App() {
  return (
    <WeatherReport/>
    );
}

export default App;
