"use strict";

const mobileBg = document.querySelector("header");

const leftBgSwitch = document.querySelector(".mobile__view--switcher1");
const centerBgSwitch = document.querySelector(".mobile__view--switcher2");
const rightBgSwitch = document.querySelector(".mobile__view--switcher3");

const viewSwitcher = document.querySelector(".mobile__view");

leftBgSwitch.addEventListener("click", () => {
  mobileBg.classList.remove("right");
  mobileBg.classList.remove("center");
  mobileBg.classList.add("left");
  leftBgSwitch.classList.add("active");
  centerBgSwitch.classList.remove("active");
  rightBgSwitch.classList.remove("active");
});

centerBgSwitch.addEventListener("click", () => {
  mobileBg.classList.remove("right");
  mobileBg.classList.add("center");
  mobileBg.classList.remove("left");
  leftBgSwitch.classList.remove("active");
  centerBgSwitch.classList.add("active");
  rightBgSwitch.classList.remove("active");
});

rightBgSwitch.addEventListener("click", () => {
  mobileBg.classList.add("right");
  mobileBg.classList.remove("center");
  mobileBg.classList.remove("left");
  leftBgSwitch.classList.remove("active");
  centerBgSwitch.classList.remove("active");
  rightBgSwitch.classList.add("active");
});

const mobileMenu = document.querySelector(".mobile__nav");

const menuBtn = document.querySelector(".navbar__list");

const menuCloseBtn = document.querySelector(".mobile__nav--button");

menuBtn.addEventListener("click", () => {
  if (window.innerWidth <= 1070) {
    mobileMenu.classList.remove("hidden");
  }
});

menuCloseBtn.addEventListener("click", () => {
  if (window.innerWidth <= 1070) {
    mobileMenu.classList.add("hidden");
  }
});
