const panels = Array.from(document.querySelectorAll(".panel"));

function setActive(target) {
  panels.forEach((panel) => {
    const isActive = panel === target;
    panel.classList.toggle("is-active", isActive);
    panel.setAttribute("aria-pressed", String(isActive));
  });
}

panels.forEach((panel) => {
  panel.addEventListener("click", () => setActive(panel));
});

// Optional: allow keyboard navigation with arrow keys.
const container = document.querySelector(".collapse");
container?.addEventListener("keydown", (event) => {
  if (!event.target.classList.contains("panel")) return;

  const currentIndex = panels.indexOf(event.target);
  if (event.key === "ArrowRight") {
    event.preventDefault();
    const next = panels[(currentIndex + 1) % panels.length];
    next.focus();
    setActive(next);
  }
  if (event.key === "ArrowLeft") {
    event.preventDefault();
    const prev = panels[(currentIndex - 1 + panels.length) % panels.length];
    prev.focus();
    setActive(prev);
  }
});
