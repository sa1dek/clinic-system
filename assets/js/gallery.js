document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter]");
  const items = document.querySelectorAll("[data-category]");
  filterButtons.forEach(button => button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    items.forEach(item => {
      item.hidden = !(filter === "all" || item.dataset.category === filter);
    });
  }));

  const lightbox = document.querySelector(".lightbox");
  const close = document.querySelector(".lightbox-close");
  const title = document.querySelector("#lightbox-title");
  const panel = document.querySelector(".lightbox-panel");
  if (lightbox) {
    document.querySelectorAll(".gallery-item").forEach(item => item.addEventListener("click", () => {
      title.textContent = item.dataset.title || "Project screenshot";
      const img = item.querySelector(".gallery-image");
      if (img && panel) {
        panel.innerHTML = `
          <button class="icon-button lightbox-close" type="button" aria-label="Close image dialog">×</button>
          <h2 id="lightbox-title">${title.textContent}</h2>
          <img src="${img.src}" alt="${img.alt}" style="width:100%;height:auto;border-radius:12px;border:1px solid var(--line);" />
        `;
        panel.querySelector(".lightbox-close")?.addEventListener("click", () => {
          lightbox.classList.remove("open");
          lightbox.setAttribute("aria-hidden", "true");
        });
      }
      lightbox.classList.add("open");
      lightbox.setAttribute("aria-hidden", "false");
      if (close) close.focus();
    }));
    const hide = () => {
      lightbox.classList.remove("open");
      lightbox.setAttribute("aria-hidden", "true");
    };
    close?.addEventListener("click", hide);
    lightbox.addEventListener("click", event => { if (event.target === lightbox) hide(); });
    document.addEventListener("keydown", event => { if (event.key === "Escape") hide(); });
  }
});
