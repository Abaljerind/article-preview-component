// button share in mobile
const buttonShare = document.querySelector("#button-share");
const mobileButton = document.querySelector(".mobile-button");

// share mode in mobile
const shareMode = document.querySelector("#share-mode");
const mobileShare = document.querySelector(".mobile-share");

// share mode in desktop
const desktopShare = document.querySelector(".desktop-share");
const triangle = document.querySelector(".triangle");

const width = document.documentElement.clientWidth || window.innerWidth;

if (width <= 810) {
  buttonShare.addEventListener("click", function () {
    mobileButton.classList.remove("flex");
    mobileButton.classList.add("hidden");
    mobileShare.classList.remove("hidden");
    mobileShare.classList.add("flex");
  });

  shareMode.addEventListener("click", function () {
    mobileShare.classList.remove("flex");
    mobileShare.classList.add("hidden");
    mobileButton.classList.remove("hidden");
    mobileButton.classList.add("flex");
  });
} else {
  buttonShare.addEventListener("click", function () {
    desktopShare.classList.toggle("hidden");
    desktopShare.classList.toggle("flex");
    triangle.classList.toggle("hidden");
    triangle.classList.toggle("flex");
  });
}
