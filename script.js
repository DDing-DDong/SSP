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

function updateScrollTopButton() {
  scrollTopButton.classList.toggle("is-visible", window.scrollY > 500);
}

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", updateScrollTopButton);
updateScrollTopButton();
