document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const closeMenu = document.getElementById("close-menu");
  const navLinks = document.getElementById("nav-links");

  menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("translate-x-full");
  });

  closeMenu.addEventListener("click", function () {
      navLinks.classList.add("translate-x-full");
  });
});



