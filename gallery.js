const photos=[

"photo1.jpg",

"photo2.jpg",

"photo3.jpg",

"photo4.jpg",

"photo5.jpg"

];

let current=0;

const photo=document.getElementById("photo");

const button=document.getElementById("nextPhoto");

button.onclick=function(){

photo.style.opacity="0";

setTimeout(()=>{

current++;

if(current<photos.length){

photo.src=photos[current];

photo.style.opacity="1";

}else{

window.location.href="wish.html";

}

},500);

};
