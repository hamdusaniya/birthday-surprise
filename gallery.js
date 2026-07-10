const photos=[
"photo1.jpg",
"photo2.jpg",
"photo3.jpg",
"photo4.jpg",
"photo5.jpg"
];

let current=0;

const img=document.getElementById("photo");

document.getElementById("nextPhoto").onclick=function(){

img.style.opacity="0";

setTimeout(function(){

current++;

if(current<photos.length){

img.src=photos[current];

img.style.opacity="1";

}else{

window.location.href="wish.html";

}

},500);

};
