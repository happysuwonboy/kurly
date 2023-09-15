import { fnRaf, winScrEvent } from "./common.js";
import { printRestTime } from "./template.js";

// home visual section 이미지 dynamic html 
for (let i = 1; i <= 13; i++) {
  document.querySelector('.home-visual .swiper-wrapper').insertAdjacentHTML('beforeend', `
  <div class="swiper-slide"><img src="./img/slider-img/slider-img${i}.png" alt=""></div>
  `)
}

let triggerOffset = $('.trigger').offset().top;
let isStartMotion = true;
let rafid
let scrollMotion = fnRaf(()=>{
  if (scry >= triggerOffset*0.5) {
    document.querySelector('.top-btn').classList.add('active')
  } else {
    document.querySelector('.top-btn').classList.remove('active')
  }
},isStartMotion,rafid)

document.querySelector('.top-btn').addEventListener('click', ()=>{
  window.scrollTo({top:0, behavior:'smooth'})
})

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

const setProdSwiper = (section) => {
  const homeProdSwiper = new Swiper(`${section} .prod-container`, {
    autoplay: false,
    loop: false,
    spaceBetween: 15,
    navigation: {
      nextEl: `${section} .swiper-button-next`,
      prevEl: `${section} .swiper-button-prev`,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
      1000: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1200: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }
  })
}

// home prod section 첫번째 섹션 스와이퍼

setProdSwiper('.prod-section1')
setProdSwiper('.prod-section4')

printRestTime(`.prod-section2`,11);
const elevenTimeOut = setInterval(() => {
  printRestTime(`.prod-section2`,11);
}, 1000)

winScrEvent(scrollMotion)