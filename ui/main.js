console.log('Loaded!');


// Change text of main-div
var element = document.getElementById("main-text");

element.innerHTML = "New value";

//move image

var img = document.getElementById("madi");
var marginLeft = 0;
img.moveRight = function() {
    marginLeft = marginLeft + 10;
    img.style.marginLeft = margingLeft + 'px';
};

img.onclick = function() {
    var interval = setInterval(moveRight, 100);
};