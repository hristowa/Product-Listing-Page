// Toggle button for menu
const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
// Toggle button for menu -END-

// Function for pop-up image
window.addEventListener("scroll", function () {
  const popupImg = document.getElementById("popupImg");
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const scrolled = window.scrollY;

  // Show the pop-up image
  if (scrolled >= scrollable) {
    popupImg.style.display = "block";
  } else {
    popupImg.style.display = "none";
  }
});
document.getElementById("popupImg").addEventListener("click", function () {
  // Hide the pop-up image when clicked
  this.style.display = "none";
});
// Function for pop-up image -END-


