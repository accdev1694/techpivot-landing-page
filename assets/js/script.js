const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const modeImg = document.querySelector(".mode-img");
const maninHeader = document.querySelector(".main-header");
const faqItems = document.querySelector(".faq-items");
const toggleAnswers = document.querySelectorAll(".toggle-answers");

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
  } else if (modeImg.getAttribute("src") === "./assets/img/light-mode.png") {
    console.log("its light, switching to dark");
    modeImg.setAttribute("src", "./assets/img/dark-mode.png");
    document.body.classList.remove("light");
  }
}

// display answers
toggleAnswers.forEach((icon, index)=>{
  icon.addEventListener('click', ()=>{
const answersEl = document.querySelectorAll(".answer")

    answersEl[index].classList.toggle('active')
  })
})
