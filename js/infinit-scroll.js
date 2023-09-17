import { displaySectionsByScroll } from './template.js';

////////////////////
//무한스크롤

// 어떤 요소를 감시하라고 하고, 해당 요소가 보였을 때 실행할 코드를 아래 작성
// IntersectionObserver 는 파라미터로 배열을 받게 되어있음. -> querySelector인 경우는 [a]와같이 구조분해 필요

let page = 0;
let totalPages = 10;
let startSectionNum = 5;

const observer = new IntersectionObserver(([entry]) => {
  if (entry.intersectionRatio > 0.1) {
    if (page === 0) {
      page += 1;
      return;
    } // 처음에 파싱할떄 동적생성 이전에 가까이 있는 트리거를 보기때문에 처음 한번은 생성 안되도록 함
    if (page > totalPages) return;
    setTimeout(() => {
      displaySectionsByScroll(startSectionNum);
      startSectionNum += 4;
    }, 300);
  }
});

observer.observe(document.querySelector(`.trigger`));
