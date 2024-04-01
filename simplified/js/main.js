// document.addEventListener('DOMContentLoaded', () => {
//   const forecastButton = document.getElementById('forecast-btn');
//   forecastButton.addEventListener('click', performForecast);
// });

// function performForecast() {
//   const startDate = document.getElementById('start-date').value;
//   const endDate = document.getElementById('end-date').value;
  
//   // Validate the date range
//   if (!startDate || !endDate || new Date(startDate) > new Date(endDate)) {
//     alert('Please select a valid date range.');
//     return;
//   }
  
//   // Call the forecasting API (replace with your actual API endpoint)
//   fetch(`http://your-api-endpoint/forecast?start=${startDate}&end=${endDate}`)
//     .then(response => response.json())
//     .then(data => displayForecastResults(data))
//     .catch(error => console.error('Error fetching forecast:', error));
// }

// function displayForecastResults(forecastData) {
//   const resultsDiv = document.getElementById('forecast-results');
  
//   // Clear previous results
//   resultsDiv.innerHTML = '';
  
//   // Create a table or chart to display the forecast
//   // For simplicity, we will create a table here
//   const table = document.createElement('table');
//   const thead = table.createTHead();
//   const tbody = table.createTBody();
  
//   // Create table header
//   const headerRow = thead.insertRow();
//   const productHeader = document.createElement('th');
//   productHeader.textContent = 'Product';
//   headerRow.appendChild(productHeader);
  
//   const forecastHeader = document.createElement('th');
//   forecastHeader.textContent = 'Forecasted Quantity';
//   headerRow.appendChild(forecastHeader);
  
//   // Populate table with forecast data
//   forecastData.forEach(item => {
//     const row = tbody.insertRow();
//     const productCell = row.insertCell();
//     productCell.textContent = item.product;
    
//     const forecastCell = row.insertCell();
//     forecastCell.textContent = item.quantity;
//   });
  
//   // Append the table to the results div
//   resultsDiv.appendChild(table);
// }

//for display only
const mockData = [
  { date: '2023-12-28', nuttinBetter: 5, bananaAWhey: 12, rippedBerry: 11, strawberryStorm: 9, highImpactAcai: 6, acaiAvalanche: 3, mindOverMatcha: 7 },
  { date: '2023-12-29', nuttinBetter: 17, bananaAWhey: 10, rippedBerry: 7, strawberryStorm: 6, highImpactAcai: 13, acaiAvalanche: 9, mindOverMatcha: 13 },
  { date: '2023-12-30', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 8, strawberryStorm: 12, highImpactAcai: 9, acaiAvalanche: 4, mindOverMatcha: 6 },
  { date: '2023-12-31', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 8, strawberryStorm: 12, highImpactAcai: 9, acaiAvalanche: 4, mindOverMatcha: 6 },
  { date: '2024-01-01', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 8, strawberryStorm: 12, highImpactAcai: 9, acaiAvalanche: 4, mindOverMatcha: 6 },
  { date: '2024-01-02', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 8, strawberryStorm: 12, highImpactAcai: 9, acaiAvalanche: 4, mindOverMatcha: 6 },
  { date: '2024-01-03', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 8, strawberryStorm: 12, highImpactAcai: 9, acaiAvalanche: 4, mindOverMatcha: 6 },
  { date: '2024-01-04', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 10, strawberryStorm: 11, highImpactAcai: 5, acaiAvalanche: 4, mindOverMatcha: 10 },
  { date: '2024-01-05', nuttinBetter: 8, bananaAWhey: 9, rippedBerry: 10, strawberryStorm: 11, highImpactAcai: 5, acaiAvalanche: 4, mindOverMatcha: 10 },
];
document.addEventListener('DOMContentLoaded', function () {
  const submitButton = document.getElementById('submit');

  submitButton.addEventListener('click', function() {
      const startDate = document.getElementById('startDate').value;
      const endDate = document.getElementById('endDate').value;
      
      const filteredData = mockData.filter(data => {
          const date = new Date(data.date);
          return date >= new Date(startDate) && date <= new Date(endDate);
      });

      console.log(filteredData);
      displayData(filteredData);
      plotData(filteredData);
  });
});

function displayData(data) {
  const tableBody = document.getElementById('data-table');
  tableBody.innerHTML = ''; // Clear previous entries

  data.forEach(entry => {
      const row = tableBody.insertRow();
      const dateCell = row.insertCell(0);
      dateCell.textContent = entry.date;

      // Add more cells for each product as needed
      Object.keys(entry).forEach((key, index) => {
          if (key !== 'date') { // Skip the date field for product cells
              const cell = row.insertCell(index);
              cell.textContent = entry[key];
          }
      });
  });
}

function plotData(data) {
  const dates = data.map(entry => entry.date);
  const products = Object.keys(data[0]).filter(key => key !== 'date');

  const traces = products.map(product => {
      return {
          x: dates,
          y: data.map(entry => entry[product]),
          type: 'scatter',
          name: product
      };
  });

  Plotly.newPlot('chart', traces, {title: 'Product Sales Forecast'});
}