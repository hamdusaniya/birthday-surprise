window.onload=function(){

setTimeout(function(){

document.getElementById("message1").classList.add("show");

},2000);

setTimeout(function(){

document.getElementById("message2").classList.add("show");

confetti({

particleCount:140,

spread:90,

origin:{y:.65}

});

},5000);

}
