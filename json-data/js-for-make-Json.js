class Product {
  constructor(prod_name, org_price, dc_percent, imgPath) {
    this.prod_name = prod_name
    this.org_price = org_price
    this.dc_percent = dc_percent
    this.imgPath = imgPath
  }
}
const prodList = [
  new Product('[전주 베테랑] 인기 메뉴 5종 (택2)', 8900, 10, './img/products-img/product15.jpg'),
  new Product('[닥터브로너스] 퓨어 캐스틸 솝 950ml 5종 (택1)(+펌프 증정)', 33000,25, './img/products-img/product16.jpg'),
  new Product('[선물세트] 대상 건강한 갱년기를 위한 리봄순액 (30일분)', 62000, 53, './img/products-img/product17.jpg'),
  new Product('덴마크 유산균이야기 선물세트 (180일분)+(쇼핑백증정)', 276000,65, './img/products-img/product25.jpg'),
  new Product('[글래드] 매직랩 미니+매직백 세트 6종 (택1)',16500,21,'./img/products-img/product26.jpg'),
  new Product('[발뮤다] 팟 전기주전자 2종 (화이트/블랙 택1)',199000,20,'./img/products-img/product27.jpg'),
  new Product('[설화수] 자음 2종 세트',140000,20,'./img/products-img/product7.jpg'),
  new Product('[선물세트] 횡성축협한우 1++ 프리미엄 1호 (냉장) (예약일 수령)',259000,10,'./img/products-img/product24.jpg'),
  new Product('프리미엄 구강 선물세트_투스노트, 유시몰 5종 (택1)',80000,53,'./img/products-img/product28.jpg'),
  new Product('[델리치오] 호주산 목초육 안심 스테이크 250g (냉장)',22900,25,'./img/products-img/product5.jpg'),
  new Product('[시골보쌈과 감자옹심이] 감자 옹심이 칼국수 (2인분)',10500,15,'./img/products-img/product29.jpg'),
  new Product('[이연복의 목란] 짜장면 2인분',9900,5,'./img/products-img/product30.jpg'),
  new Product('[한팟] 치즈 부대찌개 1858g(냉장)',13500,10,'./img/products-img/product31.jpg'),
  new Product('[통뼈] 뼈해장국 900gX2개입',21000,13,'./img/products-img/product32.jpg'),
]

console.log(JSON.stringify(prodList));