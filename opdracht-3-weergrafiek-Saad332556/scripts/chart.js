'use strict';

// Declaring of 2 chart variables.
// Later to be filled with chart.js objects.
let hourlyChart = false;
let dailyChart = false;

// initializeCharts function.
// Used to initialize the chart.js objects in the 2 canvas elements.
function initializeCharts() {
  // Selecting the 2 canvas elements.
  // 2 types: hourly and daily
  const hourlyEl = document.querySelector('canvas#hourly');
  const dailyEl = document.querySelector('canvas#daily');

  // The options object should be the same in both charts.
  // So it is declared separately.
  const options = {scales: {
      y: {
        min: -10,
        max: 50
      },
      y1: {
        min: -10,
        max: 50,
        position: 'right'
      }
  }};

  // hourlyChart variable is filled with new chart.js object.
  // hourlyEl (canvas element) is used.
  hourlyChart = new Chart(
    hourlyEl, {
      options: options
    }
  );

  // dailyChart variable is filled with new chart.js object.
  // dailyEl (canvas element) is used.
  dailyChart = new Chart(
    dailyEl, {
      options: options
    }
  );

}

function updateChart(labels, temps, rains, type) { 

  let chartObj = false;

  if (type == 'hourly') chartObj = hourlyChart;
  if (type == 'daily') chartObj = dailyChart;

  const color = {
    Temperature: '#F6F217',
    Rain: '#27B7F5'
  }

  chartObj.data.labels = labels;

  chartObj.data.datasets = [
    {
      type: 'line',
      label: 'Temperature',
      borderColor: color.Temperature,
      backgroundColor: color.Temperature,
      data: temps,
      yAxisID: 'y'
    },
    {
      type: 'bar',
      label: 'Rain',
      borderColor: color.Rain,
      backgroundColor: color.Rain,
      data: rains,
      yAxisID: 'y1'
    }
  ];

  chartObj.update();
}