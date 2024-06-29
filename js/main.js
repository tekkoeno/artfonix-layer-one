document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.premiers__slider');
  const prevButton = document.querySelector('.slider-button.prev');
  const nextButton = document.querySelector('.slider-button.next');
  const slides = document.querySelectorAll('.premiers__slider-item');
  let currentSlide = 0;

  function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth + parseInt(getComputedStyle(slides[0]).marginRight);
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  function checkButtons() {
    prevButton.classList.toggle('hidden', slides.length <= 1 || currentSlide === 0);
  }

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSliderPosition();
    checkButtons();
  });

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    if (!prevButton.classList == 'hidden') {
      currentSlide = currentSlide;
    }
    updateSliderPosition();
    checkButtons();
  });

  window.addEventListener('resize', updateSliderPosition);

  checkButtons();
  updateSliderPosition();
});
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.about__slider');
  if (slider) {
    $(slider).slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: false,
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.music__slider');
  if (slider) {
    $(slider).slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
    });
  }
});

document.querySelector('.select-wrapper').addEventListener('click', (e) => {
  const locationPopup = document.querySelector('.select__location');
  const locationInner = document.querySelector('.select__location-wrap');
  const body = document.body;
  locationPopup.classList.toggle('visible');
  body.classList.toggle('lock');
  document.addEventListener('click', (e) => {
    const selectWrapper = document.querySelector('.select-wrapper');
    if (!locationInner.contains(e.target) && !selectWrapper.contains(e.target)) {
      locationPopup.classList.remove('visible');
      body.classList.remove('lock');
    }
  });
});
