let counter = 0;
const prevBtn = document.querySelector('.slider__button--left');
const nextBtn = document.querySelector('.slider__button--right');
const slider = document.querySelector('.slider__item-wrap');
const sliderItems = document.querySelectorAll('.slider__item');
const dots = document.querySelectorAll('.slider__dot');
const sliderLinks = document.querySelectorAll('.slider__catalog-link');
const stepSize = sliderItems[0].clientWidth;

slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;

const removeActiveFromDots = () => dots.forEach(dot => dot.classList.remove('slider__dot--active'));

const addTabIndexToLinks = () => sliderLinks.forEach(link => link.setAttribute('tabindex', -1));

nextBtn.addEventListener('click', () => {
  if (counter >= sliderItems.length - 1) counter = -1;
  counter++;
  removeActiveFromDots();
  addTabIndexToLinks();
  dots[counter].classList.add('slider__dot--active');
  sliderLinks[counter].removeAttribute('tabindex');
  slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
});
prevBtn.addEventListener('click', () => {
  if (counter <= 0) counter = sliderItems.length;
  counter--;
  removeActiveFromDots();
  addTabIndexToLinks();
  dots[counter].classList.add('slider__dot--active');
  sliderLinks[counter].removeAttribute('tabindex');
  slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
});
dots.forEach((dot, idx) => {
  dot.addEventListener('click', () => {
    removeActiveFromDots();
    addTabIndexToLinks();
    dot.classList.add('slider__dot--active');
    counter = idx;
    sliderLinks[counter].removeAttribute('tabindex');
    slider.style.transform = 'translateX(' + `${-stepSize * counter}px)`;
  });
});
