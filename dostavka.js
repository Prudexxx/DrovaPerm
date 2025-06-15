const btn = document.getElementById('toggleBtn');
const info = document.getElementById('info');

btn.addEventListener('click', () => {
  if (info.style.maxHeight && info.style.maxHeight !== '0px') {
    info.style.maxHeight = '0';
    info.style.padding = '0 10px';
  } else {
    info.style.maxHeight = info.scrollHeight + 'px';
    info.style.padding = '10px';
  }
});
//   <!DOCTYPE html>
//   <html lang="ru">
//   <head>
//   <meta charset="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />


//   <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
//   <title>Дрова в Перми</title>
//   <style>

  
//     /* Общие стили */
//     body {
//       padding-top: 60px;
//       margin: 0;
//       font-family: Arial, sans-serif;
//     }

//     /* Шапка - фиксированная */
//     header {
//       position: fixed;
//       top: 0;
//       width: 100%;
//       background-color: #333;
//       padding: 10px 20px;
//       z-index: 1000;
//       display: flex;
//       align-items: center;
//       justify-content: space-between;
//       box-sizing: border-box;
//     }
//     .logo {
//       color: #fff;
//       font-size: 20px;
//     }
//     /* Гамбургер */
//     .burger {
//       display: none;
//       flex-direction: column;
//       justify-content: space-between;
//       width: 25px;
//       height: 18px;
//       cursor: pointer;
//     }
//     .burger span {
//       display: block;
//       height: 3px;
//       background-color: #fff;
//       border-radius: 2px;
//     }

//     /* Меню для десктопа */
//     nav {
//       display: flex;
//       gap: 15px;
//     }
//     nav a {
//       color: #fff;
//       text-decoration: none;
//       padding: 8px 12px;
//       cursor: pointer;
//     }
//     #linkPrice {
//       border: 1px solid #fff;
//     }
//     #linkPrice:hover {
//       background-color: #fff;
//       color: #000;
//     }

//     /* Мобильное меню */
//     @media (max-width: 768px) {
//     #priceContent{
//       height: auto;
//     }
//       nav {
//         display: none;
//       }
//       .burger {
//         display: flex;
//       }
//       #overlay {
//         position: fixed;
//         top: 0; left: 0;
//         width: 100%; height: 100%;
//         background-color: rgba(0,0,0,0.8);
//         display: none;
//         z-index: 1000;
//         padding: 20px;
//         box-sizing: border-box;
//       }
//       #overlay.active {
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//       }
//       #overlay nav {
//         display: flex;
//         flex-direction: column;
//         gap: 20px;
//         margin-top: 50px;
//       }
//       #overlay nav a {
//         color: #fff;
//         font-size: 24px;
//         text-decoration: none;
//         cursor: pointer;
//       }
//     }
    
//     #mainContent{
//       padding-top: 80px;
//     }

//     /* Контент блоки – чтобы не скрывались, добавим padding, чтобы не под шапкой */
//     /* Каждый блок снизу будет отступом для прокрутки */
//   #mainContent,
//   #aboutContent,
//   #servicesContent,
//   #contactsContent,
//   #priceContent {
//     width: 100%;
  
//     margin: 0;
//     padding: 20px 20px 20px 20px; /* отступ снизу, чтобы не уходил под фиксированную шапку */
//     box-sizing: border-box;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     font-family: Arial, sans-serif;
//     text-align: center;
//   }

//   /* Разные фоны для наглядности */
//   #contactsContent {   height: 100vh; }
//   #mainContent { 
  
//   }
//   /* Стили для ДОСТАВКИ ---------------------------------------------------*/
//   #aboutContent { 
//       height: 100vh;
//     background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("/Дрова\ с\ комаза.jpg"); background-size: cover; background-position: center; background-repeat: no-repeat; 
//   color: #a5a5a5;
//     font-size:250%;
//     font-weight: bold;
//     }
//   #infoBtn {
//     padding: 10px 20px;
//     font-size: 16px;
//     cursor: pointer;
//     /* чтобы было проще — ширина по содержимому */
//     display: inline-block;
//   }

