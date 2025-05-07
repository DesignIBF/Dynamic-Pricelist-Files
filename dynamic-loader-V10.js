document.addEventListener("DOMContentLoaded", function () {
  const tab1 = document.querySelector(".cms-tab1");
  const tab2 = document.querySelector(".cms-tab2");

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");

  console.log("🧪 Tabs found:", { tab1, tab2 });
  console.log("🧪 Buttons found:", { button1, button2 });

  if (!tab1 || !tab2 || !button1 || !button2) {
    console.error("❌ One or more buttons or tabs are missing!");
    return;
  }

  button1.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 1 clicked");

    console.log("🔁 Showing tab1, hiding tab2");
    tab1.classList.remove("hidden");
    tab1.classList.add("visible");

    tab2.classList.remove("visible");
    tab2.classList.add("hidden");

    button1.classList.add("active");
    button2.classList.remove("active");
  });

  button2.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("👉 Button 2 clicked");

    console.log("🔁 Showing tab2, hiding tab1");
    tab2.classList.remove("hidden");
    tab2.classList.add("visible");

    tab1.classList.remove("visible");
    tab1.classList.add("hidden");

    button2.classList.add("active");
    button1.classList.remove("active");
  });

  // Trigger default state
  console.log("✅ Triggering default view: tab1");
  button1.click();
});
