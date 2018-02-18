console.log('Loaded!');


// Change text of main-div
var element = document.getElementById("main-text");

element.innerHTML = "New value";

//move image

var img = document.getElementById("madi");

img.onClick = function() {
    img.style.marginLeft = '10px';
};
