const backdrop = document.querySelector(".backdrop");
const hamburger = document.getElementById("hamburger");
const closeIcon = document.getElementById("close-icon");
const mobileMenu = document.querySelector(".mobile-menu");

const mobileLink = document.querySelectorAll(
  ".mobile-menu--links__main--link__a"
);

// const desktopLink = document.querySelector(".navbar--links__main");

// desktopLink.addEventListener("mouseover", function (e) {
//   console.log(e.target);
// });

// desktopLink.forEach((el) =>
//   el.addEventListener("mouseover", function (e) {
//     console.log(e.target);
//   })
// );

// desktopLink.forEach((el) =>
//   el.addEventListener("mouseout", function (e) {
//     console.log(e.target);
//   })
// );

mobileLink.forEach((el) =>
  el.addEventListener("click", function (e) {
    e.target.classList.toggle("opened-link");
    e.target.parentNode.childNodes[2].classList.toggle("hidden");
  })
);

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
