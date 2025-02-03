// Menambahkan interaksi sederhana
document.addEventListener("DOMContentLoaded", function () {
  console.log("CV Loaded Successfully!");

  // Menambahkan animasi scroll untuk section
  const sections = document.querySelectorAll(".section");
  window.addEventListener("scroll", () => {
    sections.forEach((section) => {
      if (section.getBoundingClientRect().top < window.innerHeight) {
        section.classList.add("visible");
      }
    });
  });
});