//   #infoBox {
//     margin-top: 10px;
//     height: 50px; /* высота, можно подогнать */
//     overflow: hidden;
//     background-color: #eef;
//     width: fit-content; /* чтобы ширина совпадала с содержимым */
//     border: 1px solid #99c;
//     padding: 10px;
//     box-sizing: border-box;
//     transition: height 0.3s ease, width 0.3s ease;
//   }

//   /* чтобы скрывать */
//   .hidden {
//     height: 0;
//     padding: 0;
//     border: none;
//   }

//   .adaptive-button {
//     padding: 10px 20px;
//     width: 250  px;
//   }
//   #toggleBtn{
//   font-size: 20px;
//   }

//   /* Для больших экранов */
//   @media (min-width: 1200px) {
//     .adaptive-button {
//       width: 700px;
//     }
//   #priceContent{
//     height: 100vh;
//   }
//   }

//   /* Конец  Стили для Доставки */


//   /* Стили для контакта --------------------------------------------------------*/


//   #servicesContent {
//   height: 100vh;
//     margin-top: 0;
//     padding-top: 0;
  
//   }
//   #servicesContent p{
//     display: flex;
//     flex-direction: column;
//     justify-content: flex-start; /* по умолчанию так */
//     align-items: stretch; /* чтобы растянуть содержимое по ширине */
//   }


//   /* Конец Стили для контакта */

//   /* Cтили для звказа------------------------------------------------------- */
//   #feedbackForm input[type="number"],
//   #feedbackForm select,
//   #feedbackForm button {
//     width: 100%; /* чтобы все элементы резались в ширину контейнера */
//     box-sizing: border-box; /* чтобы padding и border учитывались в ширине */
//     height: 40px; /* одинаковая высота для всех элементов */
//     padding: 8px 12px; /* внутренние отступы */
//     font-size: 16px; /* шрифт, чтобы выглядело аккуратно */
//     margin-bottom: 10px; /* расстояние между элементами */
//     margin-top: 10px; /* расстояние между элементами */
//   }
//   #priceContent {
//     background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("дрова\ для\ заказа.jpg"); background-size: cover; background-position: center; background-repeat: no-repeat; 
//       color: #a5a5a5; 
//     height: 100vh;
    
    
//     } 
//   label{
//     font-size: 1.5rem;
    
    
//   }
//   .zakaz{
//     font-size: 250%;
//     font-weight: bold;
//   }
//   /* конец Cтили для звказа */
//   </style>
//   </head>
//   <body>

//   <header>
//     <div style="display:flex; align-items:center; justify-content:space-between; width:100%;">
//       <div class="logo">Дрова в Перми</div>
//       <!-- Гамбургер -->
//       <div class="burger" id="burger" aria-label="Меню" aria-expanded="false" role="button" tabindex="0">
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </div>
//     <!--Навигационное меню для десктопа-->
//     <nav>
//       <a href="#" id="linkMain" data-target="mainContent">Цены</a>
//       <a href="#" id="linkAbout" data-target="aboutContent">Доставка</a>
//       <a href="#" id="linkContacts" data-target="contactsContent">Отзывы</a>
//       <a href="#servicesContent1" >Контакты</a>
//       <a href="#" id="linkPrice" data-target="priceContent">Заказ</a>
//     </nav>
//   </header>

//   <!-- Мобильная шторка -->
//   <div id="overlay">
//     <nav>
//       <a href="#" id="mobLinkMain" data-target="mainContent">Цены</a>
//       <a href="#" id="mobLinkAbout" data-target="aboutContent">Доставка</a>
//       <a href="#" id="mobLinkContacts" data-target="contactsContent">Отзывы</a>
//       <a href="#" id="mobLinkPrice" data-target="priceContent">Заказ</a>
//       <a href="#" id="mobLinkServices" data-target="servicesContent">Контакты</a>
//     </nav>
//   </div>
//   <!-- /////////////////////////////////////БЛОКИИ...................................... -->

