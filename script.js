"use strict";

let timeEl = document.querySelector(".time");

let sec = 0;
let min = 0;
let hour = 0;

const time = setInterval(() => {
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
  timeEl.textContent = `${hour.toString().padStart(2, 0)}:${min
    .toString()
    .padStart(2, 0)}:${sec.toString().padStart(2, 0)}`;
}, 1000);
