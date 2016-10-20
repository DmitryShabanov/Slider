let slider = document.getElementById('slider');
let left = document.getElementById('left-button');
let right = document.getElementById('right-button');
let slides = document.getElementsByClassName('slider-item');
let radioItems = document.getElementsByClassName('radio-item');

let slideCounter = 0;

function initSlides() {
  radioItems[slideCounter].style.backgroundColor = '#fff';
  radioItems[slideCounter].style.opacity = 1;
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.left = `${100 * i}%`;
  }
}

function shift(index) {
  let value = 100;
  if (index > slideCounter) {
    value *= index - slideCounter;
  } else {
    value *= -(slideCounter - index);
  }

  slideCounter = index;

  radioItems[slideCounter].style.backgroundColor = '#fff';
  radioItems[slideCounter].style.opacity = 1;

  for (let i = 0; i < slides.length; i++) {
    let shift = +slides[i].style.left.replace(/%/, '') - value;
    slides[i].style.left = `${shift}%`;
  }
}

function rightShift() {
  clearRadioItems();
  if (slideCounter + 1 === slides.length) {
    shift(0);
    return;
  }
  shift(slideCounter + 1);
}

function leftShift() {
  clearRadioItems();
  if (slideCounter - 1 < 0) {
    shift(slides.length - 1);
    return;
  }
  shift(slideCounter - 1);
}

function clearRadioItems() {
  for (var i = 0; i < radioItems.length; i++) {
    radioItems[i].checked = false;
    radioItems[i].style.backgroundColor = '';
    radioItems[i].style.opacity = '';
  }
}

function checkRadioItems() {
  clearRadioItems();
  this.checked = true;
  for (var i = 0; i < radioItems.length; i++) {
    if (radioItems[i].checked === true) {
      shift(i);
    }
  }
}

for (var i = 0; i < radioItems.length; i++) {
  radioItems[i].onclick = checkRadioItems;
}

left.onclick = leftShift;
right.onclick = rightShift;

let timer = setInterval(rightShift, 3000);

slider.addEventListener('mouseover', () => { clearInterval(timer); });
slider.addEventListener('mouseout', () => { timer = setInterval(rightShift, 3000); });

initSlides();
