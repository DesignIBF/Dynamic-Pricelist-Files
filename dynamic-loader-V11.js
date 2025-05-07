// Waits until an element is available in the DOM before running the logic
function waitForElement(selector, callback) {
  const el = document.querySelector(selector);
  if (el) {
    callback();
  } else {
    setTimeout(() => waitForElement(selector, callback), 100);
  }
}

// Main tab switching logic
waitForElement(".cms-tab1", function () {
  const tab1 = document.querySelector(".cms-tab1");
  const tab2 = document.querySelector(".cms-tab2");

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");

  console.log("✅ Elements are now ready", { tab1, tab2, button1, button2 });

  if (!tab1 || !tab2 || !button1 || !button2) {
    console.error("❌ One or more required elements are missing.");
    return;
  }

  // Button 1 behavior
  button1.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 1 clicked");

    tab1.classList.remove("hidden");
    tab1.classList.add("visible");

    tab2.classList.remove("visible");
    tab2.classList.add("hidden");

    button1.classList.add("active");
    button2.classList.remove("active");
  });

  // Button 2 behavior
  button2.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 2 clicked");

    tab2.classList.remove("hidden");
    tab2.classList.add("visible");

    tab1.classList.remove("visible");
    tab1.classList.add("hidden");

    button2.classList.add("active");
    button1.classList.remove("active");
  });

  // Show tab 1 by default
  button1.click();
});
