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

window.addEventListener("scroll", handleScroll, { passive: true });
window.addEventListener("resize", updateHeroZoom);
handleScroll();
