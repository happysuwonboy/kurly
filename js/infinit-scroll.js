import { displayTemplate } from "./template.js";

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
    setTimeout(()=>{
      displayTemplate(startSectionNum)
      startSectionNum += 4
    }, 300)
  }
})

observer.observe(document.querySelector(`.trigger`))