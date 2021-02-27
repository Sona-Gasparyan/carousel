    let index = 1;
    slider(index);
    let pause = document.getElementById("svg-container")
    play = document.getElementById("svg-s")

    let timer = setInterval(function() {
        plusSlides(1);
    }, 2000);


    function plusSlides(n) {
        slider(index += n)
    }

    function currentSlide(n) {
        slider(index = n);
    }

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

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" clicked", "");
        }
        img[index - 1].style.display = "block";

        dots[index - 1].className += " clicked";
    }

    function clear() {
        clearInterval(timer)
    }


    pause.addEventListener("click", clear)
    play.addEventListener("click", function() {
        setInterval(function() {
            plusSlides(1)
        }, 2000)
    });
