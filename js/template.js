// 상품 섹션 타이틀 리스트
const sectionTitle = [
  ['✨세일보다 더 큰 페스타✨', '단 7일! 컬리보장 최대 80% 페스타딜'],
  ['🌹뷰티컬리페스타 최저가 도전', '오늘이 마지막⏰놓치면 품절!'],
  ['빛이 나는 프리미엄 선물 ✨', '에스티로더부터 1++한우세트까지!'],
  ['💖뷰티컬리페스타 단독 특가', '가장 좋은 가격으로 득템하세요 !'],
  ['찜 많은 쇼핑백·포장 선물🎀', '비주얼과 퀄리티 보장, 최대 80% 할인'],
  ['놓치면 후회할 가격', ''],
  ['가성비 최고 2인분 요리', '인당 7천원 미만으로 즐기는 요리'],
  ['추석 1DAY: 건강 선물💪', '단 24시간! 건강선물 최대 15만원 쿠폰'],
  ['✌MZ세대 인기 BEST 상품', 'MZ세대라면 모를 수가 없는 컬리 인기템'],
  ['MZ세대라면 모를 수가 없는 컬리 인기템', ''],
  ['믿고먹는 풀무원 빅세일 🌿', '신상 골라담기부터 20% 쿠폰까지!'],
  ['9월 리빙신상 담으러가기🛒', '금주 오픈 핫한 신상모음😎'],
];

// 쿠폰 이름 리스트
const couponName = [
  '일일특가',
  '5%쿠폰',
  '10%쿠폰+적립',
  '15%쿠폰',
  '20%쿠폰',
  '+금액대별 쿠폰',
  '+최대2만원쿠폰',
  '+최대3만원쿠폰',
];

/**
 * 난수 생성 함수
 * @param {number} a 생성 범위 최솟값
 * @param {number} b 생성 범위 최댓값
 * @returns a~b 범위의 정수 중 하나
 */
const randInt = (a, b) => {
  if ((a === 0 || a) && b) {
    if (typeof a === 'number' && typeof b === 'number') {
      let num1 = a;
      let num2 = b;
      return num1 + Math.floor(Math.random() * (num2 - num1 + 1));
    } else {
      return;
    }
  } else if (a && !b) {
    if (typeof a === 'string' && a.includes('~')) {
      let arr = a.split('~').filter((a) => a);
      let num1 = parseInt(arr[0]);
      let num2 = parseInt(arr[1]);
      return num1 + Math.floor(Math.random() * (num2 - num1 + 1));
    } else {
      return;
    }
  } else {
    return;
  }
};

/**
 * 1초마다 타이머가 출력되는 기능 세팅
 * @param {number} section 세팅할 섹션
 * @param {number} hour 기준 시간 설정
 * @param {number} min 기준 분 설정
 */
export const printRestTime = (section, hour = 11, min = 0) => {
  let now = new Date();
  let tomorrow = new Date(new Date().setDate(now.getDate() + 1));
  let tomorrowStd = new Date(tomorrow.getFullYear(),tomorrow.getMonth(),tomorrow.getDate(),hour,min,0); // 당일 기준 시간 지난 경우
  let todayStd = new Date(now.getFullYear(),now.getMonth(),now.getDate(),hour,min,0); // 당일 기준 시간 지나지 않은 경우
  let restTime = parseInt((tomorrowStd.getTime() - now.getTime()) / 1000);
  restTime =todayStd.getTime() - now.getTime() > 0
      ? parseInt((todayStd.getTime() - now.getTime()) / 1000)
      : restTime;
  let restTimeHour = parseInt(restTime / (60 * 60));
  let restTimeMin = parseInt((restTime % (60 * 60)) / 60);
  let restTimeSec = parseInt((restTime % (60 * 60)) % 60);
  restTimeHour = restTimeHour < 10 ? `0${restTimeHour}` : restTimeHour;
  restTimeMin = restTimeMin < 10 ? `0${restTimeMin}` : restTimeMin;
  restTimeSec = restTimeSec < 10 ? `0${restTimeSec}` : restTimeSec;
  document.querySelector(`${section} .timeout-resttime`).innerText = `${restTimeHour}:${restTimeMin}:${restTimeSec}`;
};

/**
 * 특정 상품 섹션에 스와이퍼 기능을 세팅
 * @param {string} section 섹션 선택자 
 */
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
    },
  });
};
/**
 * 상품의 원가, 할인율, 할인적용가 스트링을 반환하는 함수
 * @param {object} product product json데이터의 원소 객체
 * @returns 원가, 할인율, 할인적용가 스트링
 */ 
