// Wait until the CMS tab wrapper is available before running
function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback();
  } else {
    setTimeout(() => waitForElement(selector, callback), 100);
  }
}

waitForElement("#cms-tab-one", function () {
  const tab1 = document.getElementById("cms-tab-one");
  const tab2 = document.getElementById("cms-tab-two");
  const tab3 = document.getElementById("cms-tab-three");
  const tab4 = document.getElementById("cms-tab-four");
  const tab5 = document.getElementById("cms-tab-fiv");

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");
  const button3 = document.querySelector(".cms-button3");
  const button4 = document.querySelector(".cms-button4");
  const button5 = document.querySelector(".cms-button5");

  const titleElement = document.getElementById("tab-title");
  const titleMap = [
    "Garden Roses",
    "Focal Flowers",
    "Filler Flowers",
    "Greens",
    "Mixed Boxes",
  ];

  console.log("✅ Elements found:", { tab1, tab2, tab3, tab4, tab5 });

  if (
    !tab1 ||
    !tab2 ||
    !tab3 ||
    !tab4 ||
    !tab5 ||
    !button1 ||
    !button2 ||
    !button3 ||
    !button4 ||
    !button5 ||
    !titleElement
  ) {
    console.error("❌ Missing one or more required elements.");
    return;
  }

  function hideAllTabs() {
    [tab1, tab2, tab3, tab4, tab5].forEach((tab) => {
      tab.classList.remove("visible");
      tab.classList.add("hidden");
    });
  }

  function deactivateAllButtons() {
    [button1, button2, button3, button4, button5].forEach((btn) => {
      btn.classList.remove("active");
    });
  }

  button1.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 1 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab1.classList.remove("hidden");
    tab1.classList.add("visible");

    button1.classList.add("active");
    titleElement.innerHTML = titleMap[0];
  });

  button2.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 2 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab2.classList.remove("hidden");
    tab2.classList.add("visible");

    button2.classList.add("active");
    titleElement.innerHTML = titleMap[1];
  });

  button3.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 3 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab3.classList.remove("hidden");
    tab3.classList.add("visible");

    button3.classList.add("active");
    titleElement.innerHTML = titleMap[2];
  });

  button4.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 4 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab4.classList.remove("hidden");
    tab4.classList.add("visible");

    button4.classList.add("active");
    titleElement.innerHTML = titleMap[3];
  });

  button5.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 5 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab5.classList.remove("hidden");
    tab5.classList.add("visible");

    button5.classList.add("active");
    titleElement.innerHTML = titleMap[4];
  });

  // Load first tab by default
  button1.click();
});
