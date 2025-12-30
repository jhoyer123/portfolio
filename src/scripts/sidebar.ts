document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menu-btn");
  const sidebar = document.getElementById("sidebar");
  const iconOpen = document.getElementById("icon-open");
  const iconClose = document.getElementById("icon-close");

  if (!btn || !sidebar) return;

  const toggleMenu = () => {
    const isNowHidden = sidebar.classList.toggle("-translate-x-full");
    iconOpen?.classList.toggle("hidden", !isNowHidden);
    iconClose?.classList.toggle("hidden", isNowHidden);
  };

  btn.addEventListener("click", toggleMenu);

  let resizeTimer: any;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      // Si la pantalla es de escritorio (>= 768px)
      if (window.innerWidth >= 768) {
        sidebar.classList.remove(
          "transition-transform",
          "duration-300",
          "ease-in-out"
        );
        /*    sidebar.classList.add("-translate-x-full");
        iconOpen?.classList.remove("hidden");
        iconClose?.classList.add("hidden"); */
      } else {
        void sidebar.offsetWidth;
        sidebar.classList.add(
          "transition-transform",
          "duration-300",
          "ease-in-out"
        );
      }
    }, 100);
  });

  const links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
      sidebar.classList.add("-translate-x-full");
      iconOpen?.classList.remove("hidden");
      iconClose?.classList.add("hidden");
    });
  }
});
