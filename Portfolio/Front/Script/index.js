const ascensor = document.querySelector('.fa-arrow-up-short-wide');

window.addEventListener('scroll', () => {
    if (scrollY > 600){
        ascensor.style.left = "96vw";
    } else {
        ascensor.style.left = "110vw";
    }
})





// Exemples 
let headBand= document.getElementById("headBand");
console.log(headBand);

let test2= document.querySelectorAll(".content");
console.log(test2);