import { initWeatherWidget } from "./weather-widget.ts";

function initDarkModeToggle() {
  const toggle = document.getElementById("dark-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    document.documentElement.classList.add("dark");
  } else if (stored === "light") {
    document.documentElement.classList.remove("dark");
  }
  updateIcon();

  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateIcon();
  });

  function updateIcon() {
    const isDark = document.documentElement.classList.contains("dark");
    toggle!.textContent = isDark ? "\u2600\uFE0F" : "\uD83C\uDF19";
    toggle!.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

initDarkModeToggle();
initWeatherWidget();
