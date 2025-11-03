const $prevBtn = document.getElementById("prevBtn");
const $nextBtn = document.getElementById("nextBtn");
const $slider = document.getElementById("feedback-slider");
const $dots = document.querySelectorAll(".dot");

let counter = 0;
const totalSlides = 3;

function updateSlider() {
    const containerWidth = $slider.parentElement.clientWidth;
    $slider.style.transform = `translateX(-${counter * containerWidth}px)`;

    for (let i = 0; i < $dots.length; i++) {
        if (i === counter) {
            $dots[i].className = "dot w-3 h-1 bg-gold rounded-full";
        } else {
            $dots[i].className = "dot w-3 h-1 bg-white/40 rounded-full";
        }
    }
}

$nextBtn.addEventListener("click", () => {
    counter = (counter + 1) % totalSlides;
    updateSlider();
});

$prevBtn.addEventListener("click", () => {
    if (counter === 0) {
        counter = totalSlides - 1;
    } else {
        counter = counter - 1;
    }
    updateSlider();
});


window.addEventListener('load', updateSlider);
window.addEventListener('resize', updateSlider);