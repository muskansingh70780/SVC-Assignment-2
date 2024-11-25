// Function to show an alert when a navigation link is clicked
function showMessage(page) {
    alert(`You clicked on the ${page} link!`);
}

// Example of adding dynamic content to the main section
document.addEventListener("DOMContentLoaded", () => {
    const mainSection = document.querySelector("main");
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "JavaScript has been successfully loaded and is working!";
    newParagraph.style.color = "green";
    mainSection.appendChild(newParagraph);
});
