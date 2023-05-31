const carousel = document.querySelector('.carousel');
const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const imageWidth = carousel.clientWidth;

let currentPosition = 0;
let interval;

function startCarousel() {
  interval = setInterval(() => {
    currentPosition -= imageWidth;
    if (currentPosition < -imageWidth * (carouselInner.children.length - 1)) {
      currentPosition = 0;
    }
    carouselInner.style.transform = `translateX(${currentPosition}px)`;
  }, 10000);
}

function stopCarousel() {
  clearInterval(interval);
}

prevButton.addEventListener('click', function() {
  currentPosition += imageWidth;
  if (currentPosition > 0) {
    currentPosition = -imageWidth * (carouselInner.children.length - 1);
  }
  carouselInner.style.transform = `translateX(${currentPosition}px)`;
});

nextButton.addEventListener('click', function() {
  currentPosition -= imageWidth;
  if (currentPosition < -imageWidth * (carouselInner.children.length - 1)) {
    currentPosition = 0;
  }
  carouselInner.style.transform = `translateX(${currentPosition}px)`;
});

startCarousel();