// JavaScript Document
window.onscroll = function () {
	shadow()
};

var navbar = document.getElementById("wrapper-top");

function shadow() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		navbar.classList.remove("shadow-1")
		navbar.classList.add("shadow-2");
	} else {
		navbar.classList.remove("shadow-2")
		navbar.classList.add("shadow-1");
	}
}