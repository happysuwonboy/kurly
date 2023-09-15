class Product {
  constructor(prod_name, org_price, imgPath) {
    this.prod_name = prod_name
    this.org_price = org_price
    this.imgPath = imgPath
  }
}

const sectionTitle = [
  ['빛이 나는 프리미엄 선물 ✨', '에스티로더부터 1++한우세트까지!'],
  ['💖뷰티컬리페스타 단독 특가', '가장 좋은 가격으로 득템하세요 !'],
  ['찜 많은 쇼핑백·포장 선물🎀', '비주얼과 퀄리티 보장, 최대 80% 할인'],
  ['놓치면 후회할 가격', ''],
  ['가성비 최고 2인분 요리', '인당 7천원 미만으로 즐기는 요리'],
  ['추석 1DAY: 건강 선물💪', '단 24시간! 건강선물 최대 15만원 쿠폰'],
  ['✌MZ세대 인기 BEST 상품', 'MZ세대라면 모를 수가 없는 컬리 인기템'],
  ['MZ세대라면 모를 수가 없는 컬리 인기템', ''],
  ['믿고먹는 풀무원 빅세일 🌿', '신상 골라담기부터 20% 쿠폰까지!'],
  ['9월 리빙신상 담으러가기🛒', '금주 오픈 핫한 신상모음😎']
]

// const prodList = [
//   new Product('[전주 베테랑] 인기 메뉴 5종 (택2)', 8900, './img/products-img/product15.jpg'),
//   new Product('[닥터브로너스] 퓨어 캐스틸 솝 950ml 5종 (택1)(+펌프 증정)', 33000, './img/products-img/product16.jpg'),
//   new Product('[선물세트] 대상 건강한 갱년기를 위한 리봄순액 (30일분)', 62000, './img/products-img/product17.jpg'),
//   new Product('덴마크 유산균이야기 선물세트 (180일분)+(쇼핑백증정)', 276000, './img/products-img/product25.jpg'),
//   new Product('[글래드] 매직랩 미니+매직백 세트 6종 (택1)',16500,'./img/products-img/product26.jpg'),
//   new Product('[발뮤다] 팟 전기주전자 2종 (화이트/블랙 택1)',199000,'./img/products-img/product27.jpg'),
//   new Product('[설화수] 자음 2종 세트',140000,'./img/products-img/product7.jpg'),
//   new Product('[선물세트] 횡성축협한우 1++ 프리미엄 1호 (냉장) (예약일 수령)',259000,'./img/products-img/product24.jpg'),
//   new Product('프리미엄 구강 선물세트_투스노트, 유시몰 5종 (택1)',80000,'./img/products-img/product28.jpg'),
//   new Product('[델리치오] 호주산 목초육 안심 스테이크 250g (냉장)',22900,'./img/products-img/product5.jpg'),
//   new Product('[시골보쌈과 감자옹심이] 감자 옹심이 칼국수 (2인분)',10500,'./img/products-img/product29.jpg'),
//   new Product('[이연복의 목란] 짜장면 2인분',9900,'./img/products-img/product30.jpg'),
//   new Product('[한팟] 치즈 부대찌개 1858g(냉장)',13500,'./img/products-img/product31.jpg'),
//   new Product('[통뼈] 뼈해장국 900gX2개입',21000,'./img/products-img/product32.jpg'),
// ]

let jsonData = await fetch('./json-data/product.json')
let prodList = await jsonData.json(); 


const couponName = [
  '일일특가', '5%쿠폰', '10%쿠폰+적립', '15%쿠폰', '20%쿠폰', '+금액대별 쿠폰', '+최대2만원쿠폰', '+최대3만원쿠폰'
]


const printRestTime = (prodSecNum) => {
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
  document.querySelector(`.prod-section${prodSecNum} .timeout-resttime`).innerText = `${restTimeHour}:${restTimeMin}:${restTimeSec}`
}

