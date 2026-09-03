document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("theme-toggle");

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark");
            toggle.textContent = "Light mode";
        } else {
            document.body.classList.remove("dark");
            toggle.textContent = "Dark mode";
        }
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    toggle.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });
});
