import { fnRaf, winScrEvent } from "./common.js";

let isStartMotion = true;
let rafId;
let headerH = $(`header`).innerHeight();
let gnbH = $(`header .header-gnb`).offset().top;
const scrollMotion = fnRaf(()=>{
  if (scry >= gnbH-10) {
    document.querySelector('header').classList.add('fix')
    document.querySelector('body').style.paddingTop = `${headerH+10}px`
  } else {
    document.querySelector('header').classList.remove('fix')
    document.querySelector('body').style.paddingTop = `0`
  }
}, isStartMotion, rafId)

winScrEvent(scrollMotion);
