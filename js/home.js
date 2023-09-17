import { fnRaf, winScrEvent } from './common.js';
import {
  displaySwiperSection,
  displayTimeoutSection,
  printRestTime,
} from './template.js';

// home visual section 이미지 dynamic html
for (let i = 1; i <= 13; i++) {
  document.querySelector('.home-visual .swiper-wrapper').insertAdjacentHTML(
    'beforeend',
    `
  <div class="swiper-slide"><img src="./img/slider-img/slider-img${i}.png" alt=""></div>
  `
  );
}

let isStartMotion = true;
let rafid;
let scrollMotion = fnRaf(
  () => {
    if (scry >= triggerOffset * 0.5) {
      document.querySelector('.top-btn').classList.add('active');
    } else {
      document.querySelector('.top-btn').classList.remove('active');
    }
  },
  isStartMotion,
  rafid
);

// home visual section 스와이퍼
const homeVisualSwiper = new Swiper('.home-visual .carousel', {
  autoplay: { delay: 3000, disableOnInteraction: false },
  loop: true,
  navigation: {
    nextEl: '.home-visual .swiper-button-next',
    prevEl: '.home-visual .swiper-button-prev',
  },
  pagination: {
    el: '.pagination',
    type: 'fraction',
  },
  slidesPerView: 1,
  slidesPerGroup: 1,
});

await displaySwiperSection(1);
await displayTimeoutSection(2, 11);
await displaySwiperSection(3);
await displaySwiperSection(4);

let triggerOffset = $('.trigger').offset().top;
document.querySelector('.top-btn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

winScrEvent(scrollMotion);
