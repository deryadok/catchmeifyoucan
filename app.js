﻿var counter = 0;

function CatchMe() {
    var gif = document.getElementById("catchMeGif");

    var x = Math.floor(Math.random() * (window.innerWidth - 150));
    var y = Math.floor(Math.random() * (window.innerHeight - 150));

    gif.style.left = x + "px";
    gif.style.top = y + "px";
    

    counter++;
}

function Caught() {
    alert(counter + ". seferde yakalandım");
    counter = 0;
}