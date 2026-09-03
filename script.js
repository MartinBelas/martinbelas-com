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

    const langButtons = document.querySelectorAll(".lang-btn");
    const langBlocks = document.querySelectorAll(".lang-block");

    function applyLang(lang) {
        langBlocks.forEach(block => {
            block.hidden = block.dataset.lang !== lang;
        });
        langButtons.forEach(btn => {
            const isActive = btn.dataset.lang === lang;
            btn.classList.toggle("active", isActive);
            btn.setAttribute("aria-selected", String(isActive));
        });
        document.documentElement.lang = lang;
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
