const headerMobile = document.querySelector(".header-mobile");

headerMobile.innerHTML += `
         <header id="header-mobile-content">
            <section class="wrapper container">
                <a href="./index.html" class="brand">
                <img src="./img/logo.png" alt="" width="220px">
                </a>
                <div class="burger" id="burger">
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
                  <span class="burger-line"></span>
                </div>
                <span class="overlay"></span>
                <nav class="navbar" id="navbar">
                    <ul class="menu" id="menu">
                        <li class="menu-item">
                            <a href="../gioithieu.html" class="menu-link">Giới thiệu</a>
                        </li>
                        
                        <li class="menu-item menu-dropdown">
                            <a href='#' class="menu-link sub1-sanpham" data-toggle="submenu">Sản phẩm<i class="bx bx-chevron-down xem-them-sub1"></i></a>
                            <ul class="submenu-mobile">
                                <li class="submenu-item menu-dropdown-2">
                                    <a href='../sanpham.html' class="submenu-link d-flex justify-content-between" >Thang máy chở khách <i class="bx bx-chevron-down xem-them-sub2"></i></a>
                                
                                    <ul class="submenu-2-mobile">
                                        <li class="submenu-item-2 menu-dropdown-3">  
                                           <a href="" class="submenu-link d-flex justify-content-between"">Thang máy chở khách tiêu chuẩn <i class="bx bx-chevron-down xem-them-sub3"></i></a>
                                           <ul class="submenu-3-mobile">
                                              <li class="submenu-item-3"><a href="../chitietsp.html" class="submenu-link">Thiết kế Buồng Thang</a></li>
                                              <li class="submenu-item-3"><a href="#" class="submenu-link">Tính năng</a></li>
                                              <li class="submenu-item-3"><a href="#" class="submenu-link">Thông số kĩ thuật</a></li>
                                              <li class="submenu-item-3"><a href="#" class="submenu-link">Khả năng Kết Nối</a></li>
                                           </ul>
                                        </li>
                      
                                        <li class="submenu-item-2"><a href="#" class="submenu-link">Thang máy chở khách cao cấp</a></li>
                                        <li class="submenu-item-2"><a href="#" class="submenu-link">Thang máy chở khách lựa chọn</a></li>
                                    </ul>
                                </li>
                                    
                                <li class="submenu-item"><a href="#" class="submenu-link">Thang máy bệnh viện</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Thang máy chở hàng</a></li>
                                <li class="submenu-item"><a href="#" class="submenu-link">Thang máy quan sát</a></li>
                                
                            </ul>
                        </li>
                      
                        <li class="menu-item menu-dropdown">
                            <span class="menu-link sup1-dichvu" data-toggle="submenu">Dịch vụ<i class="bx bx-chevron-down xem-them-sub-dv"></i></span>
                            <ul class="submenu-dv-mobile">
                                <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Thiết kế theo yêu cầu </a></li>
                                <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Bảo trì bảo dưỡng</a></li>
                                <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Kiểm định an toàn thang máy</a></li>
                                <li class="submenu-item"><a href="../dichvu.html" class="submenu-link">Decor thang máy</a></li>
                            </ul>
                        </li>
                
                        <li class="menu-item"><a href="../duan.html" class="menu-link">Dự án</a></li>

                        <li class="menu-item"><a href="../tintuc.html" class="menu-link">Tin tức</a></li>

                        <li class="menu-item menu-dropdown">
                            <span class="menu-link sub1-lienhe" data-toggle="submenu">Liên hệ<i class="bx bx-chevron-down xem-them-sub-lh"></i></span>
                            <ul class="submenu-lh-mobile">
                                <li class="submenu-item"><a href="../lienhe.html" class="submenu-link">Hỗ trợ khách hàng</a></li>
                                <li class="submenu-item"><a href="../lienhe.html" class="submenu-link">Hệ thống phân phối</a></li>
                                <li class="submenu-item"><a href="../lienhe.html" class="submenu-link">Tuyển dụng nhân sự</a></li>
                            </ul>
                        </li>
                
                        <li class="menu-item"><a href="#" class="menu-link menu-icon">
                    <div class="icon-search">
                       <img src='../img/search-icon.png' width='15px'/>
                    </div>
                    <div class="icon-internet">
                       <img src='../img/internet-icon.png' width='20px'/>
                       <p >Việt Nam</p>
                    </div>
                        </a></li>
                    </ul>
                </nav>
            </section>
         </header> 
`;

$(document).ready(function() {
   $('.burger').click(function() {
       $('.navbar').toggleClass('active');
       $('.overlay').toggleClass('active');
   });

   $('.overlay').click(function() {
       $('.navbar').toggleClass('active');
       $('.overlay').toggleClass('active');
   });

   //cac loai menu cap 1
   $('.sub1-sanpham').click(function(e) {
       e.preventDefault();
       //dong het tab old
       if($('.submenu-2-mobile').hasClass('active-mobile')){
           $('.submenu-2-mobile').removeClass('active-mobile');
       }
       //mo tab moi
       $('.submenu-mobile').toggleClass('active-mobile');
   });

   $('.sup1-dichvu').click(function(e) {
      e.preventDefault();
      //mo tab moi
      $('.submenu-dv-mobile').toggleClass('active-mobile');
  });

  $('.sub1-lienhe').click(function(e) {
   e.preventDefault();
   //mo tab moi
   $('.submenu-lh-mobile').toggleClass('active-mobile');
   });

   //cac loai menu cap 2
   $('.xem-them-sub2').click(function(e) {
       e.preventDefault();
       //dong het tab old
       if($('.submenu-3-mobile').hasClass('active-mobile')){
           $('.submenu-3-mobile').removeClass('active-mobile');
       }
       //mo tab moi
       $('.submenu-2-mobile').toggleClass('active-mobile');
   });
   //cac loai menu cap 3
   $('.xem-them-sub3').click(function(e) {
       e.preventDefault();
       $('.submenu-3-mobile').toggleClass('active-mobile');
   });
});


