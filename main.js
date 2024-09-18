const showNavBtn = document.querySelector(".show-nav-btn");

const navLinks = document.querySelector(".nav-links");

//Show Nav Links
showNavBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
