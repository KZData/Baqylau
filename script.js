// import the fs and Plotly modules
const fs = require("fs");
const Plotly = require('plotly.js-dist');

// read the JSON file
fs.readFile("Data/Top10Customer.json", "utf8", (err, data) => {
  // handle any errors
  if (err) {
    console.error(err);
    return;
  }
  // parse the JSON data
  const jsonData = JSON.parse(data);

  // get the JSON object
  const jsonObj = jsonData; // assuming you want the first object in the array

  // prepare the data for the bubble plot
  var x = [];
  var y = [];
  var size = [];
  var text = [];

  // assuming 'Заказчик' is the x-axis, 'Запланированная Сумма' is the y-axis,
  // and the size of the bubble is proportional to 'Запланированная Сумма'
  for (var i = 0; i < jsonObj.length; i++) {
    x.push(jsonObj[i]['Заказчик']);
    y.push(jsonObj[i]['Запланированная Сумма']);
    size.push(jsonObj[i]['Запланированная Сумма']);
    text.push("Заказчик: " + jsonObj[i]['Заказчик'] + "<br>Запланированная Сумма: " + jsonObj[i]['Запланированная Сумма']);
  }

  // Create the bubble plot
  var data = [{
    x: x,
    y: y,
    mode: "markers",
    marker: {
      size: size,
      sizemode: "area",
      sizeref: 2 * Math.max(...size) / (40 ** 2),
      sizemin: 4
    },
    text: text
  }];

  var layout = {
    title: "Bubble Plot with Moving Bubbles and User Filters",
    xaxis: {
      title: "Заказчик"
    },
    yaxis: {
      title: "Запланированная Сумма"
    },
    showlegend: false
  };

  var config = {
    responsive: true
  };

  Plotly.newPlot("bubble-plot", data, layout, config);
});
