<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://kit.fontawesome.com/1fc51434d9.js" crossorigin="anonymous"></script>
  <script src="http://code.jquery.com/jquery-latest.js"></script>
  <script src="https://unpkg.com/swiper@7/swiper-bundle.min.js"></script>
  <script type="module" src="./js/common.js"></script>
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700;800&family=Nanum+Myeongjo:wght@400;700;800&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Nanum+Gothic:wght@400;700;800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://unpkg.com/swiper@7/swiper-bundle.min.css" />
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/main.css">
  <link rel="stylesheet" href="./css/header/header.css">
  <link rel="stylesheet" href="./css/home/home-common.css">
  <link rel="stylesheet" href="./css/home/home-visual.css">
  <link rel="stylesheet" href="./css/home/home-swiper-section.css">
  <link rel="stylesheet" href="./css/home/home-timeout-section.css">
</head>

<body>
  <script type="module" src="./js/header.js"></script>

  
  <div class="popup-banner">
    <img src="./img/popup-banner-img.png" alt="">
    <div class="btn-container">
      <button class="close-popup-tomorrow">오늘 하루 안 보기</button>
      <button class="close-popup">닫기</button>
    </div>
  </div>


  <div class="top-banner">
    지금 가입하고,<span> 1만원 할인 쿠폰</span> 받아가세요!
    <button><i class="fa-solid fa-x"></i></button>
  </div>

  <header class="">
    <div class="center">

      <ul class="members">
        <li><a class="active" href="#">회원가입</a></li>
        <li><a href="#">로그인</a></li>
        <li><a href="#">고객센터</a></li>
      </ul> <!--members-->

      <div class="header-middle">
        <ul class="header-logo">
          <li><img class="logo-img" src="./img/logo.png" alt=""></li>
          <li><a class="market active" href="#" class="market">마켓컬리</a></li>
          <li><a href="#" class="beauty">뷰티컬리</a></li>
        </ul>

        <?php include './components/header-search.php' ?>

        <?php include './components/header-buttons.php' ?>

      </div><!--header middle-->

      <div class="header-gnb">

        <div class="categories">
          <span>
            <i class="fa-solid fa-bars"></i>
            카테고리
          </span>
          <ul class="category-list">
            <li class="new"><i class="fa-solid fa-champagne-glasses"></i> 9월 뷰티컬리 페스타</li>
            <li class="new"><i class="fa-solid fa-gift"></i> 2023 추석 선물세트</li>
            <li><i class="fa-solid fa-carrot"></i> 채소</li>
            <li><i class="fa-solid fa-apple-whole"></i> 과일•견과•쌀</li>
            <li><i class="fa-solid fa-fish"></i> 수산•해산•건어물</li>
          </ul>
        </div>

        <ul class="gnb-menu">
          <li><a href="#">신상품</a></li>
          <li><a href="#">베스트</a></li>
          <li><a href="#">알뜰쇼핑</a></li>
          <li><a href="#">특가/혜택</a></li>
        </ul>

        <?php include './components/header-search.php' ?>

        <?php include './components/header-buttons.php' ?>

        <div class="deliv-guide">
          <span>샛별•택배</span> 배송안내
        </div>


      </div>


    </div> <!--center-->
  </header>