let index = 0;
slider(index);
var carousel;

// function plusSlides(n) {
//     slider(index += n)
// }


// function currentSlide(n) {
//     slider(index = n);
// }

function slider(n) {
    let img = document.getElementsByClassName("img-container");
    let dots = document.getElementsByClassName("dot");
    if (n > img.length) {
        index = 1;
    }
    if (n < 1) {
        index = img.length;
    }
    for (let i = 0; i < img.length; i++) {
        img[i].style.display = "none";
    }

    index++
    if (index > img.length) {
        index = 1
    }
    for (let i = 0; i < dots.length; i++) {
        // dots[i].classList.replace("dot", "clicked")
        dots[i].className = dots[i].className.replace(" clicked", "");

    }
    img[index - 1].style.display = "block";

    dots[index - 1].className += " clicked";
    carousel = setTimeout(slider, 2000);
}


document.getElementById("svg-container").addEventListener("click", function() {
    clearTimeout(carousel);

})
document.getElementById("svg-s").addEventListener("click", function() {
    setTimeout(slider, 2000);
})
