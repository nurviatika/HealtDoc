document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const spans = menuToggle.querySelectorAll("span");
    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            spans[0].classList.toggle("rotate-down");
            spans[1].classList.toggle("hide");
            spans[2].classList.toggle("rotate-up");
        });
    }

    var swiperFrame = new Swiper(".frame-image", {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false, 
        },
        speed: 1000, 
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        breakpoints: {
            375: { slidesPerView: 2, spaceBetween: 15 },
            640: { slidesPerView: 3, spaceBetween: 10 },
            768: { slidesPerView: 3, spaceBetween: 10 },
            1024: { slidesPerView: 4, spaceBetween: 15 },
        }
    });

    var swiperFeatures = new Swiper(".features-image", {
        loop: true,
        slidesPerView: 1, 
        spaceBetween: 20,
        autoplay: {
            delay: 2000, 
            disableOnInteraction: false, 
        },
        speed: 1000,
        effect: "slide", 
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            1024: { slidesPerView: 3, spaceBetween: 60 },
        }
    });
    
    window.nextSlide = function () {
        swiperFeatures.slideNext();
    };
    
    window.prevSlide = function () {
        swiperFeatures.slidePrev();
    };
   
});



