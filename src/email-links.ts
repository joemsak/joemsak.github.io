function reverse(value: string): string {
  return value.split("").reverse().join("");
}

export function initEmailLinks(root: ParentNode = document): void {
  const links = root.querySelectorAll<HTMLAnchorElement>(
    "[data-email-name][data-email-host]",
  );

  links.forEach((link) => {
    const name = reverse(link.dataset.emailName ?? "");
    const host = reverse(link.dataset.emailHost ?? "");
    const address = `${name}@${host}`;

    link.href = `mailto:${address}`;
    link.textContent = address;
    link.setAttribute("aria-label", `Email ${address}`);
  });
}
