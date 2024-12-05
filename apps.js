// Add event listeners to all size elements
currentProductSizes.forEach((size) => {
    // Click event to select a size
    size.addEventListener("click", () => {
      // Remove the 'selected' class from all sizes
      currentProductSizes.forEach((s) => {
        s.classList.remove("selected");
      });
  
      // Add the 'selected' class to the clicked size
      size.classList.add("selected");
    });
  });
  