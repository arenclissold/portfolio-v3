// The content and navigation also work with JavaScript disabled.
document.getElementById("year").textContent = new Date().getFullYear();

// A real link works without JavaScript; with JavaScript, remember the choice.
document.querySelectorAll("[data-language]").forEach((link) => {
  link.addEventListener("click", () => {
    try {
      localStorage.setItem("portfolio-language", link.dataset.language);
    } catch {
      // Private browsing/storage restrictions must not prevent switching.
    }
    const destination = new URL(link.href);
    destination.hash = location.hash;
    link.href = destination.href;
  });
});
