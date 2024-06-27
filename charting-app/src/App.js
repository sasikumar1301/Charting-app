import React from 'react';
import Chart from './Chart';
import BarChartComponent from './BarChartComponent';
import './App.css'

const App = () => {
  return (
    <div className="App">
      <h1 className='heading'>Interactive Chart</h1>
      <Chart />
      <BarChartComponent/>


    </div>
  );
};

export default App;
