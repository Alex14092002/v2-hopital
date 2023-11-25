const doitac = document.querySelector('#doitac');
const urlImg = './img/demo-humnan.png'
doitac.innerHTML += `
<div class='container position-relative'>
  
  <div class="d-flex title-doitac align-items-center">
    <img src="./img/arrow-right.png" alt="" width="18px">
    <h3 class="fs-4 ms-2 fw-bold text-lien-he">LIÊN HỆ</h3>
  </div>
</div>

<div class="position-absolute content-doitac-box">
  <div class="content-doitac">
    <div class="content-doi-ngu">
      <h2 class='py-2 text-dark fw-bold fs-24 pb-2'>ĐỘI NGŨ CHUYÊN GIA CỦA CHÚNG TÔI</h2>
      <p class="text-justify fw-300">
        Đội ngũ chăm sóc khách hàng của iTEK ELEVATOR Việt Nam là một đội ngũ đáng tin cậy và đồng hành cùng khách hàng, đảm bảo rằng trải nghiệm của khách hàng với công ty luôn tốt nhất và đáp ứng mọi mong đợi.
      <br/>
      <br/>
        Chuyên nghiệp: Đội ngũ chăm sóc khách hàng của chúng tôi được đào tạo chuyên sâu về lĩnh vực thang máy và an toàn liên quan thang. Họ có kiến thức vững vàng về không chỉ về thẩm mỹ mà còn về chuyên môn lắp đặt, bảo trì tư vấn đúng nhu cầu giúp khách hàng có được sự tư vấn và hỗ trợ chính xác, đáng tin cậy.
      </p>
    </div>
  </div>
</div>

<div class="img-lucgiac">
  <div class="swiper-container slide-doitac position-absolute">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="${urlImg}" alt="" class="item-doi-tac1"> 
        </div>
        <div class="swiper-slide">
          <img src="${urlImg}" alt="" class="item-doi-tac1"> 
        </div>
        <div class="swiper-slide">
          <img src="${urlImg}" alt="" class="item-doi-tac1"> 
        </div>
      </div>
      
  </div>
  <div class="swiper-pagination"></div>
</div>

<div class='position-absolute btn-img-lienhe'>
  <div class='position-relative'>
    <img src='../img/button-lien-he.png' width=220px'/>
    <div class="position-absolute text-btn-lienhe">
      Điền thông tin yêu cầu
    </div>
  </div>
</div>

<div class="img-lucgiacnho">
</div>    
`
//slide cua doi ngu ky thuat su
document.addEventListener('DOMContentLoaded', function () {
  // Khởi tạo Swiper
  var mySwiper = new Swiper('.swiper-container', {
    
    slidesPerView: 1,
    spaceBetween: 30, 
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true, 
    },
  });
});