import { fnRaf, winScrEvent } from "./common.js";

// top banner hide - localStorage
if (localStorage.getItem('top-banner-hide')) {
  let hideStart = JSON.parse(localStorage.getItem('top-banner-hide')) / 1000
  let now = new Date().getTime() / 1000;
  if (now - hideStart >= 86400) {
    localStorage.removeItem('top-banner-hide')
    document.querySelector('.top-banner').style.display = 'block'
  } else {
    document.querySelector('.top-banner').style.display = 'none'
  }
}

let isStartMotion = true;
let rafId;
let headerH = $(`header`).innerHeight();
let gnbH = $(`header .header-gnb`).offset().top;
const scrollMotion = fnRaf(() => {
  if (scry >= gnbH + 3) {
    document.querySelector('header').classList.add('fix')
    document.querySelector('body').style.paddingTop = `${headerH + 5}px`
  } else {
    document.querySelector('header').classList.remove('fix')
    document.querySelector('body').style.paddingTop = `0`
  }
}, isStartMotion, rafId)

winScrEvent(scrollMotion);

document.querySelector('.top-banner button').addEventListener('click', e => {
  document.querySelector('.top-banner').style.display = 'none';
  localStorage.setItem('top-banner-hide', JSON.stringify(new Date().getTime()))
  gnbH = $(`header .header-gnb`).offset().top; // 탑 배너 없어지면 gnb offset 다시 갱신해서 스크롤 이벤트 정상적으로 작동하도록
})
