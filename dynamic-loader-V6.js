document.addEventListener("DOMContentLoaded", function () {
  console.log("💡 JS loaded and running");

  const buttons = document.querySelectorAll("#iq9l-2 a");
  const tabs = document.querySelectorAll(".cms-tab");

  if (buttons.length === 0 || tabs.length === 0) {
    console.warn("⚠️ No buttons or tabs found.");
    return;
  }

  buttons.forEach((button, index) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      console.log(`🖱 Clicked button ${index + 1}`);

      // Hide all tabs
      tabs.forEach((tab, i) => {
        tab.style.display = "none";
        console.log(`🚫 Hiding cms-tab${i + 1}`);
      });

      // Show the selected tab
      const tabToShow = document.getElementById(`cms-tab${index + 1}`);
      if (tabToShow) {
        tabToShow.style.display = "block";
        console.log(`✅ Showing cms-tab${index + 1}`);
      } else {
        console.error(`❌ Tab cms-tab${index + 1} not found`);
      }

      // Highlight the active button
      buttons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
    });
  });

  // Auto-load the first tab
  buttons[0]?.click();
});

console.log("✅ JS linked and ready");
