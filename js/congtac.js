const congtac = document.querySelector('.congtac')

congtac.innerHTML +=` 
<div class="section-7 py-4 container">
   <div class="d-flex py-4 justify-content-center align-items-center">
      <img src="./img/arrow-right.png" alt="" width="18px">
      <h3 class="fs-5 fw-bold ms-2">ĐỐI TÁC CHIẾN LƯỢC</h3>
   </div>
   <div class="doitac">
      <div class="item-doi-tac">
         <img src="./img/doitac1.png" alt="" width="100%"> 
      </div>
      <div class="item-doi-tac">
         <img src="./img/doitac2.png" alt="" width="100%">
      </div>
      <div class="item-doi-tac">
         <img src="./img/doitac3.png" alt="" width="100%">
      </div>
      <div class="item-doi-tac">
         <img src="./img/doitac4.png" alt="" width="100%">
      </div>
      <div class="item-doi-tac">
         <img src="./img/doitac5.png" alt="" width="100%">
      </div>
   </div>
</div>`

$(document).ready(function(){
   $('.doitac').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     autoplay: true,
     autoplaySpeed: 2000,
     dots: false,
     prevArrow: false,
     nextArrow: false,
     responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 2
         }
       }
     ]
   });
 });

