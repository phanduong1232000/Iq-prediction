new WOW().init();

$(window).on('load', function () {
    $('#myModal').modal('show');
});


$(document).ready(function () {
    var toggle = 1;
    $('.en-up').click(function () {
        toggle++;
        if ((toggle % 2) == 0) {
            $('.card__side--front').css({
                'transform': 'rotateY(-180deg)'
            });
            $('.card__side--back').css({
                'transform': 'rotateY(0deg)'
            });
        } else {
            $('.card__side--back').css({
                'transform': 'rotateY(-180deg)'
            });
            $('.card__side--front').css({
                'transform': 'rotateY(0deg)'
            });
        }
    });

    $('.back-prev').click(function () {
        toggle++;
        if ((toggle % 2) == 0) {
            $('.card__side--front').css({
                'transform': 'rotateY(-180deg)'
            });
            $('.card__side--back').css({
                'transform': 'rotateY(0deg)'
            });
        } else {
            $('.card__side--back').css({
                'transform': 'rotateY(-180deg)'
            });
            $('.card__side--front').css({
                'transform': 'rotateY(0deg)'
            });
        }
    });
});

var swiper1 = new Swiper(".swiper-partner", {
    slidesPerView: 4,
    spaceBetween: 10,
    slideToClickedSlide: true,
    // allowTouchMove:false,
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
        dragSize: 100,
      },
      mousewheel: {
        enabled: true,
        sensitivity: 5.5,
      },
    // auto
    // autoplay: {
    //     delay: 3500,
    //     disableOnInteraction: false,
    // },
    loop: false,
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
            slidesPerView:1,
            spaceBetween: 1
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
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
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
            slidesPerView:6,
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