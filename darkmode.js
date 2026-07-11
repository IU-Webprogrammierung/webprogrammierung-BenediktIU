(() => {
  const storageKey = "airfryer-theme";
  const darkTheme = "dark";
  const lightTheme = "light";

  function getPreferredTheme() {
    const savedTheme = localStorage.getItem(storageKey);

    if (savedTheme === darkTheme || savedTheme === lightTheme) {
      return savedTheme;
    }

    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    return prefersDarkMode ? darkTheme : lightTheme;
  }

  function updateButton(theme) {
    const button = document.querySelector("[data-theme-toggle]");

    if (!button) {
      return;
    }

    const icon = button.querySelector("[data-theme-icon]");
    const text = button.querySelector("[data-theme-text]");
    const isDarkMode = theme === darkTheme;

    button.setAttribute("aria-pressed", String(isDarkMode));

    button.setAttribute(
      "aria-label",
      isDarkMode
        ? "Zum hellen Modus wechseln"
        : "Zum dunklen Modus wechseln"
    );

    if (icon) {
      icon.textContent = isDarkMode ? "☀" : "☾";
    }

    if (text) {
      text.textContent = isDarkMode ? "Hell" : "Dunkel";
    }
  }

  function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;

    updateButton(theme);
  }

  function toggleTheme() {
    const currentTheme =
      document.documentElement.dataset.theme || getPreferredTheme();

    const newTheme =
      currentTheme === darkTheme ? lightTheme : darkTheme;

    localStorage.setItem(storageKey, newTheme);
    applyTheme(newTheme);
  }

  function initializeThemeToggle() {
    applyTheme(getPreferredTheme());

    const button = document.querySelector("[data-theme-toggle]");

    if (!button) {
      return;
    }

    if (button.dataset.themeInitialized === "true") {
      return;
    }

    button.dataset.themeInitialized = "true";
    button.addEventListener("click", toggleTheme);
  }

  applyTheme(getPreferredTheme());

  document.addEventListener(
    "DOMContentLoaded",
    initializeThemeToggle
  );

  document.addEventListener(
    "htmx:afterSwap",
    initializeThemeToggle
  );
})();