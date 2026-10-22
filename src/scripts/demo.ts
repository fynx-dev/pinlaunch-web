const root = document.querySelector<HTMLElement>("[data-demo]");

if (root) {
  const menu = root.querySelector<HTMLElement>("#pinlaunch-demo-menu");
  const toggle = root.querySelector<HTMLButtonElement>("[data-demo-toggle]");
  const close = root.querySelector<HTMLButtonElement>("[data-demo-close]");
  const selection = root.querySelector<HTMLElement>(".demo-selection");
  const items = [...root.querySelectorAll<HTMLButtonElement>("[data-demo-item]")];

  const setOpen = (open: boolean) => {
    if (!menu || !toggle) return;
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.classList.toggle("is-active", open);
    if (open) menu.querySelector<HTMLButtonElement>("[data-demo-item]")?.focus();
  };

  toggle?.addEventListener("click", () => setOpen(Boolean(menu?.hidden)));
  close?.addEventListener("click", () => { setOpen(false); toggle?.focus(); });
  items.forEach((item) => item.addEventListener("click", () => {
    items.forEach((entry) => entry.classList.toggle("is-active", entry === item));
    if (selection) selection.textContent = item.textContent?.trim() ?? "";
  }));
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !menu?.hidden) { setOpen(false); toggle?.focus(); }
  });
  document.addEventListener("pointerdown", (event) => {
    if (!menu?.hidden && event.target instanceof Node && !root.contains(event.target)) setOpen(false);
  });
}
