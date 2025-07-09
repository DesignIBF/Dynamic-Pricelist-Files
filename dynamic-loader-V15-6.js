// Wait until the CMS tab wrapper is available before running
function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback();
  } else {
    setTimeout(() => waitForElement(selector, callback), 100);
  }
}

function waitForTabsAndInjectURLs(sheetUrl) {
  const tabs = [
    document.getElementById("cms-tab-one"),
    document.getElementById("cms-tab-two"),
    document.getElementById("cms-tab-three"),
    document.getElementById("cms-tab-four"),
    document.getElementById("cms-tab-five"),
    document.getElementById("cms-tab-six"),
    document.getElementById("cms-tab-seven"),
    document.getElementById("cms-tab-eight"),
    document.getElementById("cms-tab-nine"),
    document.getElementById("cms-tab-ten"),
    document.getElementById("cms-tab-eleven"),
  ];

  if (tabs.every((tab) => tab !== null)) {
    fetch(sheetUrl)
      .then((response) => response.text())
      .then((data) => {
        const lines = data.split("\n").slice(1); // skip header
        lines.forEach((line, idx) => {
          const url = line.split(",")[1]?.trim();
          const tab = tabs[idx];
          if (tab && url) {
            const contentDiv = tab.querySelector("[cms-content-list-url]");
            if (contentDiv) {
              contentDiv.setAttribute("cms-content-list-url", url);
              console.log(`✅ Set URL for tab ${idx + 1}: ${url}`);
            } else {
              console.warn(`⚠️ No content div found for tab ${idx + 1}`);
            }
          }
        });
      })
      .catch((err) =>
        console.error("❌ Failed to fetch URLs from Google Sheets:", err)
      );
  } else {
    console.log("⏳ Waiting for all CMS tabs to load...");
    setTimeout(() => waitForTabsAndInjectURLs(sheetUrl), 300);
  }
}

// Start waiting for the tabs before fetching and injecting URLs
waitForTabsAndInjectURLs(
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQeHMuuto0hGKaJ1T2iIpDk3gOx0CQz2CisxZoOtSDksQV_N3Wyr8hVwan5qjXw6ok1AO5Uav0eGOdo/pub?gid=848877691&single=true&output=csv"
);

waitForElement("#cms-tab-one", function () {
  const tab1 = document.getElementById("cms-tab-one");
  const tab2 = document.getElementById("cms-tab-two");
  const tab3 = document.getElementById("cms-tab-three");
  const tab4 = document.getElementById("cms-tab-four");
  const tab5 = document.getElementById("cms-tab-five");
  const tab6 = document.getElementById("cms-tab-six");
  const tab7 = document.getElementById("cms-tab-seven");
  const tab8 = document.getElementById("cms-tab-eight");
  const tab9 = document.getElementById("cms-tab-nine");
  const tab10 = document.getElementById("cms-tab-ten");
  const tab11 = document.getElementById("cms-tab-eleven");

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");
  const button3 = document.querySelector(".cms-button3");
  const button4 = document.querySelector(".cms-button4");
  const button5 = document.querySelector(".cms-button5");
  const button6 = document.querySelector(".cms-button6");
  const button7 = document.querySelector(".cms-button7");
  const button8 = document.querySelector(".cms-button8");
  const button9 = document.querySelector(".cms-button9");
  const button10 = document.querySelector(".cms-button10");
  const button11 = document.querySelector(".cms-button11");

  const titleElement = document.getElementById("tab-title");
  const titleMap = [
    button1.textContent.trim(),
    button2.textContent.trim(),
    button3.textContent.trim(),
    button4.textContent.trim(),
    button5.textContent.trim(),
    button6.textContent.trim(),
    button7.textContent.trim(),
    button8.textContent.trim(),
    button9.textContent.trim(),
    button10.textContent.trim(),
    button11.textContent.trim(),
  ];

  console.log("✅ Elements found:", {
    tab1,
    tab2,
    tab3,
    tab4,
    tab5,
    tab6,
    tab7,
    tab8,
    tab9,
    tab10,
    tab11,
  });

  if (
    !tab1 ||
    !tab2 ||
    !tab3 ||
    !tab4 ||
    !tab5 ||
    !tab6 ||
    !tab7 ||
    !tab8 ||
    !tab9 ||
    !tab10 ||
    !tab11 ||
    !button1 ||
    !button2 ||
    !button3 ||
    !button4 ||
    !button5 ||
    !button6 ||
    !button7 ||
    !button8 ||
    !button9 ||
    !button10 ||
    !button11 ||
    !titleElement
  ) {
    console.error("❌ Missing one or more required elements.");
    return;
  }

  function hideAllTabs() {
    [
      tab1,
      tab2,
      tab3,
      tab4,
      tab5,
      tab6,
      tab7,
      tab8,
      tab9,
      tab10,
      tab11,
    ].forEach((tab) => {
      tab.classList.remove("visible");
      tab.classList.add("hidden");
    });
  }

  function deactivateAllButtons() {
    [
      button1,
      button2,
      button3,
      button4,
      button5,
      button6,
      button7,
      button8,
      button9,
      button10,
      button11,
    ].forEach((btn) => {
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

  button6.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 6 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab6.classList.remove("hidden");
    tab6.classList.add("visible");

    button6.classList.add("active");
    titleElement.innerHTML = titleMap[5];
  });

  button7.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 7 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab7.classList.remove("hidden");
    tab7.classList.add("visible");

    button7.classList.add("active");
    titleElement.innerHTML = titleMap[6];
  });

  button8.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 8 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab8.classList.remove("hidden");
    tab8.classList.add("visible");

    button8.classList.add("active");
    titleElement.innerHTML = titleMap[7];
  });

  button9.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 9 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab9.classList.remove("hidden");
    tab9.classList.add("visible");

    button9.classList.add("active");
    titleElement.innerHTML = titleMap[8];
  });

  button10.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 10 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab10.classList.remove("hidden");
    tab10.classList.add("visible");

    button10.classList.add("active");
    titleElement.innerHTML = titleMap[9];
  });

  button11.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 11 clicked");

    hideAllTabs();
    deactivateAllButtons();

    tab11.classList.remove("hidden");
    tab11.classList.add("visible");

    button11.classList.add("active");
    titleElement.innerHTML = titleMap[10];
  });

  // Load first tab by default
  button1.click();
});
