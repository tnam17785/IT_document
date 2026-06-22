(() => {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!btn || !menu || !overlay) return;

  const openMenu = () => {
    menu.classList.add("open");
    overlay.classList.add("show");
  };

  const closeMenu = () => {
    menu.classList.remove("open");
    overlay.classList.remove("show");
  };

  btn.addEventListener("click", openMenu);
  overlay.addEventListener("click", closeMenu);

  // click link thì tự tắt menu luôn (cho mượt)
  menu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
})();
