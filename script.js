// Show language menu on click
const langContainer = document.querySelector(".language");
const langBtn = document.querySelector(".language-button");

langBtn.addEventListener("click", () => {
  langContainer.classList.toggle("show-menu");
});

// Select language on click
const langOptions = document.querySelectorAll(".language-menu li");

langOptions.forEach((langOption) => {
  langOption.addEventListener("click", () => {
    langOptions.forEach((option) => {
      option.classList.toggle("selected");
    });
    setTimeout(() => {
      langContainer.classList.toggle("show-menu");
    }, 300);
  });
});
