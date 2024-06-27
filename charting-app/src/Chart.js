import React, { useState, useEffect, useRef } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import html2canvas from 'html2canvas';
import './Chart.css'

const Chart = () => {
  const [data, setData] = useState({ daily: [], weekly: [], monthly: [] });
  const [timeframe, setTimeframe] = useState('daily');
  const [formattedData, setFormattedData] = useState([]);
  const chartRef = useRef(null);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    if (data[timeframe]) {
      setFormattedData(data[timeframe]);
    }
  }, [data, timeframe]);

  const handleTimeframeChange = (event) => {
    setTimeframe(event.target.value);
  };

  const handleExport = (format) => {
    html2canvas(chartRef.current.container).then((canvas) => {
      const link = document.createElement('a');
      link.download = `chart.${format}`;
      link.href = canvas.toDataURL(`image/${format}`);
      link.click();
    });
  };

  return (
    <div>
      <label htmlFor="timeframe">Select Timeframe: </label>
      <select id="timeframe" value={timeframe} onChange={handleTimeframeChange}>
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <div className='container' style={{ width: '100%', height: 400, overflowX: 'scroll' }}>
        <div style={{ width: formattedData.length * 50, height: '100%' }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={formattedData} ref={chartRef}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="timestamp" tick={false} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <h1 className='head'>Detailed View</h1>
      <button onClick={() => handleExport('png')}>Export as PNG</button>
      <button onClick={() => handleExport('jpg')}>Export as JPG</button>
    </div>
  );
};

export default Chart;
