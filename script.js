document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const spans = menuToggle.querySelectorAll("span");

    menuToggle.addEventListener("click", function () {
        navLinks.classList.toggle("active");

        spans[0].classList.toggle("rotate-down");
        spans[1].classList.toggle("hide");
        spans[2].classList.toggle("rotate-up");
    });
});
