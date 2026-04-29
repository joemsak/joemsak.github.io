function initDarkModeToggle() {
  const toggle = document.getElementById("dark-toggle");
  if (!toggle) return;

  const stored = localStorage.getItem("theme");
  if (stored === "dark") {
    document.documentElement.classList.add("dark");
  } else if (stored === "light") {
    document.documentElement.classList.remove("dark");
  }
  updateState(false);

  toggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    updateState(true);
  });

  function updateState(animate: boolean) {
    const isDark = document.documentElement.classList.contains("dark");
    const svg = toggle!.querySelector("svg")!;
    const circle = svg.querySelector(".toggle-circle") as SVGCircleElement;
    const mask = svg.querySelector(".toggle-mask") as SVGCircleElement;
    const rays = svg.querySelector(".toggle-rays") as SVGGElement;

    if (animate) {
      svg.style.transition = "transform 0.5s ease";
      circle.style.transition = "cx 0.4s ease, cy 0.4s ease, r 0.4s ease";
      mask.style.transition = "cx 0.4s ease, cy 0.4s ease";
      rays.style.transition = "opacity 0.3s ease, transform 0.4s ease";
    }

    if (isDark) {
      svg.style.transform = "rotate(40deg)";
      circle.setAttribute("cx", "12");
      circle.setAttribute("cy", "12");
      circle.setAttribute("r", "9");
      mask.setAttribute("cx", "18");
      mask.setAttribute("cy", "6");
      rays.style.opacity = "0";
      rays.style.transform = "scale(0.5)";
    } else {
      svg.style.transform = "rotate(0deg)";
      circle.setAttribute("cx", "12");
      circle.setAttribute("cy", "12");
      circle.setAttribute("r", "5");
      mask.setAttribute("cx", "30");
      mask.setAttribute("cy", "0");
      rays.style.opacity = "1";
      rays.style.transform = "scale(1)";
    }

    toggle!.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

initDarkModeToggle();
