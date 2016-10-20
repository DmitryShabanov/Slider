let left = document.getElementById('left-button');
let right = document.getElementById('right-button');
let radioButtons = document.getElementsByClassName('radio-item');
let slides = document.getElementsByClassName('slider-item');

let slideCounter = 0;

function initSlides() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${100 * i}%`;
  }
}

function rightShift() {
  slideCounter++;
  if (slideCounter === slides.length) {
    slideCounter--;
    return;
  }
  for (let i = 0; i < slides.length; i++) {
    let shift = +slides[i].style.left.replace(/%/, '') - 100;
    console.log(shift);
    slides[i].style.left = `${shift}%`;
  }
}

function leftShift() {
  slideCounter--;
  if (slideCounter < 0) {
    slideCounter++;
    return;
  }
  for (let i = 0; i < slides.length; i++) {
    let shift = +slides[i].style.left.replace(/%/, '') + 100;
    console.log(shift);
    slides[i].style.left = `${shift}%`;
  }
}

initSlides();

left.onclick = leftShift;
right.onclick = rightShift;
