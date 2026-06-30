document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const target = document.querySelector(link.getAttribute("href"));

    if (!target) {
      return;
    }

    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

const scrollTopButton = document.querySelector(".scroll-top");
const hero = document.querySelector(".hero");
const heroImage = document.querySelector(".hero-visual img");
const imageModal = document.createElement("div");
imageModal.className = "image-modal";
imageModal.innerHTML = '<button type="button" aria-label="확대 이미지 닫기">&times;</button><img alt="" />';
document.body.appendChild(imageModal);

const modalImage = imageModal.querySelector("img");
const modalCloseButton = imageModal.querySelector("button");

function updateHeroZoom() {
  if (!hero || !heroImage) {
    return;
  }

  const heroHeight = hero.offsetHeight || 1;
  const progress = Math.min(Math.max(window.scrollY / heroHeight, 0), 1);
  const scale = 1 + progress * 0.18;

  heroImage.style.setProperty("--hero-zoom", scale.toFixed(3));
}

function updateScrollTopButton() {
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 500);
}

function handleScroll() {
  updateScrollTopButton();
  updateHeroZoom();
}

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

document.querySelectorAll(".image-zoom").forEach((button) => {
  button.addEventListener("click", () => {
    const image = button.querySelector("img");

    if (!image) {
      return;
    }

    modalImage.src = image.src;
    modalImage.alt = image.alt;
    imageModal.classList.add("is-open");
  });
});

function closeImageModal() {
  imageModal.classList.remove("is-open");
  modalImage.removeAttribute("src");
}

modalCloseButton.addEventListener("click", closeImageModal);
imageModal.addEventListener("click", (event) => {
  if (event.target === imageModal) {
    closeImageModal();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageModal.classList.contains("is-open")) {
    closeImageModal();
  }
});

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", updateHeroZoom);
handleScroll();