const randInt = (a, b) => {
  if ((a === 0 || a) && b) {
    if (typeof a === 'number' && typeof b === 'number') {
      let num1 = a
      let num2 = b
      return num1 + Math.floor(Math.random() * (num2 - num1 + 1))
    } else { return }
  } else if (a && !b) {
    if (typeof a === 'string' && a.includes("~")) {
      let arr = a.split("~").filter(a => a)
      let num1 = parseInt(arr[0])
      let num2 = parseInt(arr[1])
      return num1 + Math.floor(Math.random() * (num2 - num1 + 1))
    } else { return }
  } else { return }
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
  let titleIdx = randInt(0, sectionTitle.length - 1)
  let prodListCopy = prodList.map(v => { return { ...v } })
  prodListCopy.sort(() => Math.random() - 0.5);
  prodListCopy = prodListCopy.slice(0, randInt(6, 10));
  return `
  <section class="prod-section${sectionNum} common-prod-section swiper-prod-section">
    <div class="center">
      <span class="prod-section-title">
        ${sectionTitle[titleIdx][0]}
      </span>
      <button class="prod-section-more"><i class="fa-solid fa-chevron-right"></i></button>
      <p class="prod-section-subtitle">${sectionTitle[titleIdx][1]}</p>
      <div class="prod-container">
        <div class="swiper-wrapper">

      ${prodListCopy.map(prod => {
    let { prod_name, org_price, imgPath } = prod;
    let [orgPrice, dcPer, dcPrice] = setProdPrice(org_price);
    return `
        <div class="product swiper-slide">
          <figure class="prod-figure">
            <img src="${imgPath}" alt="">
            <figcaption>${couponName[randInt(0, couponName.length - 1)]}</figcaption>
          </figure>
          <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
          <h3 class="prod-name">${prod_name}</h3>
          <span class="original-price">${orgPrice}원</span>
          <div class="discount">
            <span class="dc-percent">${dcPer}%</span>
            <span class="dc-price">${dcPrice}원</span>
          </div>
        </div> 
        `
  }).join('\n')}
        
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
  let prodListCopy = prodList.map(v => { return { ...v } })
  prodListCopy.sort(() => Math.random() - 0.5);
  prodListCopy = prodListCopy.slice(0, randInt(2, 3));
  return `
  <section class="prod-section${sectionNum} common-prod-section home-timeout-section">
    <div class="center">
      <div class="timeout-info-container">
        <h2 class="timeout-title">최저가 도전!</h2>
        <h3 class="timeout-subtitle">리빙 필수템 특가</h3>
        <div class="timeout-clock-container">
          <i class="fa-solid fa-clock"></i>
          <span class="timeout-resttime"></span>
        </div>
        <p class="timeout-desc">망설이면 늦어요!</p>
      </div>
      <div class="prod-container">

      ${prodListCopy.map(prod => {
    let { prod_name, org_price, imgPath } = prod;
    let [orgPrice, dcPer, dcPrice] = setProdPrice(org_price);
    return `
        <div class="product">
          <figure class="prod-figure">
            <img src="${imgPath}" alt="">
            <figcaption>일일특가</figcaption>
          </figure>
          <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
          <h3 class="prod-name">${prod_name}</h3>
          <span class="original-price">${orgPrice}원</span>
            <div class="discount">
              <span class="dc-percent">${dcPer}%</span>
              <span class="dc-price">${dcPrice}원</span>
            </div>
        </div> 
        `
  }).join('\n')}

      </div>
    </div>
  </section> 
  `
}

export const displayTemplate = (startSectionNum) => {
  document.querySelector('main').insertAdjacentHTML('beforeend', `
    <section class="banner-section common-prod-section">
      <div class="center">
       <img src="./img/section-banner-img${randInt(1, 5)}.png" alt="">
     </div>
    </section>
    ${makeSwiperSection(startSectionNum)}
    ${makeSwiperSection(startSectionNum + 1)}
    ${makeTimeoutSection(startSectionNum + 2)}
    ${makeSwiperSection(startSectionNum + 3)}
    `)
  setProdSwiper(`.prod-section${startSectionNum}`)
  setProdSwiper(`.prod-section${startSectionNum + 1}`)
  setProdSwiper(`.prod-section${startSectionNum + 3}`)
  printRestTime(startSectionNum + 2)
  const elevenTimeOut = setInterval(() => {
    printRestTime(startSectionNum + 2);
  }, 1000)
}

const setProdPrice = (originalPrice) => {
  originalPrice = Math.round(originalPrice / 100) * 100
  let dcPercent = randInt(10, 60);
  let dcPrice = originalPrice * (1 - dcPercent / 100);
  dcPrice = Math.floor(dcPrice / 100) * 100
  return [originalPrice.toLocaleString(), dcPercent, dcPrice.toLocaleString()];
}