"use strict";
import "./node_modules/chartjs-plugin-zoom/dist/chartjs-plugin-zoom.min.js";
import "./node_modules/chart.js/dist/chart.min.js";
const buttons = document.querySelectorAll(".chartBtn");
const description = document.querySelector(".description");
const coinDescription = document.querySelector(".coin-description");
const currChange = document.querySelector("#curr");
const url = new URL(window.location.href);
const coin = url.searchParams.get("id").toLowerCase();
let myChart;
console.log(coin);
let color,
  currVal = "inr";

// HELPER FUNCTIONS
const formatAMPM = function (date) {
  var hours = date.getHours();
  var minutes = date.getMinutes();
  var ampm = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  minutes = minutes < 10 ? "0" + minutes : minutes;
  var strTime = hours + ":" + minutes + " " + ampm;
  return strTime;
};

// NOTE: USE THIS FUNCTION FOR DESCRIPTION OF THE COIN
const getCoinData = async function (coin) {
  try {
    const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${coin}`);
    const stockChangePercent = Number(data.market_data.market_cap_change_percentage_24h);
    color = stockChangePercent > 0 ? "#3ED625" : "#C70039";
  } catch (err) {
    console.log(err);
  }
};

console.log(formatAMPM(new Date()));

// MAIN FUNCTIONS
const chartOverviewRender = async function (coin, prevTime, curr, charttime) {
  const currTime = new Date() / 1000;
  const lastSixtyMin = currTime - prevTime;
  // DONT MANIPULATE
  const chartData = await axios(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart/range?vs_currency=${curr}&from=${lastSixtyMin}&to=${currTime}`);
  const labels = [];
  const priceData = [];
  chartData.data.prices.forEach((el) => {
    labels.push(formatAMPM(new Date(el[0])));
    priceData.push(el[1]);
  });
  const data = {
    labels: labels,
    // #C70039 red
    // #3ED625 green
    datasets: [
      {
        label: `Price Past (${charttime})`,
        backgroundColor: color,
        borderColor: color,
        // actual data to be plotted
        data: priceData,
      },
    ],
  };
  // final file to be loaded onto the DOM, includes 3 things.
  const config = {
    type: "line",
    data: data,
    options: {
      plugins: {
        zoom: {
          pan: {
            enabled: true,
            mode: "xy",
          },
          zoom: {
            wheel: {
              enabled: true,
            },
            pinch: {
              enabled: true,
            },
            mode: "xy",
          },
        },
      },
    },
    responsive: true,
  };
  myChart = new Chart(document.getElementById("myChart"), config);
};

const descriptionOverview = async function (coin, curr) {
  try {
    console.log(curr);
    const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${coin}`);
    console.log(data);
    const description = data.description.en.replaceAll(/\r\n/g, "<br>");
    console.log(description);
    const currSymbol = curr == "inr" ? "&#8377" : "&#36";
    coinDescription.innerHTML = `
        <img id='coinImage' style='width:200px;' src="${data.image.large}" alt="" />
        <h1 id='coinName'>${data.name}</h1>
        <p id='coinDesc'>${description}</p>
        <h1>Rank: ${data.coingecko_rank}</h1>
        <h1>Current Price: ${currSymbol} ${data.market_data.current_price[curr].toLocaleString("en-US")}</h1>
        <h1>Market Capital: ${currSymbol} ${data.market_data.market_cap[curr].toLocaleString("en-US")}</h1>
    `;
  } catch (err) {
    description.innerHTML = err.message;
  }
};

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    let prevTime;
    const { charttime } = this.dataset;
    if (charttime === "1h") {
      prevTime = 60 * 60;
    }
    if (charttime === "24h") {
      prevTime = 24 * 60 * 60;
    }
    if (charttime === "1m") {
      prevTime = 30 * 24 * 60 * 60;
    }
    if (charttime === "3m") {
      prevTime = 3 * 30 * 24 * 60 * 60;
    }
    myChart.destroy();
    chartOverviewRender(coin, prevTime, currVal, charttime);
  });
});

currChange.addEventListener("change", function (e) {
  currVal = this.value.toLowerCase();
  console.log(currVal);
  descriptionOverview(coin, currVal);
  if (myChart) myChart.destroy();
  chartOverviewRender(coin, 86400, currVal, "1d");
});

getCoinData(coin);
descriptionOverview(coin, "inr");
chartOverviewRender(coin, 86400, "inr", "1d"); //  24 * 60 * 60 = 604800 (1 day)
