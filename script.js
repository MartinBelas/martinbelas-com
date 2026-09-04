document.addEventListener("DOMContentLoaded", () => {

    const toggle = document.getElementById("theme-toggle");
    const themeLabels = {
        cs: { dark: "Tmavý režim", light: "Světlý režim" },
        en: { dark: "Dark mode", light: "Light mode" },
        de: { dark: "Dunkler Modus", light: "Heller Modus" }
    };

    function updateThemeLabel() {
        const labels = themeLabels[document.documentElement.lang] || themeLabels.cs;
        toggle.textContent = document.body.classList.contains("dark") ? labels.light : labels.dark;
    }

    function applyTheme(theme) {
        if (theme === "dark") {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
        updateThemeLabel();
    }

    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    toggle.addEventListener("click", () => {
        const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        applyTheme(newTheme);
    });

    const langButtons = document.querySelectorAll(".lang-btn");
    const langBlocks = document.querySelectorAll(".lang-block");

    function applyLang(lang) {
        if (!Object.prototype.hasOwnProperty.call(themeLabels, lang)) {
            lang = "cs";
        }
        langBlocks.forEach(block => {
            block.hidden = block.dataset.lang !== lang;
        });
        langButtons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-selected", String(isActive));
        });
        document.documentElement.lang = lang;
        updateThemeLabel();
    }

    const savedLang = localStorage.getItem("lang") || "cs";
    applyLang(savedLang);

    langButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            const lang = btn.dataset.lang;
            localStorage.setItem("lang", lang);
            applyLang(lang);
        });
    });
});
