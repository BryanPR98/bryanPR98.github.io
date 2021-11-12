/*Efecto de slide menú hambuguesa*/
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
	navMenu.classList.toggle("nav-menu_visible");
	if (navMenu.classList.contains("nav-menu_visible")) {
		navToggle.setAttribute("aria-label", "Cerrar menú");
	} else {
		navToggle.setAttribute("aria-label", "Abrir menú");
	}
});
/*movimiento de barras (click)*/
let menu = document.querySelector(".menu-icon");
menu.addEventListener("click", () =>{
	menu.classList.toggle("active");
})