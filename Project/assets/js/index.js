const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    { id: 1, title: "Air Force", img: "./img/air.png" },
];

// Add click events to menu items
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        console.log(`Menu item ${index} clicked`); // Debug
        wrapper.style.transform = `translateX(${-100 * index}vw)`; // Slide
    });
});
