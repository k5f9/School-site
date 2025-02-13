<template>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Главная</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com">
  <link href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans&family=Pangolin&display=swap" rel="stylesheet">
</head>
<body>
  <header class="up-stairs">
    <div class="logo">
      <a href="https://gymn42.gosuslugi.ru/"><img src="/img/logo0.png" class="logo-img"></a>
    </div>

    <div class="text-up">

      <div class="glavnaya">

      <li class="li-glavnaya"><a href="/" class="link-glavnaya">Главная</a></li>

      </div>
      <div class="raspisanie-zvonki">

      <li class="li-raspisanie-zvonki"><a href="/lissen" class="link-raspisanie-zvonki">Расписание звонков</a></li>

      </div>
      <div class="raspisanie-merop">

      <li class="li-raspisanie-merop"><a href="" class="link-raspisanie-merop">Расписание мероприятий</a></li>

      </div> 
    

    </div>
    <div class="voiti-kak-uchitel">

      <li><a href="/login">Войти как учитель</a></li>

    </div>
  </header>

  <div class="main">
    <div class="main-text">
      Расписание Уроков, звонков, и школьных событий
    </div>
    <div class="podmain-text">
      просматривайте и редактируйте
    </div>
  </div>

  <div class="description">

    <div class="descr2">
      На данном сайте представлена возможность как ознакомиться с расписанием занятий, так и изменить его (только учителям) 
    </div>
    <div class="descr1">
      Так же есть возможность увидеть какие школьные события активны или будут активны в ближайшее время
    </div>
    

    <div class="descr3">
      Для того что бы войти как учитель и приступить к заполнению или изменению расписания, требуется встретиться лично с автором сайта, либо связаться с ним по контактным данным внизу страницы
    </div>

  </div>
  <div class="footer-content">
    <div class="creation-info">
      <div class="ktoyart-invokeqwe">
      Сайт создан для использования МБОУ гимназией №42

      C автором можно связаться по почте: bogdansavelev24@gmail.com
      </div>
    </div>
  </div>
</body>
</template>

<style>
.balsamiq-sans-regular {
  font-family: "Balsamiq Sans", serif;
  font-weight: 400;
  font-style: normal;
}

.balsamiq-sans-bold {
  font-family: "Balsamiq Sans", serif;
  font-weight: 700;
  font-style: normal;
}

.balsamiq-sans-regular-italic {
  font-family: "Balsamiq Sans", serif;
  font-weight: 400;
  font-style: italic;
}

.balsamiq-sans-bold-italic {
  font-family: "Balsamiq Sans", serif;
  font-weight: 700;
  font-style: italic;
}

.pangolin-regular {
  font-family: "Pangolin", serif;
  font-weight: 400;
  font-style: normal;
}


*{
  margin: 0;
  padding: 0;
}

.logo-img{
  width: 50px;
}

.logo{
  position: relative;
  left: 0;
}

.up-stairs{
  position: relative;
  display: flex;
  text-align: center;
}

.glavnaya{
  position: absolute;
  right: 70%;
  font-family: "Pangolin";
  font-size: 20px;
}

.link-glavnaya{
  transition: 0.3s;
}

.link-glavnaya:hover {
  color: #848ab1;
}

.raspisanie-zvonki{
  position: absolute;
  right: 50%;
  font-family: "Pangolin";
  font-size: 20px;
}

.link-raspisanie-zvonki{
  transition: 0.3s;
}

.link-raspisanie-zvonki:hover {
  color: #848ab1;
}

.raspisanie-merop{
  position: absolute;
  right: 30%;
  font-family: "Pangolin";
  font-size: 20px;
}

.link-raspisanie-merop{
  transition: 0.3s;
}

.link-raspisanie-merop:hover {
  color: #848ab1;
}

.voiti-kak-uchitel{
  position: absolute;
  right: 0;
  background-color: rgb(79, 90, 168);
  color: white;
  width: 120px;
  height: 40px;
  margin-top: 0.25%;
  margin-right: 0.5%;
  border: none; /* Без границы */
  border-radius: 20px;
  text-align: center;
  font-family: 'Balsamiq Sans';
  transition: 0.5s;
  line-height: 20px;
}

.voiti-kak-uchitel:hover {
  background-color: #adb5ff;
  color: #464d80;
}

.text-up{
  margin-top: 0.5%;
}

li{
  list-style-type: none;
}

a{
  text-decoration: none;
  color: black;
}

.main{
  position: relative;
  height: 400px;
  background: -webkit-linear-gradient(125deg, #1e2244,#4b56a9);
  background: linear-gradient(125deg, #1e2244,#4b56a9);
}

.main-text{
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 50px;
  color: white;
  width: 900px;
  text-align: center;
  font-family: 'Balsamiq Sans';
  line-height: 40px;
}

.podmain-text{
  position: absolute;
  top: 70%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  color: white;
}

.descr1{
  position: relative;
  width: 400px;
  height: auto;
  font-size: 25px;
  background-color: #848ab1;
  color: white;
  margin-left: 33%;
  font-family: 'Balsamiq Sans';
  border-radius: 20px;
  padding: 10px;
  line-height: 32px;
}

.descr2{
  position: relative;
  width: 400px;
  height: auto;
  background-color: #d3d7fa;
  font-size: 25px;
  color: #333b73;
  margin-left: 15%;
  margin-top: 3%;
  justify-items: center;
  align-items: left;
  font-family: 'Balsamiq Sans';
  border-radius: 20px;
  padding: 10px;
  line-height: 32px;
}

.descr3{
  position: relative;
  width: 330px;
  height: 400px;
  font-size: 30px;
  background-color: #accaf5;
  color: #002359;
  bottom: 70%;
  left: 70%;
  text-align: center;
  font-family: 'Balsamiq Sans';
  border-radius: 20px;
  padding: 10px;
  line-height: 32px;
}

.description{
  height: 450px;
}


.ktoyart-invokeqwe {
  position: relative;
  font-weight: 500;
  white-space: pre-wrap;
  z-index: 1;
}
.creation-info {
  padding: 0;
  box-sizing: border-box;
  max-width: 100%;
}

.creation-info1 {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  box-sizing: border-box;
}
.creation-info1,
.footer,
.footer-content {
  justify-content: flex-start;
  max-width: 100%;
}
.footer-content {
  background-color: #eaf2ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}
.footer {
  align-self: stretch;
  flex-direction: row;
  position: relative;
  font-size: 16px;
}
.div,
.features,
.features-wrapper,
.footer {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1200px){
  .footer-branding {
    gap: 364px;
  }
}

p, h1, h2, h3, span {
  letter-spacing: normal;
  word-spacing: normal;
}


</style>
