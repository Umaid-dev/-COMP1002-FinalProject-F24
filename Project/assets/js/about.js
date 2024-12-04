// Display Welcome Message in Console
console.log("Welcome to the About Us page of Nike!");

// Interactive Back to Home Button
const backToHomeLink = document.querySelector('a[href="index.html"]');
if (backToHomeLink) {
    backToHomeLink.addEventListener("click", (event) => {
        event.preventDefault(); // Prevent immediate redirection
        alert("You are being redirected to the Home page."); // Display a message
        window.location.href = "index.html"; // Redirect to Home
    });
}

// Contact Us Click Interaction
const contactEmail = document.querySelector('a[href^="mailto:"]');
if (contactEmail) {
    contactEmail.addEventListener("click", () => {
        alert("You are about to email our support team.");
    });
}

// Animate Section Titles on Scroll
const sectionTitles = document.querySelectorAll(".main-content h2");
window.addEventListener("scroll", () => {
    sectionTitles.forEach((title) => {
        const titlePosition = title.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (titlePosition < screenPosition) {
            title.style.transform = "translateX(0)";
            title.style.opacity = "1";
        }
    });
});

// Initial Animation for Section Titles
sectionTitles.forEach((title) => {
    title.style.transform = "translateX(-100px)";
    title.style.opacity = "0";
    title.style.transition = "all 0.5s ease-in-out";
});
