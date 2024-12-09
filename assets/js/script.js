const menuBtn = document.querySelector(".menu-btn");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const modeImg = document.querySelector(".mode-img");
const maninHeader = document.querySelector(".main-header");
const faqItems = document.querySelector(".faq-items");
const toggleAnswers = document.querySelectorAll(".toggle-answers");

const answers = [
  "You will gain practical insights into the fundamentals of software development, project management, and business analysis, plus strategies for navigating tech career paths and leveraging Agile methodologies to work more effectively in a team.",
  "This webinar is perfect for anyone interested in starting a career in tech, transitioning from another industry, or upskilling in software, project management, or business analysis. We welcome both beginners and experienced professionals looking to refresh or broaden their knowledge.",
  "We will introduce the basics of Agile project management, key programming concepts, and essential business analysis tools. Topics include requirements gathering, sprint planning, user story writing, and an overview of popular programming languages and tools.",
  "No prior technical knowledge is required. We will start with foundational concepts and build up to more advanced insights, making sure every attendee can follow along, regardless of experience level.",
  "Agile emphasizes flexibility and customer feedback, focusing on iterative progress, collaboration, and the ability to adapt to change. This webinar will provide a breakdown of Agile practices like Scrum and Kanban, compared to more rigid traditional approaches.",
  "A business analyst bridges the gap between business needs and technology solutions. They define requirements, analyze processes, and collaborate with developers and stakeholders to ensure the final product meets user needs. We will discuss how BAs add value at each project stage.",
  "Project management provides structure, helping teams plan, execute, and monitor development tasks. It ensures timelines are met and resources are effectively allocated. This session will explore real-life applications of project management in software development cycles.",
  "We will cover tools like JIRA for project management, Figma for design collaboration, GitHub for version control, and essential data analysis tools like SQL. Familiarity with these tools helps bridge gaps between technical and non-technical teams.",
  "Yes, we will include interactive components where you can practice writing user stories, creating basic project plans, and understanding code structure. This hands-on approach will give you a feel for working in a real tech environment.",
  "We will share resources for further learning, including certifications, online courses, and ways to gain practical experience. Our recommendations will help you create an action plan tailored to your interests, whether in development, project management, or business analysis.",
];

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
