(() => {
  "use strict";

  const menuBtn = document.getElementById("menuBtn");
  const sideMenu = document.getElementById("sideMenu");
  const overlay = document.getElementById("overlay");

  if (!menuBtn || !sideMenu || !overlay) return;

  const openMenu = () => {
    sideMenu.classList.add("open");
    overlay.classList.add("show");
    document.body.style.overflow = "hidden"; // khóa scroll
  };

  const closeMenu = () => {
    sideMenu.classList.remove("open");
    overlay.classList.remove("show");
    document.body.style.overflow = ""; // mở lại scroll
  };

  const toggleMenu = () => {
    if (sideMenu.classList.contains("open")) closeMenu();
    else openMenu();
  };

  // click nút
  menuBtn.addEventListener("click", toggleMenu);

  // click nền mờ
  overlay.addEventListener("click", closeMenu);

  // click link thì đóng menu
  sideMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMenu);
  });

  // ESC để thoát (xịn hơn)
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();
