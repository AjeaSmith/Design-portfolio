const slide = document.querySelector('.carousel_slide');
const leftArrow = document.querySelector('.left_arrow');
const rightArrow = document.querySelector('.right_arrow');
const slideWidth = slide.offsetWidth;
let scrollPosition = 0;

leftArrow.addEventListener('click', () => {
  if (scrollPosition > 0) {
    scrollPosition -= slideWidth;
    slide.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
});

rightArrow.addEventListener('click', () => {
  if (scrollPosition < slide.scrollWidth - slideWidth) {
    scrollPosition += slideWidth;
    slide.scroll({
      left: scrollPosition,
      behavior: 'smooth'
    });
  }
});
