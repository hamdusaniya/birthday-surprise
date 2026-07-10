const button = document.getElementById("openBook");

if (button) {

    button.addEventListener("click", function () {

        document.body.style.opacity = "0";

        setTimeout(function () {

            window.location.href = "gallery.html";

        }, 800);

    });

}
