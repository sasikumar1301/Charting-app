# Interactive Charts with React.js and Recharts

This project demonstrates how to create interactive charts (line chart and bar chart) using React.js and Recharts library.

## Features

- Displays line chart for daily data with selectable timeframe (daily, weekly, monthly).
- Bar chart component showcasing different data sets (daily, weekly, monthly).
- Export charts as PNG or JPG images.

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (version 12 or higher)
- npm or yarn package manager

## Installation

Follow these steps to get the project running locally:

1. Clone the repository from GitHub:

   ```bash
   git clone https://github.com/sasikumar1301/Charting-app.git


2. Navigate into the project directory:


  cd charting-app

3. Install dependencies using npm or yarn:

  npm install
  # or
  yarn install

Usage
To start the development server and view the charts:

1. Start the React application:

  npm start
  # or
  yarn start

2. Open your browser and go to http://localhost:3000.

3. Select different timeframes (daily, weekly, monthly) to view the line chart with corresponding data.

4. Explore the bar chart component which displays daily, weekly, and monthly data sets.

5. Use the "Export as PNG" or "Export as JPG" buttons to download the chart as an image file.

Project Structure

The project structure is organized as follows:

src/components/Chart.js: Contains the main chart component using line chart with interactive features and export functionality.
src/components/BarChartComponent.js: Displays bar charts for daily, weekly, and monthly data using Recharts library.
src/App.js: Integrates both Chart and BarChartComponent for demonstration.
src/styles.css: Stylesheet for basic layout and responsiveness.
public/data.json: Sample JSON data used in the charts.
Libraries Used
React.js: Front-end library for building user interfaces.
Recharts: A composable charting library for React applications.
html2canvas: JavaScript library that provides an API to convert HTML elements to canvas.

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/sasikumar1301/Charting-app/blob/main/LICENSE) file for details.
