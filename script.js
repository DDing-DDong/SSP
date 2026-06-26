const slides = Array.from(document.querySelectorAll(".slide"));
const prevButton = document.querySelector("#prevSlide");
const nextButton = document.querySelector("#nextSlide");
const slideCount = document.querySelector("#slideCount");

let currentSlide = 0;

function showSlide(index) {
  currentSlide = (index + slides.length) % slides.length;

  slides.forEach((slide, slideIndex) => {
    slide.classList.toggle("is-active", slideIndex === currentSlide);
  });

  slideCount.textContent = `${currentSlide + 1} / ${slides.length}`;
}

prevButton.addEventListener("click", () => showSlide(currentSlide - 1));
nextButton.addEventListener("click", () => showSlide(currentSlide + 1));

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft") {
    showSlide(currentSlide - 1);
  }

  if (event.key === "ArrowRight" || event.key === " ") {
    showSlide(currentSlide + 1);
  }
});

showSlide(0);
