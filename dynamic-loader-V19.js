waitForElement("#cms-tab-one", function () {
  const tab1 = document.getElementById("cms-tab-one");
  const tab2 = document.getElementById("cms-tab-two");
  const tab3 = document.getElementById("cms-tab-three");
  const tab4 = document.getElementById("cms-tab-four");
  const tab5 = document.getElementById("cms-tab-five"); // <-- FIXED original typo
  const tab6 = document.getElementById("cms-tab-six"); // <-- NEW

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");
  const button3 = document.querySelector(".cms-button3");
  const button4 = document.querySelector(".cms-button4");
  const button5 = document.querySelector(".cms-button5");
  const button6 = document.querySelector(".cms-button6"); // <-- NEW

  const titleElement = document.getElementById("tab-title");
  const titleMap = [
    "Roses",
    "Garden Roses",
    "Greens",
    "Focal Flowers",
    "Assorted Boxes",
    "Bouquets", // <-- Add a title for tab 6
  ];

  console.log("✅ Elements found:", { tab1, tab2, tab3, tab4, tab5, tab6 });

  if (
    !tab1 ||
    !tab2 ||
    !tab3 ||
    !tab4 ||
    !tab5 ||
    !tab6 ||
    !button1 ||
    !button2 ||
    !button3 ||
    !button4 ||
    !button5 ||
    !button6 ||
    !titleElement
  ) {
    console.error("❌ Missing one or more required elements.");
    return;
  }

  function hideAllTabs() {
    [tab1, tab2, tab3, tab4, tab5, tab6].forEach((tab) => {
      tab.classList.remove("visible");
      tab.classList.add("hidden");
    });
  }

  function deactivateAllButtons() {
    [button1, button2, button3, button4, button5, button6].forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  function setupButton(button, tab, index) {
    button.addEventListener("click", function (e) {
      e.preventDefault();

      hideAllTabs();
      deactivateAllButtons();

      tab.classList.remove("hidden");
      tab.classList.add("visible");

      button.classList.add("active");
      titleElement.innerHTML = titleMap[index];
    });
  }

  setupButton(button1, tab1, 0);
  setupButton(button2, tab2, 1);
  setupButton(button3, tab3, 2);
  setupButton(button4, tab4, 3);
  setupButton(button5, tab5, 4);
  setupButton(button6, tab6, 5); // <-- NEW

  // Load first tab by default
  button1.click();
});
