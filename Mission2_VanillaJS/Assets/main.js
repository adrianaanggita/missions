let imgArrS = document.querySelectorAll(".imgS");
let imgArrF = document.querySelectorAll(".imgF");
let prevX = 0;
let prevY = 0;
let moveXAmount = 0;
let moveYAmount = 0;

document.addEventListener("mousemove", function(e){
    mousePos(e);
})

function mousePos(e){
    moveXAmount = (e.pageX - prevX) / 2;
    moveYAmount = (e.pageY - prevY) / 2 ;

    moveImgS(moveXAmount, moveYAmount);
    moveImgF(moveXAmount, moveYAmount);
    
    prevX = e.pageX;
    prevY = e.pageY;
}

function moveImgS(xAmount, yAmount) {

    imgArrS.forEach(function(img){
        let movementStrength = 20 + (Math.random() * 20);

        img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
        img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";
    })
    
}

function moveImgF(xAmount, yAmount) {

    imgArrF.forEach(function(img){
        let movementStrength = 5 + (Math.random() * 15);

        img.style.left = (img.offsetLeft) - (xAmount/movementStrength) + "px";
        img.style.top = (img.offsetTop) - (yAmount/movementStrength) + "px";
    })   
}

const loader = document.querySelector('.loader');
const main = document.querySelector('.main');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';

        main.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 0 );
    }, 600);
}

init();