<?php include 'header.php' ?>
<script type="module" src="./js/home.js"></script>
<script type="module" src="./js/template.js"></script>
<script type="module" src="./js/infinit-scroll.js"></script>

<button class="top-btn">
<i class="fa-solid fa-arrow-up"></i>
</button>

<main>

  <div class="sticky-banner-scope">
    <div class="sticky-banner">
      <img class="deliv-img" src="./img/deliveryInfo.png" alt="">
      <button>등급별 혜택</button>
      <button>레시피</button>
      <div class="recent-prod-container">
        <h5>최근 본 상품</h5>
        <img src="./img/products-img/product1.jpg" alt="">
        <img src="./img/products-img/product2.jpg" alt="">
      </div>
    </div>
  </div> <!--sticky banner-->

  <section class="home-visual">
    <div class="carousel">
      <div class="swiper-wrapper">
        <!-- dynamic HTML -->
      </div>
      <button class="swiper-button-prev">
        <i class="fa-solid fa-chevron-left"></i>
      </button>
      <button class="swiper-button-next">
        <i class="fa-solid fa-chevron-right"></i>
      </button>
      <div class="pagination"></div>
    </div>
  </section> <!--home-visual section-->

 
  <!-- product section 동적 생성-->


</main>


<div class="trigger"></div> <!--무한 스크롤 트라거-->

<?php include 'footer.php' ?>