const setProdPrice = (product) => {
  let { org_price, dc_percent } = product;
  org_price = Math.round(org_price / 100) * 100;
  let dcPrice = org_price * (1 - dc_percent / 100);
  dcPrice = Math.floor(dcPrice / 100) * 100;
  return [org_price.toLocaleString(), dc_percent, dcPrice.toLocaleString()];
};
/**
 * 스와이퍼 섹션 한개를 메인 태그에 insert하는 함수
 * @param {number} sectionNum 생성할 상품 섹션 넘버
 */
export const displaySwiperSection = async (sectionNum) => {
  let jsonData = await fetch('./json-data/product-data.json');
  let prodList = await jsonData.json();
  prodList.sort(() => Math.random() - 0.5);
  prodList = prodList.slice(0, randInt(6, 10));
  let titleIdx = randInt(0, sectionTitle.length - 1);
  document.querySelector('main').insertAdjacentHTML(
    'beforeend',
    `
  <section class="prod-section${sectionNum} common-prod-section swiper-prod-section">
    <div class="center">
      <span class="prod-section-title">
        ${sectionTitle[titleIdx][0]}
      </span>
      <button class="prod-section-more"><i class="fa-solid fa-chevron-right"></i></button>
      <p class="prod-section-subtitle">${sectionTitle[titleIdx][1]}</p>
      <div class="prod-container">
        <div class="swiper-wrapper">

      ${prodList
        .map((prod) => {
          let { prod_name, imgPath } = prod;
          let [orgPrice, dcPer, dcPrice] = setProdPrice(prod);
          return `
        <div class="product swiper-slide">
          <figure class="prod-figure">
            <img src="${imgPath}" alt="">
            <figcaption>${
              couponName[randInt(0, couponName.length - 1)]
            }</figcaption>
          </figure>
          <button class="prod-cart-btn"><i class="fa-solid fa-cart-shopping"></i> 담기</button>
          <h3 class="prod-name">${prod_name}</h3>
          <span class="original-price">${orgPrice}원</span>
          <div class="discount">
            <span class="dc-percent">${dcPer}%</span>
            <span class="dc-price">${dcPrice}원</span>
          </div>
        </div> 
        `;
        })
        .join('\n')}
        
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
  );
  setProdSwiper(`.prod-section${sectionNum}`);
};

/**
 * 타임아웃 섹션 한개를 메인 태그에 insert하는 함수
 * @param {number} sectionNum 생성할 상품 섹션 넘버
 * @param {number} time 남은시간 계산할 기준 시간 (0~2) 
 */
export const displayTimeoutSection = async (sectionNum,time = randInt(9, 18)) => {
  let jsonData = await fetch('./json-data/product-data.json');
  let prodList = await jsonData.json();
  prodList.sort(() => Math.random() - 0.5);
  prodList = prodList.slice(0, randInt(2, 3));
  let timeStr = time >= 13 ? `오후 ${time - 12}시` : `오전 ${time}시`;
  timeStr = time === 12 ? '자정 12시' : timeStr;
  document.querySelector('main').insertAdjacentHTML(
    'beforeend',
    `
  <section class="prod-section${sectionNum} common-prod-section home-timeout-section">
    <div class="center">
      <div class="timeout-info-container">
        <h2 class="timeout-title">매일 ${timeStr} <br> OPEN !</h2>
        <h3 class="timeout-subtitle">24시간 일일 한정 특가 ⏰</h3>
        <div class="timeout-clock-container">
          <i class="fa-solid fa-clock"></i>
          <span class="timeout-resttime"></span>
        </div>
        <p class="timeout-desc">망설이면 늦어요!</p>
      </div>
      <div class="prod-container">

      ${prodList
        .map((prod) => {
          let { prod_name, imgPath } = prod;
          let [orgPrice, dcPer, dcPrice] = setProdPrice(prod);
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
        `;
        })
        .join('\n')}

      </div>
    </div>
  </section> 
  `
  );
  printRestTime(`.prod-section${sectionNum}`, time);
  const timer = setInterval(() => {
    printRestTime(`.prod-section${sectionNum}`, time);
  }, 1000);
};

const displayBannerSection = () => {
  document.querySelector('main').insertAdjacentHTML(
    'beforeend',
    `
  <section class="banner-section common-prod-section">
      <div class="center">
       <img src="./img/section-banner-img${randInt(1, 5)}.png" alt="">
     </div>
    </section>
  `
  );
};

export const displaySectionsByScroll = (startSectionNum) => {
  randInt(1, 100) <= 25 && displayBannerSection();
  displaySwiperSection(startSectionNum);
  displaySwiperSection(startSectionNum + 1);
  displayTimeoutSection(startSectionNum + 2);
  displaySwiperSection(startSectionNum + 3);
};
