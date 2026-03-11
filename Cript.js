const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const header = document.getElementById("mainHeader");

// 1. Mobile Menu Toggle
menuToggle.addEventListener("click", function(){
  navMenu.classList.toggle("active");
  // Icon change logic
  const icon = menuToggle.querySelector("i");
  if(navMenu.classList.contains("active")) {
      icon.classList.replace("fa-bars", "fa-times");
  } else {
      icon.classList.replace("fa-times", "fa-bars");
  }
});

// 2. Sticky Header Shadow on Scroll
window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        header.style.boxShadow = "0 4px 15px rgba(0, 243, 255, 0.2)";
        header.style.background = "rgba(5, 5, 5, 0.98)";
    } else {
        header.style.boxShadow = "none";
        header.style.background = "#050505";
    }
});
