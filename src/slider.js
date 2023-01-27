let images = ["slide-img.png", "logo.png"];

let slider = document.querySelector("#slider");
let img = slider.querySelector("img");


let i = 0;
window.setInterval(function () {

    img.src = "img/" + images[i];

    if (i == 1) {
        i = 0;
    } else {
        i++;
    }
    
}, 1000);