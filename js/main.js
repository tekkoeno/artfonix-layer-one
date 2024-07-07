document.querySelector('.main__time-question').addEventListener('mouseover', function () {
  document.querySelector('.time__question-hover').style.visibility = 'visible';
});

document.querySelector('.main__time-question').addEventListener('mouseout', function () {
  document.querySelector('.time__question-hover').style.visibility = 'hidden';
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.premiers__slider');
  const prevButton = document.querySelector('.slider-button-prev');
  const nextButton = document.querySelector('.slider-button-next');
  const slides = document.querySelectorAll('.premiers__slider-item');
  let currentSlide = 0;

  function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth + parseInt(getComputedStyle(slides[0]).marginRight);
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    checkButtons(); // Добавить эту строку
  }

  function checkButtons() {
    prevButton.classList.toggle('hidden', slides.length <= 1 || currentSlide === 0);
    const totalSlides = slides.length;
    prevButton.classList.toggle('none', totalSlides <= 1);
    nextButton.classList.toggle('none', totalSlides <= 1);
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
      slidesToScroll: 1,
      arrows: false,
      responsive: [
        {
          breakpoint: 664,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 569,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.music__slider');
  if (slider) {
    $(slider).slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      arrows: false,
      responsive: [
        {
          breakpoint: 987,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 526,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
      ],
    });
  }
});

var swiper = new Swiper('.swiper', {
  effect: 'coverflow',
  centeredSlides: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  navigation: {
    nextEl: '.see-button-next',
    prevEl: '.see-button-prev',
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 3,
    },
    1560: {
      slidesPerView: 3,
    },
  },
});
$(document).ready(function () {
  var $slickElement = $('.reviews__wrap');

  $slickElement.slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.reviews-button-prev'),
    nextArrow: $('.reviews-button-next'),
    responsive: [
      {
        breakpoint: 865,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 421,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
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

function init() {
  let myMap = new ymaps.Map('map-adress', {
    center: [55.76, 37.64],
    zoom: 15,
  });

  let myPlacemark = new ymaps.Placemark(
    [55.76, 37.64],
    {
      balloonContent: 'Москва!',
    },
    {
      iconLayout: 'default#image',
      iconImageHref: '../images/map-marker.svg', // Ссылка на ваше изображение
      iconImageSize: [30, 42], // Размер изображения
      iconImageOffset: [-15, -42], // Смещение изображения
    },
  );

  myMap.controls.remove('trafficControl');
  myMap.controls.remove('typeSelector');
  myMap.controls.remove('fullscreenControl');
  myMap.controls.remove('geolocationControl');
  myMap.controls.remove('routeEditor');
  myMap.controls.remove('routeButtonControl');
  myMap.controls.remove('rulerControl');
  myMap.controls.remove('searchControl');
  myMap.controls.remove('zoomControl');
  myMap.controls.remove('smallMapDefaultSet');
  myMap.controls.remove('mediumMapDefaultSet');
  myMap.controls.remove('largeMapDefaultSet');
  myMap.controls.remove('smallZoomControl');
  myMap.controls.remove('largeZoomControl');
  myMap.geoObjects.add(myPlacemark);
}
ymaps.ready(init);
