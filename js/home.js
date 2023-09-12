for (let i = 1; i <= 13; i++) {
  document.querySelector('.home-visual .swiper-wrapper').insertAdjacentHTML('beforeend', `
  <div class="swiper-slide"><img src="./img/slider-img/slider-img${i}.png" alt=""></div>
  `)
}


const homeVisualSwiper = new Swiper('.home-visual .carousel', {
  autoplay: { delay: 3000, disableOnInteraction: false},
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.pagination',
    type: 'fraction',
  }, 
  slidesPerView: 1,
  slidesPerGroup: 1,
});

const homeProdSwiper = new Swiper(`.home-prod-section .prod-container`, {
  autoplay: false,
  loop: false,
  spaceBetween: 15,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    500:{
      slidesPerView: 2,
      slidesPerGroup : 2,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup : 3,
    },
    1200: {
      slidesPerView: 4,
      slidesPerGroup : 4,
    },
  }
})