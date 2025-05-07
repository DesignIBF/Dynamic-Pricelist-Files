document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".cms-button");
  const tabs = document.querySelectorAll(".cms-tab");

  buttons.forEach((button, index) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();

      tabs.forEach((tab) => {
        tab.classList.remove("visible");
        tab.classList.add("hidden");
      });

      tabs[index].classList.remove("hidden");
      tabs[index].classList.add("visible");

      buttons.forEach((b) => b.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Activate first tab on load
  buttons[0]?.click();
});
