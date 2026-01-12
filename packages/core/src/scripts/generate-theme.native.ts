import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { DarkTheme, LightTheme } from "../styles/tokens.ts";

function generateTheme() {
  const light = Object.entries(LightTheme)
    .map(([key, value]) => `      --color-${key}: ${value};`)
    .join("\n");

  const dark = Object.entries(DarkTheme)
    .map(([key, value]) => `      --color-${key}: ${value};`)
    .join("\n");

  return `
@import "tailwindcss";
@import "tw-animate-css";
@import "uniwind";

@source "../**/*.{ts,tsx}";

@theme {
  --radius: 0.625rem;
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);

  --spacing-hairline: hairlineWidth();
}


@layer theme {
  :root {
    @variant light {
${light}
    }

    @variant dark {
${dark}
    }
  }
}
`;
}

const filePath = path.resolve(
  fileURLToPath(import.meta.url),
  "../../../lib/styles/theme.native.css",
);
fs.writeFileSync(filePath, generateTheme());
