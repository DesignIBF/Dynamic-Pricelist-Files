// Wait for the full HTML document to load
document.addEventListener("DOMContentLoaded", function () {
  console.log("💡 JS loaded and running");

  // Select all navigation buttons and CMS tabs
  const buttons = document.querySelectorAll("#iq9l-2 a");
  const tabs = document.querySelectorAll(".cms-tab");

  // Attach click events to each button
  buttons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      // Hide all tabs
      tabs.forEach((tab) => {
        tab.style.display = "none";
      });

      // Show the matching tab (cms-tab1, cms-tab2, etc.)
      const tabToShow = document.getElementById(`cms-tab${index + 1}`);
      if (tabToShow) {
        tabToShow.style.display = "block";
        console.log(`✅ Showing cms-tab${index + 1}`);
      }

      // Update the active button style
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Automatically click the first button on page load
  buttons[0]?.click();
});

console.log("✅ JS linked and executed");
