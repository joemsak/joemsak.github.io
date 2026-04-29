import { beforeEach, describe, expect, it } from "vitest";
import { initEmailLinks } from "./email-links.ts";

describe("initEmailLinks", () => {
  beforeEach(() => {
    document.body.innerHTML = "";
  });

  it("decodes reversed name and host into a mailto link", () => {
    document.body.innerHTML = `
      <a id="link" href="#" data-email-name="eoj" data-email-host="moc.elpmaxe">Email me</a>
    `;

    initEmailLinks();

    const link = document.getElementById("link") as HTMLAnchorElement;
    expect(link.getAttribute("href")).toBe("mailto:joe@example.com");
    expect(link.textContent).toBe("joe@example.com");
    expect(link.getAttribute("aria-label")).toBe("Email joe@example.com");
  });

  it("ignores anchors without the email data attributes", () => {
    document.body.innerHTML = `<a id="other" href="https://example.com">Plain</a>`;

    initEmailLinks();

    const link = document.getElementById("other") as HTMLAnchorElement;
    expect(link.getAttribute("href")).toBe("https://example.com");
  });

  it("handles missing data values without throwing", () => {
    document.body.innerHTML = `
      <a id="empty" href="#" data-email-name="" data-email-host=""></a>
    `;

    initEmailLinks();

    const link = document.getElementById("empty") as HTMLAnchorElement;
    expect(link.getAttribute("href")).toBe("mailto:@");
  });
});
