let modal = document.getElementById("modal-window");
let btn = document.getElementById("shop-now-btn");
let hhh = document.getElementsByClassName("modal-text")[0];
let ppp = document.getElementsByClassName("modal-close")[0]; 


btn.onclick = function () {
    modal.style.display = "block";
    // modal.style.flexDirection = "column";
}
ppp.onclick = function () {
    modal.style.display = "none";
}