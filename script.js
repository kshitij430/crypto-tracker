"use strict";
import { render } from "./utils.js";
const table = document.querySelector("table");
const prevBtn = document.querySelector("#prev");
const nextBtn = document.querySelector("#next");
const paginate = document.querySelector(".paginate");
const form = document.querySelector(".form");
const currChange = document.querySelector("#curr");
const home = document.querySelector("#home");
let currVal;
const getCryptoOverview = async function (page, curr) {
  console.log(`page ${page}`);
  const { data } = await axios(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${curr}&order=market_cap_desc&per_page=10&page=${page}&sparkline=false`);
  if (!currVal) currVal = "INR";
  render(data, "ex", currVal);
};

form.addEventListener("submit", async function (e) {
  e.preventDefault();
  const formData = new FormData(form);
  const coin = [...formData.entries()][0][1];
  try {
    const { data } = await axios(`https://api.coingecko.com/api/v3/coins/${coin}`);
    if (coin === "") return getCryptoOverview(1, currVal);
    render(data, "coin", currVal);
  } catch (err) {
    table.innerHTML = err.message;
    nextBtn.style.display = "none";
    prevBtn.style.display = "none";
  }
});

paginate.addEventListener("click", async function (e) {
  table.textContent = "";
  let currPage = Number(this.dataset.page);
  if (e.target === nextBtn) currPage++;
  if (e.target === prevBtn) currPage--;
  currPage <= 1 ? (prevBtn.style.display = "none") : (prevBtn.style.display = "block");
  await getCryptoOverview(currPage, currVal);
  table.scrollIntoView({ behavior: "smooth" });
  this.dataset.page = currPage;
});

currChange.addEventListener("change", function (e) {
  paginate.dataset.page = 1;
  prevBtn.style.display = "none";
  currVal = this.value.toUpperCase();
  getCryptoOverview(1, currVal);
});

home.addEventListener("click", () => {
  paginate.dataset.page = 1;
  prevBtn.style.display = "none";
  getCryptoOverview(1, currVal);
});
getCryptoOverview(1, "INR");
