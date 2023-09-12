<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://kit.fontawesome.com/1fc51434d9.js" crossorigin="anonymous"></script>
  <link rel="stylesheet" href="./css/reset.css">
  <link rel="stylesheet" href="./css/header/header.css">
  <link rel="stylesheet" href="./css/home/home-visual.css">
</head>

<body>
  <!-- <div class="top-banner">
    지금 가입하고, 1만원 쿠폰 받아가세요!
  </div> -->
  <header class="fix">
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
            <li>9월 뷰티컬리 페스타</li>
            <li>2023 추석 선물세트</li>
            <li>채소</li>
            <li>과일•견과•쌀</li>
            <li>수산•해산•건어물</li>
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