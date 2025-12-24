  // const hamburger = document.getElementById("hamburger");
  // const navLeft = document.querySelector(".nav_bar_left");
  // const closeMenu = document.getElementById("closeMenu");

  // hamburger.addEventListener("click", () => {
  //   navLeft.classList.add("active");
  //   document.body.style.overflow = "hidden";
  // });

  // closeMenu.addEventListener("click", () => {
  //   navLeft.classList.remove("active");
  //   document.body.style.overflow = "";
  // });

  // // Close on overlay click
  // navLeft.addEventListener("click", (e) => {
  //   if (e.target === navLeft) {
  //     navLeft.classList.remove("active");
  //     document.body.style.overflow = "";
  //   }
  // });

    const hamburger = document.getElementById("hamburger");
  const closeMenu = document.getElementById("closeMenu");
  const nav = document.querySelector(".nav_bar_left");

  hamburger.addEventListener("click", () => {
    nav.classList.add("active");
  });

  closeMenu.addEventListener("click", () => {
    nav.classList.remove("active");
  });