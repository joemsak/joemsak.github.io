export function initDarkModeToggle(root: Document = document): void {
  const toggle = root.getElementById("dark-toggle");
  if (!toggle) return;

  const svg = toggle.querySelector("svg");
  const circle = toggle.querySelector<SVGCircleElement>(".toggle-circle");
  const mask = toggle.querySelector<SVGCircleElement>(".toggle-mask");
  const rays = toggle.querySelector<SVGGElement>(".toggle-rays");
  if (!svg || !circle || !mask || !rays) return;

  const render = (animate: boolean): void => {
    const isDark = root.documentElement.classList.contains("dark");

    svg.style.transition = animate ? "transform 0.5s ease" : "";
    circle.style.transition = animate
      ? "cx 0.4s ease, cy 0.4s ease, r 0.4s ease"
      : "";
    mask.style.transition = animate ? "cx 0.4s ease, cy 0.4s ease" : "";
    rays.style.transition = animate
      ? "opacity 0.3s ease, transform 0.4s ease"
      : "";

    svg.style.transform = isDark ? "rotate(40deg)" : "rotate(0deg)";
    circle.setAttribute("r", isDark ? "9" : "5");
    mask.setAttribute("cx", isDark ? "18" : "30");
    mask.setAttribute("cy", isDark ? "6" : "0");
    rays.style.opacity = isDark ? "0" : "1";
    rays.style.transform = isDark ? "scale(0.5)" : "scale(1)";

    toggle.setAttribute(
      "aria-label",
      isDark ? "Switch to light mode" : "Switch to dark mode",
    );
  };

  render(false);

  toggle.addEventListener("click", () => {
    const nowDark = root.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", nowDark ? "dark" : "light");
    render(true);
  });
}
