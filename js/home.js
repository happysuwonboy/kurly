// home visual section 이미지 dynamic html 
for (let i = 1; i <= 13; i++) {
  document.querySelector('.home-visual .swiper-wrapper').insertAdjacentHTML('beforeend', `
  <div class="swiper-slide"><img src="./img/slider-img/slider-img${i}.png" alt=""></div>
  `)
}

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

// home timeout section 1초마다 남은 시간 출력
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

printRestTime();
const elevenTimeOut = setInterval(() => {
  printRestTime();
}, 1000)