//                                                                           <!-- Контентные ЦЕНА -->
//   <div id="mainContent">
//     <p style="font-size: 300%; font-weight: bold;">Доставка дров в Перми</p>
//   <div style="display: flex; flex-wrap: wrap; gap: 20px; justify-content: center; padding: 40px; background: linear-gradient(135deg, #f5f7fa, #c3cfe2); font-family: 'Arial', sans-serif;">
//     <!-- Товар 1 -->
//     <div style="flex: 1 1 300px; background: #fff; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; max-width: 350px;">
//       <img src="/ДроваКолотые.PNG" alt="Товар 1" style="width: 100%; height: auto; object-fit: cover;">
//       <div style="padding: 20px; text-align: center;">
//         <h3 style="margin-top: 0; font-size: 1.5em; color: #333;">Дрова (колотые)</h3>
//         <p style="color: #777; font-size: 1em;">Купи и получи в подарок бесплатную услугу!</p>
//         <div style="margin-top: 15px;">
//           <span style="font-size: 1.3em; font-weight: bold; color: #e91e63;">от 2500 руб/куб</span>
//         </div>
//         <a href="#priceContent"> <button style="margin-top: 15px; padding: 12px 25px; border: none; border-radius: 50px; background-color: #e91e63; color: #fff; font-size: 1em; cursor: pointer; transition: background-color 0.3s;">
//           Купить
//         </button></a>
//       </div>
//     </div>

//     <!-- Товар 2 -->
//     <div style="flex: 1 1 300px; background: #fff; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; max-width: 350px;">
//       <img src="ДроваПИленные.PNG" alt="Товар 2" style="width: 100%; height: auto; object-fit: cover;">
//       <div style="padding: 20px; text-align: center;"><br><br>  
//         <h3 style="margin-top: 0; font-size: 1.5em; color: #333;">Дрова (пиленые)</h3>
//         <p style="color: #777; font-size: 1em;">Купи и получи в подарок  бесплатную услугу!</p>
//         <div style="margin-top: 15px;">
//           <span style="font-size: 1.3em; font-weight: bold; color: #4caf50;">от 2000 руб/куб</span>
//         </div>
//     <a href="#priceContent">   <button style="margin-top: 15px; padding: 12px 25px; border: none; border-radius: 50px; background-color: #4caf50; color: #fff; font-size: 1em; cursor: pointer; transition: background-color 0.3s;">
//           Купить
//         </button></a>
//       </div>
//     </div>

//     <!-- Товар 3 -->
//     <div style="flex: 1 1 300px; background: #fff; border-radius: 15px; box-shadow: 0 8px 20px rgba(0,0,0,0.1); overflow: hidden; transition: transform 0.3s, box-shadow 0.3s; max-width: 350px;">
//       <img src="Горбыль.PNG" alt="Товар 3" style="width: 100%; height: auto; object-fit: cover;">
//       <div style="padding: 20px; text-align: center;"><br>
//         <h3 style="margin-top: 0; font-size: 1.5em; color: #333;">Горбыль</h3>
//           <p style="color: #777; font-size: 1em;">Купи и получи в подарок бесплатную услугу!</p>
//         <div style="margin-top: 15px;">
//           <span style="font-size: 1.3em; font-weight: bold; color: #ff9800;">от 1000 руб/куб</span>
//         </div>
//         <a href="#priceContent"><button style="margin-top: 15px; padding: 12px 25px; border: none; border-radius: 50px; background-color: #ff9800; color: #fff; font-size: 1em; cursor: pointer; transition: background-color 0.3s;">
//           Купить
//         </button></a>
//       </div>
//     </div>
//   </div>
//   </div>

