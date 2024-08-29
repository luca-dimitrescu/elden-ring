document.body.style.background = "rgb(27,26,20)"
document.getElementById("class-selecting").style.background = "linear-gradient(background: linear-gradient(251deg, rgba(27,26,20,1) 8%, rgba(66,62,42,1) 93%);)"

function SelectingClass() {
    document.getElementById("intro").style.display = "none"
    ClassSelecting();
    function ClassSelecting() {
        let class_selecting = document.getElementById("class-selecting");
        let classes = document.getElementById("classes");

        class_selecting.style.opacity = "0";
        classes.style.opacity = "0";

        class_selecting.style.display = "block"
        classes.style.display = "flex"

        classes.classList.add("fadeIn");
        class_selecting.classList.add("fadeIn");

    }
}




let imgsClass = [];

imgsClass[0] = document.getElementById("vagabond-img");
imgsClass[1] = document.getElementById("warrior-img");
imgsClass[2] = document.getElementById("hero-img");
imgsClass[3] = document.getElementById("bandit-img");
imgsClass[4] = document.getElementById("astrologer-img");
imgsClass[5] = document.getElementById("prophet-img");
imgsClass[6] = document.getElementById("samurai-img");
imgsClass[7] = document.getElementById("prisoner-img");
imgsClass[8] = document.getElementById("confessor-img");
imgsClass[9] = document.getElementById("wretch-img");

let imgsClassText = [];

imgsClassText[0] = document.getElementById("vagabond-text-img");
imgsClassText[1] = document.getElementById("warrior-text-img");
imgsClassText[2] = document.getElementById("hero-text-img");
imgsClassText[3] = document.getElementById("bandit-text-img");
imgsClassText[4] = document.getElementById("astrologer-text-img");
imgsClassText[5] = document.getElementById("prophet-text-img");
imgsClassText[6] = document.getElementById("samurai-text-img");
imgsClassText[7] = document.getElementById("prisoner-text-img");
imgsClassText[8] = document.getElementById("confessor-text-img");
imgsClassText[9] = document.getElementById("wretch-text-img");

let startIndex = 0;
const visibleCount = 3;

for (let i = 0; i < visibleCount; i++) {
    imgsClass[i].style.display = "inline-block";
}

let buttonNext = document.getElementById("next");
buttonNext.addEventListener("click", NextImg);
let buttonPrev = document.getElementById("prev");
buttonPrev.addEventListener("click", PrevImg);


let classLeft = document.getElementById("class-left");
let classMiddle = document.getElementById("class-middle");
let classRight = document.getElementById("class-right");


classLeft.style.opacity = 0;
classMiddle.style.opacity = 0;
classRight.style.opacity = 0;

classLeft.addEventListener("click", ClassLeftVisible);
classMiddle.addEventListener("click", ClassMiddleVisible);
classRight.addEventListener("click", ClassRightVisible);

function ClassLeftVisible() {
    classMiddle.style.opacity = 0;
    classRight.style.opacity = 0;
    if (classLeft.style.opacity == 0) {
        classLeft.style.opacity = 1;
    } else {
        classLeft.style.opacity = 0;
    }
}

function ClassMiddleVisible() {
    classLeft.style.opacity = 0;
    classRight.style.opacity = 0;
    if (classMiddle.style.opacity == 0) {
        classMiddle.style.opacity = 1;
    } else {
        classMiddle.style.opacity = 0;
    }
}

function ClassRightVisible() {
    classLeft.style.opacity = 0;
    classMiddle.style.opacity = 0;
    if (classRight.style.opacity == 0) {
        classRight.style.opacity = 1;
    } else {
        classRight.style.opacity = 0;
    }
}

function NextImg() {
    for (let i = startIndex; i < startIndex + visibleCount; i++) {
        imgsClass[i].style.display = "none";
    }

    startIndex += 1;
    if (startIndex + visibleCount > imgsClass.length) {
        startIndex = 0; // Reset to the beginning
    }

    for (let i = startIndex; i < startIndex + visibleCount; i++) {
        imgsClass[i].style.display = "inline-block";
    }
    classLeft.style.opacity = 0;
    classMiddle.style.opacity = 0;
    classRight.style.opacity = 0;
}

function PrevImg() {
    // Hide the current set of visible images
    for (let i = startIndex; i < startIndex + visibleCount; i++) {
        imgsClass[i].style.display = "none";
    }

    // Decrement startIndex and wrap around if it goes below zero
    startIndex -= 1;
    if (startIndex < 0) {
        startIndex = imgsClass.length - visibleCount; // Move to the last possible set
    }

    // Show the previous set of images
    for (let i = startIndex; i < startIndex + visibleCount; i++) {
        imgsClass[i].style.display = "inline-block";
    }
    classLeft.style.opacity = 0;
    classMiddle.style.opacity = 0;
    classRight.style.opacity = 0;
}
