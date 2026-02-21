export function createHorizontalCollapse(options = {}) {
  const {
    root = ".shc-collapse",
    panelSelector = ".shc-panel",
    activeClass = "is-active",
    allowArrowKeys = true,
  } = options;

  const roots = normalizeRoots(root);
  if (roots.length === 0) return null;

  const instances = roots.map((container) => setupContainer(container, {
    panelSelector,
    activeClass,
    allowArrowKeys,
  }));

  return instances.length === 1 ? instances[0] : instances;
}

function normalizeRoots(root) {
  if (!root) return [];
  if (typeof root === "string") {
    return Array.from(document.querySelectorAll(root));
  }
  if (root instanceof Element) return [root];
  if (root instanceof NodeList || Array.isArray(root)) {
    return Array.from(root).filter((node) => node instanceof Element);
  }
  return [];
}

function setupContainer(container, config) {
  const panels = Array.from(container.querySelectorAll(config.panelSelector));
  if (panels.length === 0) {
    return { destroy: () => {} };
  }

  const onPanelClick = (panel) => setActive(panel, panels, config.activeClass);
  const panelHandlers = panels.map((panel) => {
    const handler = () => onPanelClick(panel);
    panel.addEventListener("click", handler);
    return { panel, handler };
  });

  let keydownHandler = null;
  if (config.allowArrowKeys) {
    keydownHandler = (event) => {
      if (!event.target.matches(config.panelSelector)) return;

      const currentIndex = panels.indexOf(event.target);
      if (event.key === "ArrowRight") {
        event.preventDefault();
        const next = panels[(currentIndex + 1) % panels.length];
        next.focus();
        setActive(next, panels, config.activeClass);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        const prev = panels[(currentIndex - 1 + panels.length) % panels.length];
        prev.focus();
        setActive(prev, panels, config.activeClass);
      }
    };
    container.addEventListener("keydown", keydownHandler);
  }

  return {
    destroy() {
      panelHandlers.forEach(({ panel, handler }) => {
        panel.removeEventListener("click", handler);
      });
      if (keydownHandler) {
        container.removeEventListener("keydown", keydownHandler);
      }
    },
  };
}

function setActive(target, panels, activeClass) {
  panels.forEach((panel) => {
    const isActive = panel === target;
    panel.classList.toggle(activeClass, isActive);
    panel.setAttribute("aria-pressed", String(isActive));
  });
}