//                                                                             <!-- Контентные ДОСТАВКА -->
//   <div id="aboutContent">
//   в следующих населённых пунктах Перми:</p>
//   <div style="display: inline-block; position: relative;">
//     <button id="toggleBtn" class="adaptive-button ">Доставка по районам и снт </button>
//     <div id="info" style="
//       position: absolute;
//       top: 100%;
//       left: 0;
//       width: 100%;
//       overflow: hidden;
//       max-height: 0;
//       background-color: #eef;
//       border: 1px solid #99c;
//       transition: max-height 0.3s ease;
//       box-sizing: border-box;
//       padding: 0 10px;
//     ">
//       <p style="font-size: 15px; font-weight: 100; color: #000;"> <b> 
//         Дзержинский, Ленинский, Свердловский, Мотовилихинский, Орджоникидзевский, Кировский, Индустриальный<br>По СНТ <br> </b>   1-я Ремонтная ул., 16 - СНТ «Автомобилист», "Коллективный сад №142/8", Лядовская ул., 112 - Коллективный сад "Мелиоратор", СНТ "Коллективный сад № 6/1", ул. Старцева, 2аб - СНТ "Коллективный сад № 217", Коллективный сад № 104, СНТ "Кабельщик-1", СНТ "Вишенка", Коллективный сад № 37, СНТ "Зелёный-2", СНТ "Родник", СНТ «Заозёрье», СНТ "Прилив-4", СНТ "Зелёный", Коллективный сад № 276 «Кабельщик», СНТ "Монтажник", СНТ Сад № 77 "Шустовка", СНТ "Садоводческое товарищество № 68", Коллективный сад "Энергетик", СНТ "Прилив-2", СНТ "Спутник", СНТ "Лесная поляна", СНТ "Земляничка", ОНО "Садоводческий кооператив № 79 "Строитель", СНТ "Пищевик", СНТ "Коллективный сад № 13А", Коллективный сад при Пермском вагоноремонтном заводе "Надежда", Коллективный сад № 27, СНТ "Ивушка", СНТ «Сад № 28А», СНТ "Факел", СНТ "Коллективный сад № 31", СНТ "Сылва-2", Коллективный сад № 4, Садоводческий кооператив № 89, СНТ № 65-А "Банная гора", СНТ "Яблонька", СНТ "Уголок", Коллективный сад № 37, СНТ "Коллективный сад № 14А", Коллективный сад № 210, СНТ "Коллективный сад № 16", СНТ "Коллективный сад № 6/2", СНТ № 111, СНТ "Коллективный сад № 6/3", СНТ "Сад № 460", СТ № 86, Коллективный сад № 70, Дачные участки, СНТ "Коллективный сад № 66", Сад № 14, "Коллективный сад №5 завода имени Ленина", СНТ "Коллективный сад № 28", "Коллективный сад № 9А", Коллективный сад "Солнечный", "Коллективный сад № 5 (Б)", Коллективный сад № 70, СНТ №14, СНТ "Коллективный сад № 46", "Коллективный сад №24", СНТ "Коллективный сад № 65 "Мостовлянка", сады, СНТ № 67, СНТ № 109, СНТ "Коллективный сад № 62", сад №59 "Гремячий лог", СНТ "Коллективный сад № 40", коллективный сад №60, СНТ «Железнодорожник», "Коллективный сад №21/177", Коллективный сад № 42, Коллективный сад № 44 "Сетевик", Коллективный сад № 12, сад №50, СНТ "Сад № 12А", СНТ № 6, СНТ "Коллективный сад № 3", СНТ № 52, Садоводческий кооператив № 22/2, "Коллективный сад №25", СНТ "Коллективный сад № 11а", СНТ № 62 "Мечта", Коллективный сад № 4, "Коллективный сад № 26", Садоводческое товарищество № 1, "Коллективный сад №32", Садоводческий кооператив № 102/9, СНТ "Красный Октябрь", Садоводческое товарищество № 68, Коллективный сад № 35 "Уралец", Остатки садовых участков, Коллективный сад № 22а, "Опытник", СНТ № 48, Садоводческий кооператив № 1 "Костарева", коллективный сад №17, СНТ №14а, коллективный сад № 34, Садоводческий кооператив № 70, "Коллективный сад № 20", коллективный сад №21, СНТ "Родник-2", Коллективный сад №11, Коллективный сад № 47 «Благодать», "Коллективный сад №12", сады энтузиастов, СОНПТ №44 - восточная часть, ДНТ "Камская поляна", сады энтузиастов, "Зори", СТ «Молодёжный», СНТ "Движенец", СДТ № 5, СНТ "Коллективный сад", "Железнодорожник", СТ «Надежда», СТ «Сигнал», СНТ "Коллективный сад", СТ «Наука», СНТ «Ассоль», СНТ "Химики", СНТ "Ласьвинские хутора", СНТ «Электрон-2», СНТ "Ягодка", Дачные участки, Садовые участки, СНТ «Факел», СНТ "Север", СНТ № 39, СНТ "Заозерный", СНТ «Коллективный сад № 229», СНТ "Заболотный", Дачный посёлок, СНТ "Луговой", Руины садовых участков, СНТ «Автомобилист», Коллективный сад № 26а, Сад № 93, СТ «Земляничка», СНТ "Оборино-5", "Коллективный сад №23", СНТ "Крым-59", СТ "Керамик", Сад № 152, СНТ "Родник", Сад №1, СНТ «Энергетик», СНТ "Росинка", СТ № 4, СНТ "Ласьвинский", СНТ "Оздоровитель", Сады "Ягодка", СНТ "Сосенка", СНТ "Садовод-2", СНТ "Надежда", СНТ № 69 «Голованово», СНТ "Водник-1", СНТ «Минерал-2», СНТ "Черёмушки-2", СНТ № 63 "Плотинка", СНТ "Оборинское", СНТ «Сосновый бор», Территория недоосвоенных садов, СНТ "Стимул", СНТ "Крона", СНТ «Берёзка-1», СНТ "Ягодка-2", СНТ "Ветеран", СНТ "Виктория", СНТ «Спутник», СНТ "Электровозник", СНТ "Ласьва-2", СНТ «Берёзка», СНТ "Минерал-1", "Репка", СНТ «Якорь», СНТ "Строитель", СНТ «Спутник-2», СНТ "Водник-2", СК "Крым", СНТ "Черёмушки", СНТ "Коллективный сад № 74", СНТ "Родничок", Коллективный сад № 38 "Подлипки", СНТ № 1, СНТ «Сылва», СНТ "Тополёк", СНТ «Парма», СНТ "Заозёрный", СНТ "Липогорье 1", СНТ "Наука", СТ «Юбилейный», СНТ "Берег Камы", "Коллективный плодово-ягодный сад №11", СНТ "Лесной", СНТ № 85, СНТ "Ласьва", Садоводческое товарищество № 87, Коллективный сад № 65-Шустовка, СНТ Станции Пермь Сортировочная, СНТ "Любитель", СНТ "Сад № 231", Бывшая деревня Кабаи, Коллективный сад "Заря", "Дружба", СНТ "Коллективный сад № 225", СНТ "Заборское озеро", СНТ "Коллективный сад № 224", СНТ "Крымский", СНТ "Коллективный сад № 173", СНТ "Лесная поляна", Сад № 175 "Вишенка", Зяблово, СНТ "Калинка", СНТ "Садовод", СНТ "Коллективный сад № 176", СНТ " Инкар-233", СНТ "Пруды", СНТ "Коллективный сад № 215", Фроловский с/к "№ 172", СНТ "Коллективный сад № 184", Фроловский с/к № 215, СНТ "Коллективный сад № 69", СНТ "Коллективный сад № 257", СНТ "Вишенка-2", СНТ "Отдых", СНТ "Коллективный сад № 4 "Рябинушка", СНТ "Вишенка", СНТ "Коллективный сад № 39", СНТ "Коллективный сад № 142/7", СНТ "Коллективный сад № 226", СНТ № 134, СНТ «Коллективный сад № 5 Гремячий лог», СНТ "Коллективный сад № 142/2", СНТ "Коллективный сад № 58", СНТ "Черёмушки", СНТ "Коллективный сад № 143", СНТ "Природа", Бывший СНТ «Коллективный сад № 63», Коллективный сад "Политехник", СНТ "Малинка-1", СНТ "Железнодорожник", Коллективный сад № 71, СНТ "Ивушка", СНТ "Коллективный сад № 55 "Энергетик", СНТ № 263 «Архитектор», Коллективный сад № 57, СНТ "Прилив-1", СНТ "Коллективный сад № 54", Коллективный сад № 47/5, СНТ "Транспортник", СНТ "Ягодка", СНТ "Луч-2", СНТ "Медик", Сады, СНТ «Малинка-2», СТ "Оазис", СНТ «Красава», СНТ "Мечта", СНТ "Красава-2", СТ "Нива", СНТ "Коллективный сад Речник-1", СТ "Родник", СНТ "Берег Камы-2", СНТ «Ветеран», СНТ "Природа", СНТ "Ягодка №7а", СНТ "Коллективный сад "Шпалопропиточный", Коллективный сад №47/4, СНТ "Коллективный сад № 2", СНТ "Дорожник", СНТ "Коллективный сад № 1 Дзержинского райпищеторга", СНТ "Рябинка", СНТ № 1, СНТ "Строитель", СНТ "Ласьва-1", СНТ "Травинка",</p>
//     </div>  
//   </div>

