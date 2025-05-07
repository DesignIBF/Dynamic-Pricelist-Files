// Wait for the full HTML document to load before running any code
document.addEventListener("DOMContentLoaded", function () {
  // Map each button ID to the corresponding URL you want it to load
  const buttonMap = {
    loadPage1:
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&product_group=85e5624a-3128-4892-a306-3e060dd1c8fe%2Cce2aa506-46f0-4fcf-aa42-56da08135155",
    loadPage2:
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=6bbff44f-da60-40cf-9e02-6b59e2405a3d",
    loadPage3:
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=db41ba37-a4f2-44cf-8763-cdadc282c28f",
    loadPage4:
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=eef2c47b-cbe2-44c4-bcb9-37ccfd8e43fd",
    loadPage5:
      "htthttps://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=cde874e2-cf22-4ea1-99d7-3975bb329b46",
  };

  // Go through each button ID in the map
  for (let buttonId in buttonMap) {
    const button = document.getElementById(buttonId); // Find the button by its ID
    if (button) {
      button.addEventListener("click", () => {
        const newUrl = buttonMap[buttonId];
        updateCmsContent(newUrl); // Call the function to update the CMS content area
      });
    }
  }

  // This function updates the cms-content-list-url and tries to reload the content
  function updateCmsContent(newUrl) {
    // Find the element that contains the CMS product list
    const cmsDiv = document.querySelector("[cms-content-list-url]");
    if (!cmsDiv) {
      console.error("No CMS content element found.");
      return;
    }

    // Update the cms-content-list-url attribute
    cmsDiv.setAttribute("cms-content-list-url", newUrl);

    // Try to refresh content: some CMS systems offer a JS function to trigger this
    if (typeof window.refreshCmsContent === "function") {
      window.refreshCmsContent(); // Call it if it exists
    } else {
      // Fallback: manually fetch and inject the HTML from the new URL
      fetch(newUrl)
        .then((res) => res.text())
        .then((html) => {
          cmsDiv.innerHTML = html; // Replace the content in the CMS area
        })
        .catch((err) => console.error("Failed to load new content:", err));
    }
  }
});
