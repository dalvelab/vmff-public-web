const images = document.querySelectorAll(".slider-welcome img");
const prevSlideButton = document.querySelector("#prev");
const nextSlideButton = document.querySelector("#next");
const auto = true;
const intervalTime = 7500;
let slideInterval;

const nextSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    images[0].classList.add("current");
  }
};

const prevSlide = () => {
  const current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    images[images.length - 1].classList.add("current");
  }
};

nextSlideButton.addEventListener("click", nextSlide);
prevSlideButton.addEventListener("click", prevSlide);

if (auto) {
  slideInterval = setInterval(nextSlide, intervalTime);
}
