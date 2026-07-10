const photos = [
    "photo1.jpg",
    "photo2.jpg",
    "photo3.jpg",
    "photo4.jpg",
    "photo5.jpg"
];

let current = 0;

const image = document.getElementById("photo");
const button = document.getElementById("nextPhoto");

button.addEventListener("click", function () {

    current++;

    if (current < photos.length) {

        image.src = photos[current];

    } else {

        window.location.href = "wish.html";

    }

});
