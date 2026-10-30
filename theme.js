// Create the Dark Mode button
const toggleButton = document.createElement("button");

toggleButton.className = "theme-toggle";
toggleButton.type = "button";
toggleButton.textContent = "\u{1F319} Dark Mode";
toggleButton.setAttribute("aria-pressed", "false");

// Add the button to the navigation bar
const navigation = document.querySelector("nav");

if (navigation) {
    navigation.appendChild(toggleButton);
}

// Apply the saved theme
function applyTheme(isDark) {
    document.body.classList.toggle("dark-mode", isDark);

    toggleButton.textContent = isDark
        ? "\u{2600}\uFE0F Light Mode"
        : "\u{1F319} Dark Mode";

    toggleButton.setAttribute("aria-pressed", String(isDark));
}

// Load the saved theme
const savedTheme = localStorage.getItem("theme");
applyTheme(savedTheme === "dark");

// Switch themes when clicked
toggleButton.addEventListener("click", function () {
    const isDark = !document.body.classList.contains("dark-mode");

    applyTheme(isDark);

    localStorage.setItem("theme", isDark ? "dark" : "light");
});