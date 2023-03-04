const img_slider = document.getElementsByClassName('slider-img');
let stage = 0; let img_amount = img_slider.length;
const slider_previous = document.querySelector('.previous');
const slider_next = document.querySelector('.next');
const slider_pagination = document.querySelectorAll('.slider_pagination_bubbles span')

function removeSliderActiveImages() {
    for(let i=0; i<img_amount ; i++) {
        img_slider[i].classList.remove('active');
        slider_pagination.forEach(pag => pag.classList.remove('active'));
    }
}

function showNextSliderImage() {
    stage++;
    if(stage >= img_amount) { stage = 0; }

    removeSliderActiveImages();
    img_slider[stage].classList.add('active');
    slider_pagination[stage].classList.add('active');
}
slider_next.addEventListener('click', function() { showNextSliderImage() });

slider_previous.addEventListener('click', function() {
    stage--;
    if(stage < 0) { stage = img_amount - 1; }

    removeSliderActiveImages();
    img_slider[stage].classList.add('active');
    slider_pagination[stage].classList.add('active');
});

for(let i=0; i<slider_pagination.length ; i++) {
    slider_pagination[i].addEventListener('click', () => {
        showNextSliderImage();
    })
}

// This loop will enable auto-scrolling on the slider
setInterval(function() { showNextSliderImage(); }, 4000)