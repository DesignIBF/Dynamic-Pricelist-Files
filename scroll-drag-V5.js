document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("i7glg");
  if (!container) return;

  // Prevent images inside container from being draggable
  const images = container.querySelectorAll("img");
  images.forEach((img) => {
    img.setAttribute("draggable", "false");
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  container.addEventListener("mousedown", (e) => {
    e.preventDefault();
    isDown = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("mouseleave", () => {
    isDown = false;
  });

  container.addEventListener("mouseup", () => {
    isDown = false;
  });

  container.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });

  // Touch support for mobile
  container.addEventListener("touchstart", (e) => {
    isDown = true;
    startX = e.touches[0].pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
  });

  container.addEventListener("touchend", () => {
    isDown = false;
  });

  container.addEventListener("touchmove", (e) => {
    if (!isDown) return;
    const x = e.touches[0].pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeft - walk;
  });
});
