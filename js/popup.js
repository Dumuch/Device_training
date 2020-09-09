var link = document.querySelector(".contacts-button")
  , popup = document.querySelector(".popup-write-us")
  , close = popup.querySelector(".popup-write-us__close");
link.addEventListener("click", function(e) {
    e.preventDefault(),
    popup.classList.add("popup-write-us--open")
}),
close.addEventListener("click", function(e) {
    e.preventDefault(),
    popup.classList.remove("popup-write-us--open")
}),
window.addEventListener("keydown", function(e) {
    27 === e.keyCode && popup.classList.contains("popup-write-us--open") && popup.classList.remove("popup-write-us--open")
});
