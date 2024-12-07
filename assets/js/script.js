const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const modeImg = document.querySelector(".mode-img");
const maninHeader = document.querySelector(".main-header");

// hamburger menu toggle
menuBtn.addEventListener("click", toggleMobile);
function toggleMobile() {
  navList.classList.toggle("active");
  menuBtn.classList.toggle("active");
}

navLink.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  navList.classList.remove("active");
  menuBtn.classList.remove("active");
}

// night and day mode toggle
modeImg.addEventListener("click", toLight);
function toLight() {
  if (modeImg.getAttribute("src") === "./assets/img/dark-mode.png") {
    console.log("its dark, switching to light");
    modeImg.setAttribute("src", "./assets/img/light-mode.png");
    document.body.classList.toggle("light");
    // document.querySelector(".main-header").classList.toggle("light");
    // document.querySelectorAll(".nav-link").forEach(link => {
    //   link.classList.toggle("light");
    // });
    // document.querySelector(".logo").classList.toggle("light");
    // document.querySelector(".hero-right").classList.toggle("light");
    // document.querySelector(".hero-left").classList.toggle("light");


  } else if (modeImg.getAttribute("src") === "./assets/img/light-mode.png") {
    console.log("its light, switching to dark");
    modeImg.setAttribute("src", "./assets/img/dark-mode.png");
  }
}