//   </div>




//                                                                             <!-- Контентные Отзывы --> 
//   <div id="contactsContent" style="background-image:linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(ДроваОтзывы.jpg) ;" >
//   <div style="max-width: 900px; margin: 20px auto; font-family: Arial, sans-serif;">
//     <h2 style="text-align: center; margin-bottom: 20px;  color: #a5a5a5;
//     font-size:250%;">Отзывы наших клиентов</h2>
//     <div style="display: flex; flex-wrap: wrap; gap: 20px;">
//       <!-- Отзыв 1 -->
//       <div style="flex: 1 1 280px; background-color: #f0f0f0; padding: 15px; border-radius: 8px;">
//         <h3 style="margin-top: 0;">Ирина К.</h3>
//         <p style="font-style: italic;">"Отличный сервис! Всё было быстро и в срок. Очень довольна."</p>
//         <p style="margin: 0; font-size: 0.9em; color: #f8cb04;">★★★★★</p>
//       </div>
//       <!-- Отзыв 2 -->
//       <div style="flex: 1 1 280px; background-color: #f0f0f0; padding: 15px; border-radius: 8px;">
//         <h3 style="margin-top: 0;">Алексей П.</h3>
//         <p style="font-style: italic;">"Порадовала команда профессионалом. Обязательно ещё обращусь."</p>
//         <p style="margin: 0; font-size: 0.9em; color: #f8cb04;">★★★★★</p>
//       </div>
//       <!-- Отзыв 3 -->
//       <div style="flex: 1 1 280px; background-color: #f0f0f0; padding: 15px; border-radius: 8px;">
//         <h3 style="margin-top: 0;">Мария Л.</h3>
//         <p style="font-style: italic;">"Очень понравилось! Всё четко и удобно, спасибо!"</p>
//         <p style="margin: 0; font-size: 0.9em; color: #f8cb04;">★★★★★</p>
//       </div>
//       <div style="flex: 1 1 280px; background-color: #f0f0f0; padding: 15px; border-radius: 8px;">
//         <h3 style="margin-top: 0;">Тамара С.</h3>
//         <p style="font-style: italic;">"Вот все понравилось! Успеха вам!"</p>
//         <p style="margin: 0; font-size: 0.9em; color: #f8cb04;">★★★★★</p>
//       </div>
//     </div>
//   </div>
//   </div>

