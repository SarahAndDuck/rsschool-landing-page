
const state = {
  currentIndex: 0,
  totalSlides: 0,
  touchStartX: 0,
  touchEndX: 0

}
const nodes = {}



function updateSlider() {

  nodes.list.style.transform = `translateX(-${state.currentIndex * 100}%)`;
  nodes.indicators.forEach((item, index) => {
    if (index === state.currentIndex) {
      item.classList.add('slider__indicator_active')
    } else {
      item.classList.remove('slider__indicator_active')
    }
  })
}
function showNextSlide() {
  if (state.currentIndex === state.totalSlides - 1) {
    state.currentIndex = 0
  } else {
    state.currentIndex = state.currentIndex + 1
  }
  updateSlider()
}
function showPrevSlide() {
  if (state.currentIndex === 0) {
    state.currentIndex = state.totalSlides - 1
  } else {
    state.currentIndex = state.currentIndex - 1
  }
  updateSlider()
}
function handleSwipe() {
  const swipeDistance = state.touchStartX - state.touchEndX
  const minSwipeDistance = 50;

  if (Math.abs(swipeDistance) > minSwipeDistance) {
    if (swipeDistance > 0) {
      showNextSlide()
    } else {
      showPrevSlide();
    }

  }

}
export function initSlider() {
  nodes.slider = document.querySelector('.slider');
  nodes.list = document.querySelector('.slider__list');
  nodes.items = document.querySelectorAll('.slider__item');
  nodes.btnNext = document.querySelector('.slider__control_next');
  nodes.btnPrev = document.querySelector('.slider__control_prev');
  nodes.indicators = document.querySelectorAll('.slider__indicator');
  state.totalSlides = nodes.items.length;
  nodes.btnNext.addEventListener('click', () => {
    showNextSlide();
  });
  nodes.btnPrev.addEventListener('click', () => {
    showPrevSlide();

  });
  nodes.slider.addEventListener('touchstart', (e) => {
    state.touchStartX = e.touches[0].clientX;
  }, { passive: true })
  nodes.slider.addEventListener('touchend', (e) => {
    state.touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
  }, { passive: true })
}