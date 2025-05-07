document.addEventListener("DOMContentLoaded", function () {
  console.log("💡 JS loaded and running");

  // Map buttons to new product URLs
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

  for (let buttonId in buttonMap) {
    const button = document.getElementById(buttonId);
    if (button) {
      console.log("🔗 Found button:", buttonId);
      button.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        const newUrl = buttonMap[buttonId];
        console.log("🧭 Switching to:", newUrl);
        replaceCmsDiv(newUrl);
        setActiveLink(button);
      });
    } else {
      console.warn("⚠️ Button not found:", buttonId);
    }
  }

  // Replace the CMS product list <div> to force re-render
  function replaceCmsDiv(newUrl) {
    const oldDiv = document.querySelector("[cms-content-list-url]");
    if (!oldDiv) {
      console.error("❌ CMS content area not found.");
      return;
    }

    const newDiv = oldDiv.cloneNode(false); // no children
    newDiv.setAttribute("cms-content-list-url", newUrl);

    // Copy other CMS attributes if they exist
    if (oldDiv.hasAttribute("data-cms-content")) {
      newDiv.setAttribute("data-cms-content", "yes");
    }
    if (oldDiv.hasAttribute("cms-content-list-view")) {
      newDiv.setAttribute(
        "cms-content-list-view",
        oldDiv.getAttribute("cms-content-list-view")
      );
    }
    if (oldDiv.hasAttribute("cms-content-list-export-pdf")) {
      newDiv.setAttribute(
        "cms-content-list-export-pdf",
        oldDiv.getAttribute("cms-content-list-export-pdf")
      );
    }
    if (oldDiv.id) {
      newDiv.id = oldDiv.id;
    }

    oldDiv.parentNode.replaceChild(newDiv, oldDiv);
    console.log("✅ Replaced CMS div with new URL");

    // Optional: trigger CMS reload if available
    if (typeof window.refreshCmsContent === "function") {
      console.log("🔁 Calling refreshCmsContent()");
      window.refreshCmsContent();
    }
  }

  // Highlight the active button
  function setActiveLink(activeAnchor) {
    const allAnchors = document.querySelectorAll("#iot6z a");
    allAnchors.forEach((a) => a.classList.remove("active"));
    activeAnchor.classList.add("active");
  }
});

console.log("Ik ben gelinkt");
