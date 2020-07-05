var link = document.querySelector(".modal-link");
var popup = document.querySelector(".modal-write-us");
var close = popup.querySelector(".modal-close");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=email]");

link.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	name.focus();
});

close.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

form.addEventListener("submit", function (evt) {
	evt.preventDefault();
	console.log(name.value);
	console.log(email.value);
});