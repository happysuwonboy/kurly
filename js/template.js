const sectionTitle = [
  ['찜 많은 쇼핑백·포장 선물🎀','비주얼과 퀄리티 보장, 최대 80% 할인'],
  ['놓치면 후회할 가격',''],
  ['가성비 최고 2인분 요리','인당 7천원 미만으로 즐기는 요리'],
  ['추석 1DAY: 건강 선물💪','단 24시간! 건강선물 최대 15만원 쿠폰'],
  ['✌MZ세대 인기 BEST 상품','MZ세대라면 모를 수가 없는 컬리 인기템'],
  ['MZ세대라면 모를 수가 없는 컬리 인기템',''],
  ['믿고먹는 풀무원 빅세일 🌿','신상 골라담기부터 20% 쿠폰까지!'],
  ['9월 리빙신상 담으러가기🛒','금주 오픈 핫한 신상모음😎']
]


const randInt = (a,b) => {
  if ((a===0 || a) && b) {
    if (typeof a === 'number' && typeof b === 'number') {
      let num1 = a
      let num2 = b
      return num1 + Math.floor(Math.random()*(num2 -num1 + 1))
    } else {return}
  } else if (a && !b) {
    if (typeof a === 'string' && a.includes("~")) {
     let arr = a.split("~").filter(a => a)
     let num1 = parseInt(arr[0])
     let num2 = parseInt(arr[1])
     return num1 + Math.floor(Math.random()*(num2 -num1 + 1))
    } else {return}
  } else {return}
}

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

const makeSwiperSection = (sectionNum) => {
  let randIdx = randInt(0,sectionTitle.length-1)
  return `
  <section class="prod-section${sectionNum} common-prod-section swiper-prod-section">
    <div class="center">
      <span class="prod-section-title">
        ${sectionTitle[randIdx][0]}
      </span>
      <button class="prod-section-more"><i class="fa-solid fa-chevron-right"></i></button>
      <p class="prod-section-subtitle">${sectionTitle[randIdx][1]}</p>

      <div class="prod-container">
        <div class="swiper-wrapper">
          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> 

          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> 

          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> 

          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> 

          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> 

          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> 

          <div class="product swiper-slide">
            <figure class="prod-figure">
              <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
              <figcaption>+10% 쿠폰</figcaption>
            </figure>
            <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
            <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
            <span class="original-price">47500</span>
            <div class="discount">
              <span class="dc-percent">47%</span>
              <span class="dc-price">24,900원</span>
            </div>
          </div> <!--swiper-slide-->
        </div>
      </div>
      <button class="swiper-button-prev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="swiper-button-next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>

    </div> 
  </section> 
    `
}

const makeTimeoutSection = (sectionNum) => {
  return `
  <section class="prod-section${sectionNum} common-prod-section home-timeout-section">
    <div class="center">

      <div class="timeout-info-container">
        <h2 class="timeout-title">최저가 도전!</h2>
        <h3 class="timeout-subtitle">리빙 필수템 특가</h3>
        <p class="timeout-desc">망설이면 늦어요!</p>
      </div>

      <div class="prod-container">
        <div class="product">
          <figure class="prod-figure">
            <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
            <figcaption>일일특가</figcaption>
          </figure>
          <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
          <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
          <span class="original-price">47500</span>
          <div class="discount">
            <span class="dc-percent">47%</span>
            <span class="dc-price">24,900원</span>
          </div>
        </div> 

        <div class="product">
          <figure class="prod-figure">
            <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
            <figcaption>일일특가</figcaption>
          </figure>
          <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
          <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
          <span class="original-price">47500</span>
          <div class="discount">
            <span class="dc-percent">47%</span>
            <span class="dc-price">24,900원</span>
          </div>
        </div> 

        <div class="product">
          <figure class="prod-figure">
            <img src="./img/products-img/product${randInt(1,14)}.jpg" alt="">
            <figcaption>일일특가</figcaption>
          </figure>
          <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
          <h3 class="prod-name">[피지오갤] DMT 페이션 크림 150ml</h3>
          <span class="original-price">47500</span>
          <div class="discount">
            <span class="dc-percent">47%</span>
            <span class="dc-price">24,900원</span>
          </div>
        </div> 
      </div>

    </div>
  </section> 
  `
}

export const displayTemplate = (startSectionNum) => {
    document.querySelector('main').insertAdjacentHTML('beforeend', `
    <section class="banner-section common-prod-section">
      <div class="center">
       <img src="./img/section-banner-img${randInt(1,5)}.png" alt="">
     </div>
    </section>
    ${makeSwiperSection(startSectionNum)}
    ${makeSwiperSection(startSectionNum+1)}
    ${makeTimeoutSection(startSectionNum+2)}
    ${makeSwiperSection(startSectionNum+3)}
    `)
    setProdSwiper(`.prod-section${startSectionNum}`)
    setProdSwiper(`.prod-section${startSectionNum+1}`)
    setProdSwiper(`.prod-section${startSectionNum+3}`)
  }