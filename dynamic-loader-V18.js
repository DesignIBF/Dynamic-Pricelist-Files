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
  const tab5 = document.getElementById("cms-tab-five");
  const tab6 = document.getElementById("cms-tab-six");

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");
  const button3 = document.querySelector(".cms-button3");
  const button4 = document.querySelector(".cms-button4");
  const button5 = document.querySelector(".cms-button5");
  const button6 = document.querySelector(".cms-button6");

  const titleElement = document.getElementById("tab-title-2");

  console.log("✅ Elements found:", {
    tab1,
    tab2,
    tab3,
    tab4,
    tab5,
    tab6,
  });

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

  function activateTab(button, tab) {
    hideAllTabs();
    deactivateAllButtons();

    tab.classList.remove("hidden");
    tab.classList.add("visible");

    button.classList.add("active");
    titleElement.innerHTML = button.textContent.trim();
  }

  button1.addEventListener("click", (e) => {
    e.preventDefault();
    activateTab(button1, tab1);
  });
  button2.addEventListener("click", (e) => {
    e.preventDefault();
    activateTab(button2, tab2);
  });
  button3.addEventListener("click", (e) => {
    e.preventDefault();
    activateTab(button3, tab3);
  });
  button4.addEventListener("click", (e) => {
    e.preventDefault();
    activateTab(button4, tab4);
  });
  button5.addEventListener("click", (e) => {
    e.preventDefault();
    activateTab(button5, tab5);
  });
  button6.addEventListener("click", (e) => {
    e.preventDefault();
    activateTab(button6, tab6);
  });

  // Load first tab by default
  button1.click();
});
