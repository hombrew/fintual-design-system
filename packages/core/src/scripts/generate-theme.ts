import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DarkTheme, LightTheme } from "../styles/tokens.ts";

function generateTheme() {
  const light = Object.entries(LightTheme)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  const dark = Object.entries(DarkTheme)
    .map(([key, value]) => `  --${key}: ${value};`)
    .join("\n");

  const map = Object.keys(LightTheme)
    .map((key) => `  --color-${key}: var(--${key});`)
    .join("\n");

  return `
@import "./base.css";

@custom-variant dark (&:is(.dark *));

:root {
${light}
}

.dark {
${dark}
}

@theme inline {
${map}
}
`;
}

fs.writeFileSync(
  path.resolve(fileURLToPath(import.meta.url), "../../styles/theme.css"),
  generateTheme(),
);
