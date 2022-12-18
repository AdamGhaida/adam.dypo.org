$(document).ready(function () {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

    var mySwiper = new Swiper(".swiper", {
        autoHeight: true,
        autoplay: {
            delay: 10000000,
            disableOnInteraction: false
        },
        speed: 500,
        direction: "horizontal",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar"
        },
        loop: false,
        effect: "slide",
        spaceBetween: 30,
        on: {
            init: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                $(".swiper-pagination-custom .swiper-pagination-switch").eq(0).addClass("active");
            },
            slideChangeTransitionStart: function () {
                $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
                $(".swiper-pagination-custom .swiper-pagination-switch").eq(mySwiper.realIndex).addClass("active");
            }
        }
    });
    $(".swiper-pagination-custom .swiper-pagination-switch").click(function () {
        mySwiper.slideTo($(this).index());
        $(".swiper-pagination-custom .swiper-pagination-switch").removeClass("active");
        $(this).addClass("active");
    });




});


