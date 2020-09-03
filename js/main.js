"use strict";

let s;
const defaultInfo = {
  visualElem: document.querySelector(".visual__wrap"),
  mainTitle: document.querySelector(".visual__title"),
  infoBox1: document.querySelector(".info__box:nth-of-type(1)"),
  infoBox2: document.querySelector(".info__box:nth-of-type(2)"),
  infoBox3: document.querySelector(".info__box:nth-of-type(3)"),
};

function animationPlay() {
  if (s > defaultInfo.visualElem.offsetTop - 100) {
    defaultInfo.mainTitle.classList.add("active");
  }
  if (s > defaultInfo.visualElem.offsetTop) {
    defaultInfo.infoBox1.classList.add("active");
  }
  if (s > defaultInfo.visualElem.offsetTop + 10) {
    defaultInfo.infoBox2.classList.add("active");
  }
  if (s > defaultInfo.visualElem.offsetTop + 20) {
    defaultInfo.infoBox3.classList.add("active");
  }
}

addEventListener("scroll", () => {
  s = pageYOffset;
  animationPlay();
});
