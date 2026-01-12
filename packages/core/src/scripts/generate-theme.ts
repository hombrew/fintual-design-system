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
@import "tailwindcss";
@import "tw-animate-css";

@theme {
  --radius: 0.625rem;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --spacing-hairline: hairlineWidth();
}

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

const filePath = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../lib/styles/theme.css",
);
fs.writeFileSync(filePath, generateTheme());
