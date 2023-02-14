let mobileMenuToggle = document.querySelector(".mobile-menu-toggle");
let mobileMenu = document.querySelector(".header-navigation");
mobileMenuToggle.addEventListener("click", () => {
	mobileMenu.classList.toggle("menu-opened");
});
