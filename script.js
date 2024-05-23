"use strict";

let timeEl = document.querySelector(".time");

let sec = 0;
let min = 0;
let hour = 0;

let pixel = 0;

const time = setTimeout(() => {
  setInterval(() => {
    timeEl.textContent = `${hour.toString().padStart(2, 0)}:${min
      .toString()
      .padStart(2, 0)}:${sec.toString().padStart(2, 0)}`;
    sec++;
    if (sec > 59) {
      sec = 0;
      min++;
    }
    if (min > 59) {
      min = 0;
      hour++;
    }
    if (hour > 23) {
      hour = 0;
    }
  }, 1000);

  const pixelInterval = setInterval(() => {
    pixel++;
    timeEl.parentElement.style.height = `${pixel}px`;

    if (pixel === 150) clearInterval(pixelInterval);
  }, 1);
}, 6100);

let loadingEl = document.querySelector(".loading");
let percent = 0;
let pEl = document.querySelector("p");

const loading = setInterval(() => {
  percent++;
  loadingEl.style.width = `${percent}%`;
  pEl.textContent = `${percent}%`;

  if (percent === 100) {
    clearInterval(loading);
    loadingEl.closest(".flex").innerHTML = "";
  }
}, 50);
