const cover = document.getElementById("cover");

cover.addEventListener("click", () => {

document.body.style.opacity = "0";

setTimeout(() => {

window.location.href = "gallery.html";

},700);

});
