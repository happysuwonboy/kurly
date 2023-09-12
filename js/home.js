for (let i = 1; i <= 13; i++) {
  document.querySelector('.home-visual .swiper-wrapper').insertAdjacentHTML('beforeend', `
  <div class="swiper-slide"><img src="./img/slider-img/slider-img${i}.png" alt=""></div>
  `)
}


const swiper = new Swiper('.home-visual .carousel', {
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