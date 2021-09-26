const backdrop = document.querySelector(".backdrop");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

hamburger.addEventListener("click", function () {
  [backdrop, mobileMenu, closeIcon].forEach((el) =>
    el.classList.remove("hidden")
  );
  hamburger.classList.add("hidden");
});

[backdrop, closeIcon].forEach((el) =>
  el.addEventListener("click", function () {
    [backdrop, mobileMenu, closeIcon].forEach((el) =>
      el.classList.add("hidden")
    );
    hamburger.classList.remove("hidden");
  })
);
