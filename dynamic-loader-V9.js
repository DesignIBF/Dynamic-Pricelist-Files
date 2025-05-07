document.addEventListener("DOMContentLoaded", function () {
  const tab1 = document.querySelector(".cms-tab1");
  const tab2 = document.querySelector(".cms-tab2");

  const button1 = document.querySelector(".cms-button1");
  const button2 = document.querySelector(".cms-button2");

  button1.addEventListener("click", function (e) {
    e.preventDefault();

    tab1.classList.remove("hidden");
    tab1.classList.add("visible");

    tab2.classList.remove("visible");
    tab2.classList.add("hidden");

    button1.classList.add("active");
    button2.classList.remove("active");
  });

  button2.addEventListener("click", function (e) {
    e.preventDefault();

    tab2.classList.remove("hidden");
    tab2.classList.add("visible");

    tab1.classList.remove("visible");
    tab1.classList.add("hidden");

    button2.classList.add("active");
    button1.classList.remove("active");
  });

  // Optional: Show tab1 by default
  button1.click();
});