//                                                                             <!-- Контентные ЗАКАЗ-->

//   <div id="priceContent">
//     <p class="zakaz">Заказажи обратный звонок <br>в ближайшее время  с вами свяжется менеджер</p>
//     <div class="form-container">

//       <form id="feedbackForm">
//         <label for="name">Телефон</label>
//         <input type="number" id="name" name="name" placeholder="Введите ваш номер" required maxlength="12" />

//         <label for="phone">Продукт</label>
      

//     <select id="phone" name="phone" required  type="number" >
//       <option value="">Выберите продукт</option>
//       <option value="Дрова колотые 2500руб/куб">Дрова колотые 2500руб/куб</option>
//       <option value="Дрова (пиленые) от 2000 руб/куб">Дрова (пиленые)  от 2000 руб/куб</option>
//       <option value="Горбыль от 1000 руб/куб">Горбыль от 1000 руб/куб</option>
//     </select>

//         <button type="submit" id="submitBtn">Отправить</button>
//       </form>
//                                                                                   <!-- Контентные УСЛУГИ -->
//   <div id="servicesContent">

//     <div class="info">
//       <h3>Адрес</h3>
//       <p>  село Лобаново, ул. Центральная 11Б</p>
//       <h3>Отдел продаж</h3>
//       <p>	+7 (342) 246-12-09</p>
//       <h3>Почта</h3>
//       <p>	samosvalchikrf@gmail.com</p></div>
//   </div>
//     </div>
//                                                                               <!-- Контентные УСЛУГИ -->

//     <!-- <div class="map">

//     <script type="text/javascript" charset="utf-8" async src="https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A2d0d214bd1ea6a8396325a966e27eea48606e0182e2fbc714134a1e5318ba326&amp;width=500&amp;height=400&amp;lang=ru_RU&amp;scroll=true"></script>

//   </div> -->
//   </div>
  