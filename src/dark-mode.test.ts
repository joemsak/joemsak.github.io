import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { initDarkModeToggle } from "./dark-mode.ts";

const TOGGLE_HTML = `
  <button id="dark-toggle" aria-label="Toggle dark mode">
    <svg>
      <circle class="toggle-circle"></circle>
      <circle class="toggle-mask"></circle>
      <g class="toggle-rays"></g>
    </svg>
  </button>
`;

describe("initDarkModeToggle", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    document.body.innerHTML = TOGGLE_HTML;
    localStorage.clear();
  });

  afterEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("renders the light state when dark class is absent", () => {
    initDarkModeToggle();

    const toggle = document.getElementById("dark-toggle")!;
    const circle = document.querySelector(".toggle-circle")!;

    expect(circle.getAttribute("r")).toBe("5");
    expect(toggle.getAttribute("aria-label")).toBe("Switch to dark mode");
  });

  it("renders the dark state when dark class is present", () => {
    document.documentElement.classList.add("dark");

    initDarkModeToggle();

    const toggle = document.getElementById("dark-toggle")!;
    const circle = document.querySelector(".toggle-circle")!;

    expect(circle.getAttribute("r")).toBe("9");
    expect(toggle.getAttribute("aria-label")).toBe("Switch to light mode");
  });

  it("toggles the dark class and persists the choice on click", () => {
    initDarkModeToggle();

    const toggle = document.getElementById("dark-toggle")!;
    toggle.click();

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");

    toggle.click();

    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("theme")).toBe("light");
  });

  it("does nothing when the toggle button is missing", () => {
    document.body.innerHTML = "";
    expect(() => initDarkModeToggle()).not.toThrow();
  });
});
