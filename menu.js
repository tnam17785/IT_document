(() => {
    "use strict";

    const menuBtn = document.getElementById("menuBtn");
    const sideMenu = document.getElementById("sideMenu");
    const overlay = document.getElementById("overlay");

    if (!menuBtn || !sideMenu || !overlay) return;

    function openMenu() {
        sideMenu.classList.add("open");
        overlay.classList.add("show");
        document.body.style.overflow = "hidden";
    }

    function closeMenu() {
        sideMenu.classList.remove("open");
        overlay.classList.remove("show");
        document.body.style.overflow = "";
    }

    menuBtn.addEventListener("click", () => {
        sideMenu.classList.contains("open")
            ? closeMenu()
            : openMenu();
    });

    overlay.addEventListener("click", closeMenu);

    sideMenu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", e => {
        if (e.key === "Escape") {
            closeMenu();
        }
    });
})();
