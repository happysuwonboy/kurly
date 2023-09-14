import { fnRaf, winScrEvent } from "./common.js";

// top banner hide - 24시간 동안 안보기
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

// popup-banner hide - 오늘 하루동안 안보기
if (localStorage.getItem('popup-banner-hide')) {
  let tomorrowMidnight = JSON.parse(localStorage.getItem('popup-banner-hide')) / 1000
  let now = new Date().getTime() / 1000;
  if (now >= tomorrowMidnight) {
    localStorage.removeItem('popup-banner-hide')
    document.querySelector('.popup-banner').style.display = 'block'
  } else {
    document.querySelector('.popup-banner').style.display = 'none'
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


document.querySelector('.popup-banner button.close-popup').addEventListener('click', e => {
  document.querySelector('.popup-banner').style.display = 'none'
})
document.querySelector('.popup-banner button.close-popup-tomorrow').addEventListener('click', e => {
  document.querySelector('.popup-banner').style.display = 'none'
  // 내일 0시 0분 0초 getTime해서 저장
  let tomorrow = new Date(new Date().setDate(new Date().getDate()+1))
  let tomorrowMidnight = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(),0,0,0)
  localStorage.setItem('popup-banner-hide', JSON.stringify(tomorrowMidnight.getTime()))
})
