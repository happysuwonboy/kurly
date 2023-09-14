import { displayTemplate, setProdPrice } from "./template.js";

const printRestTime = () => {
  let now = new Date();
  let tomorrow = new Date(new Date().setDate(now.getDate() + 1))
  let tomorrowEleven = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 11, 0, 0) // 당일 11시 지난 경우
  let todayEleven = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 11, 0, 0); // 당일 11시 지나지 않은 경우
  let restTime = parseInt((tomorrowEleven.getTime() - now.getTime()) / 1000);
  restTime = todayEleven.getTime() - now.getTime() > 0 ? parseInt((todayEleven.getTime() - now.getTime()) / 1000) : restTime;
  let restTimeHour = parseInt(restTime / (60 * 60))
  let restTimeMin = parseInt((restTime % (60 * 60)) / 60)
  let restTimeSec = parseInt((restTime % (60 * 60)) % 60)
  restTimeHour = restTimeHour < 10 ? `0${restTimeHour}` : restTimeHour
  restTimeMin = restTimeMin < 10 ? `0${restTimeMin}` : restTimeMin
  restTimeSec = restTimeSec < 10 ? `0${restTimeSec}` : restTimeSec
  document.querySelector('.home-timeout-section .timeout-resttime').innerText = `${restTimeHour}:${restTimeMin}:${restTimeSec}`
}

////////////////////
//무한스크롤

// 어떤 요소를 감시하라고 하고, 해당 요소가 보였을 때 실행할 코드를 아래 작성
// IntersectionObserver 는 파라미터로 배열을 받게 되어있음. -> querySelector인 경우는 [a]와같이 구조분해 필요

let page = 1;
let totalPages = 10;
let startSectionNum = 5;

const observer = new IntersectionObserver(([entry]) => {
  if (entry.intersectionRatio > 0.1) {
    page += 1;
    if (page > totalPages) return;
    setTimeout(() => {
      displayTemplate(startSectionNum)
      startSectionNum += 4
    }, 300)
  }
})

observer.observe(document.querySelector(`.trigger`))
