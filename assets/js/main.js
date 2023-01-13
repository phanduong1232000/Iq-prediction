new WOW().init();

var swiper1 = new Swiper(".swiper-partner", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // auto
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 3,
        spaceBetween: 4
        },
        1323: {
        slidesPerView: 5,
        spaceBetween: 1
        },
        1623: {
            slidesPerView: 6,
            spaceBetween: 1
        }
    }
});

var swiper2 = new Swiper(".swiper-coin", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // auto
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    loop: true,
    navigation: {
        nextEl: '.next-coin',
        prevEl: '.prev-coin',
      },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        // when window width is >= 480px
        120: {
        slidesPerView: 2,
        spaceBetween: 2
        },
        // when window width is >= 640px
        740: {
        slidesPerView: 15,
        spaceBetween: 4
        },
        1323: {
        slidesPerView: 19,
        spaceBetween: 1
        },
        1623: {
            slidesPerView: 22,
            spaceBetween: 1
        }
    }
});
