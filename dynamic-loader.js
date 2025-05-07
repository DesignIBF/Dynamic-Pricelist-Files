// Wait for the full HTML document to load before running any code
document.addEventListener("DOMContentLoaded", function () {
  // Map each button <a> ID to the corresponding dynamic product URL
  const buttonMap = {
    i8bph:
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&product_group=85e5624a-3128-4892-a306-3e060dd1c8fe%2Cce2aa506-46f0-4fcf-aa42-56da08135155",
    "i8bph-4-2":
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=6bbff44f-da60-40cf-9e02-6b59e2405a3d",
    "i8bph-5":
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=db41ba37-a4f2-44cf-8763-cdadc282c28f",
    "i8bph-6":
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=eef2c47b-cbe2-44c4-bcb9-37ccfd8e43fd",
    "i8bph-4":
      "https://app.ibuyflowers.com/shopping/products?date=20250528&sortBy=best_offer&search=wedding+season&category=cde874e2-cf22-4ea1-99d7-3975bb329b46",
  };

  // Loop through each anchor element and attach a click event
  for (let buttonId in buttonMap) {
    const button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation(); // <== NEW: stop CMS from re-intercepting
        const newUrl = buttonMap[buttonId];
        updateCmsContent(newUrl);
        setActiveLink(button);
      });
    }
  }

  // Function to update the cms-content-list-url and reload content
  function updateCmsContent(newUrl) {
    const cmsDiv = document.querySelector("[cms-content-list-url]");
    if (!cmsDiv) {
      console.error("No CMS content element found.");
      return;
    }

    // Update the attribute
    cmsDiv.setAttribute("cms-content-list-url", newUrl);
    console.log("Updated cms-content-list-url to:", newUrl);

    // Option 1: If CMS has a re-render method (try this first)
    if (typeof window.refreshCmsContent === "function") {
      console.log("Calling CMS content refresh...");
      window.refreshCmsContent();
      return;
    }

    // Option 2: Fallback — manually fetch and inject content
    console.log("Manually fetching content...");
    fetch(newUrl)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch content");
        return res.text();
      })
      .then((html) => {
        cmsDiv.innerHTML = html;
        console.log("Content updated.");
      })
      .catch((err) => console.error("Failed to load new content:", err));
  }

  // Optional: highlight the currently active link
  function setActiveLink(activeAnchor) {
    const allAnchors = document.querySelectorAll("#iot6z a");
    allAnchors.forEach((a) => a.classList.remove("active"));
    activeAnchor.classList.add("active");
  }
});

console.log("Ik ben gelinkt");
