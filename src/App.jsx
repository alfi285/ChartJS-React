import React from 'react';
import './App.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement,
  defaults,
} from 'chart.js';

import { Bar, Doughnut, Line } from 'react-chartjs-2';

import sourceData from "./data/sourceData.json";
import revenueData from "./data/revenueData.json";

// Global defaults
defaults.maintainAspectRatio = false;
defaults.responsive = true;

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  LineElement,
  PointElement
);

const App = () => {
  return (
    <div className='App'>

      {/* Line Chart */}
      <div className="dataCard revenueCard">
        <Line
          data={{
            labels: revenueData.map((data) => data.label),
            datasets: [
              {
                label: "Revenue",
                data: revenueData.map((data) => data.revenue),
                backgroundColor: "#064FF0",
                borderColor: "#064FF0",
              },
              {
                label: "Cost",
                data: revenueData.map((data) => data.cost),
                backgroundColor: "#FF3030",
                borderColor: "#FF3030",
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Monthly Revenue vs Cost",
                align: "start",
                font: {
                  size: 20
                },
                color: "black"
              }
            }
          }}
        />
      </div><br />

      {/* Bar Chart */}
      <div className="dataCard customerCard">
        <Bar
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: "green",
                borderRadius: 5,
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Customer Sources",
                align: "start",
                font: {
                  size: 20
                },
                color: "black"
              }
            }
          }}
        />
      </div><br />

      {/* Doughnut Chart */}
      <div className="dataCard categoryCard">
        <Doughnut
          data={{
            labels: sourceData.map((data) => data.label),
            datasets: [
              {
                label: "Count",
                data: sourceData.map((data) => data.value),
                backgroundColor: ["green", "blue", "yellow", "orange"],
                borderColor: ["green", "blue", "yellow", "orange"]
              }
            ]
          }}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Source Distribution",
                align: "start",
                font: {
                  size: 20
                },
                color: "black"
              }
            }
          }}
        />
      </div>
    </div>
  );
};

export default App;
