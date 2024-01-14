const ascensor = document.querySelector('.fa-angles-up');

const navAbout = document.querySelector('#about');
const navServices = document.querySelector('#services');
const navRealizations = document.querySelector('#realizations');
const navContact = document.querySelector('#contact');


// Control de lascenseur
window.addEventListener('scroll', () => {
    if (scrollY > 600){
        ascensor.style.left = "97vw";
    } else {
        ascensor.style.left = "110vw";
    }
})





// Exemples 
let headBand= document.getElementById("headBand");
console.log(headBand);

let test2= document.querySelectorAll(".content");
console.log(test2);