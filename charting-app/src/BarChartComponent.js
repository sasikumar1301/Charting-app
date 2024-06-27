import React from 'react';
import './BarChartComponent.css'; // Import your CSS file for styling
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Sample data for daily, weekly, and monthly charts
const dailyData = [
  { timestamp: "01-01", value: 10 },
  { timestamp: "01-02", value: 12 },
  { timestamp: "01-03", value: 5 },
  { timestamp: "01-04", value: 8 },
  { timestamp: "01-05", value: 15 },
  { timestamp: "01-06", value: 7 },
  { timestamp: "01-07", value: 11 },
  { timestamp: "01-08", value: 14 },
  { timestamp: "01-09", value: 9 },
  { timestamp: "01-10", value: 13 }
];

const weeklyData = [
  { timestamp: "01-1st week", value: 9.71 },
  { timestamp: "01-2nd week", value: 11.43 },
  { timestamp: "01-3rd week", value: 9.86 },
  { timestamp: "01-4th week", value: 11.43 },
  { timestamp: "02-1st week", value: 9.14 },
  { timestamp: "02-2nd week", value: 12.57 },
  { timestamp: "02-3rd week", value: 9.86 },
  { timestamp: "02-4th week", value: 11.43 },
  { timestamp: "03-1st week", value: 9.14 },
  { timestamp: "03-2nd week", value: 12.57 },
];

const monthlyData = [
  { timestamp: "01-January", value: 10.14 },
  { timestamp: "02-February", value: 10.07 },
  { timestamp: "03-March", value: 10.35 },
  { timestamp: "04-April", value: 10.29 },
  { timestamp: "05-May", value: 10.07 },
  { timestamp: "06-June", value: 10.50 },
  { timestamp: "07-July", value: 8.57 },
  { timestamp: "08-August", value: 10.71 },
  { timestamp: "09-September", value: 10.29 },
  { timestamp: "10-October", value: 10.50 },
];

const DailyBarChart = () => (
  <div className="chart-container">
    <h2>Daily Data</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={dailyData}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const WeeklyBarChart = () => (
  <div className="chart-container">
    <h2>Weekly Data</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart  data={weeklyData}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const MonthlyBarChart = () => (
  <div className="chart-container">
    <h2>Monthly Data</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={monthlyData}>
        <XAxis dataKey="timestamp" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

const BarChartComponent = () => (
  <div className="App">
    <div className="charts-container">
      <DailyBarChart />
      <WeeklyBarChart />
      <MonthlyBarChart />
    </div>
  </div>
);

export default BarChartComponent;
