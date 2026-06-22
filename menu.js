(() => {
  "use strict";

  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!btn || !menu || !overlay) return;

  const openMenu = () => {
    menu.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden";
  };

  const closeMenu = () => {
    menu.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = "";
  };

  const toggleMenu = () => {
    menu.classList.contains("open") ? closeMenu() : openMenu();
  };

  btn.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);

  menu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
