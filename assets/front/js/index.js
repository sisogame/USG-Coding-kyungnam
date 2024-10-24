$(document).ready(function () {
  // 메인 배너 이미지
  const swiper = new Swiper(".swiper", {
    
    slidesPerView: 1,
    loop: true,
    freemode: true,

    spaceBetween: 0,
    centeredSlides: true,
    speed: 1800, //2024-10-17 modify
    
    parallax: true,
    autoplay: {
      delay:2200,//2024-10-17 modify
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

  
  });

  //스톱
  $(".swiper-button-area .stop").click(function () {
    $(".toggle").toggleClass("on");
    swiper.autoplay.stop();
    return false;
  });
  //플레이
  $(".swiper-button-area .play").click(function () {
    $(".toggle").toggleClass("on");
    swiper.autoplay.start();
    return false;
  });
});

(function () {
  // 왼쪽 탭 메뉴(Vertical Tab)
  $(function () {
    $(".con > div").hide();
    $(".nav a")
      .click(function () {
        $(".con > div").hide().filter(this.hash).fadeIn();
        $(".nav li a").removeClass("active");
        $(".nav li span").removeClass("active");
        $(this).parent().find("span").addClass("active");
        $(this).parent().find("a").addClass("active");
        return false;
      })
      .filter(":eq(0)")
      .click();
  });
})();

$(document).ready(function () {
  //텝 안에 swiper

  var $bottomSlide = null;
  var $bottomSlideContent = null;
  function initializeSwiper(container) {
    return new Swiper(container, {
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      loop: true,
      roundLengths: true,
      slidesPerView: "auto",
      centeredSlides: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      observer: true,
      observeParents: true,
    });
  }

  const tabItem = document.querySelectorAll(".tab_item");
  const tabInner = document.querySelectorAll(".tab_inner");
  const swiperContainers = document.querySelectorAll(".swiper-container");
  const swipers = [];

  // 페이지 로드 시 Swiper 초기화
  swiperContainers.forEach((container) => {
    swipers.push(initializeSwiper(container));
  });

  tabItem.forEach((tab, idx) => {
    tab.addEventListener("click", function () {
      tabInner.forEach((inner) => {
        inner.classList.remove("active");
      });

      tabItem.forEach((item) => {
        item.classList.remove("active");
      });

      tabItem[idx].classList.add("active");
      tabInner[idx].classList.add("active");

      // swipers[idx].destroy(true, true);
      // swipers[idx] = initializeSwiper(swiperContainers[idx]);

      //슬라이드 인덱스 초기화
      swipers.forEach((item) => {
        item.updateSlides(); //슬라이드 새로 계산(커지는 이펙트)
        item.slideToLoop(0, 0, false); //인덱스 0으로 이동
      });
    });
  });
});

// footer 관련기관  slick

$(document).ready(function () {
  // 관련기관
  $(".footer_autoplay").slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    swipeToSlide: false,
    touchMove: false,
    arrows: true,
    prevArrow: $("#footer_arrow_prev"),
    nextArrow: $("#footer_arrow_next"),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });
});

