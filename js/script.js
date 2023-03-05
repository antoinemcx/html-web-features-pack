const img_carousel = document.getElementsByClassName('carousel-img');
let stage = 0; let img_amount = img_carousel.length;
const carousel_previous = document.querySelector('.previous');
const carousel_next = document.querySelector('.next');
const carousel_pagination = document.querySelectorAll('.carousel_pagination_bubbles span')

function removeCarouselActiveImages() {
    for(let i=0; i<img_amount ; i++) {
        img_carousel[i].classList.remove('active');
        carousel_pagination.forEach(pag => pag.classList.remove('active'));
    }
}

function showNextCarouselImage() {
    stage++;
    if(stage >= img_amount) { stage = 0; }

    removeCarouselActiveImages();
    img_carousel[stage].classList.add('active');
    carousel_pagination[stage].classList.add('active');
}
carousel_next.addEventListener('click', function() { showNextCarouselImage() });

carousel_previous.addEventListener('click', function() {
    stage--;
    if(stage < 0) { stage = img_amount - 1; }

    removeCarouselActiveImages();
    img_carousel[stage].classList.add('active');
    carousel_pagination[stage].classList.add('active');
});

for(let i=0; i<carousel_pagination.length ; i++) {
    carousel_pagination[i].addEventListener('click', () => {
        showNextCarouselImage();
    })
}

// This loop will enable auto-scrolling on the carousel
setInterval(function() { showNextCarouselImage(); }, 4000)