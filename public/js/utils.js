const table = document.querySelector("table");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
export const render = function (data, str, currVal) {
  const currSymbol = currVal == "INR" ? "&#8377" : "&#36";
  const headHtml = `
      <tr id="head-table">
        <td style="font-weight: bolder; font-size: 20px">Symbol</td>
        <td style="font-weight: bolder; font-size: 20px">Coin</td>
        <td style="font-weight: bolder; font-size: 20px">Price</td>
        <td style="font-weight: bolder; font-size: 20px">24h Volume</td>
        <td style="font-weight: bolder; font-size: 20px">24h</td>
        <td style="font-weight: bolder; font-size: 20px">Mkt Capital</td>
      </tr>`;
  table.innerHTML = headHtml;
  str == "coin" ? coinRender(data, currSymbol) : coinsArrRender(data, currSymbol);
};

const coinsArrRender = function (data, currSymbol) {
  nextBtn.style.display = "block";
  data.forEach((el, i) => {
    const stockChangePercent = Number(el.market_cap_change_percentage_24h);
    const html = `
        <tr data-id=${el.id}>
          <td><img src='${el.image}' width="50" height="50"></td>
          <td>${el.name}</td>
          <td><span>${currSymbol}</span>${el.current_price.toLocaleString("en-US")}</td>
          <td><span>${currSymbol}</span>${el.total_volume.toLocaleString("en-US")}</td>
          <td style="color:${stockChangePercent > 0 ? "#3ED625" : "#C70039"}">${stockChangePercent.toFixed(2)}%</td>
          <td><span>${currSymbol}</span>${el.market_cap.toLocaleString("en-US")}</td>
        </tr> 
        <div id="border"></div>
        `;
    table.insertAdjacentHTML("beforeend", html);
  });
  // REDIRECTION
  const tableRow = document.querySelectorAll("tr");
  tableRow.forEach((row) => {
    if (row.id === "head-table") return;
    row.addEventListener("click", function () {
      window.location.assign(`${location.hostname}/public/coin.html?id=${this.dataset.id}`);
    });
  });
};

const coinRender = function (data, currSymbol) {
  nextBtn.style.display = "none";
  prevBtn.style.display = "none";
  const stockChangePercent = Number(data.market_data.market_cap_change_percentage_24h);
  const html = `
    <tr data-id=${data.id}>
      <td><img src='${data.image.small}' width="50" height="50"></td>
      <td>${data.name}</td>
      <td><span>${currSymbol}</span>${data.market_data.current_price.inr.toLocaleString("en-US")}</td>
      <td><span>${currSymbol}</span>${data.market_data.total_volume.inr.toLocaleString("en-US")}</td>
      <td style="color:${stockChangePercent > 0 ? "#3ED625" : "#C70039"}">${stockChangePercent.toFixed(2)}%</td>
      <td><span>${currSymbol}</span>${data.market_data.market_cap.inr.toLocaleString("en-US")}</td>
    </tr>
    `;
  table.insertAdjacentHTML("beforeend", html);
  // REDIRECTION
  const tableRow = document.querySelectorAll("tr");
  tableRow.forEach((row) => {
    if (row.id === "head-table") return;
    row.addEventListener("click", function () {
      window.location.assign(`${location.hostname}/public/coin.html?id=${this.dataset.id}`);
    });
  });
};
