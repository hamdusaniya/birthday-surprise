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

    image.style.opacity = 0;

    setTimeout(function(){

        current++;

        if(current < photos.length){

            image.src = photos[current];

            image.style.opacity = 1;

        }else{

            window.location.href="wish.html";

        }

    },800);

});
