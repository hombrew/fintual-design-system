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
@import "./base.css";
@import "uniwind";

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

fs.writeFileSync(
  path.resolve(fileURLToPath(import.meta.url), "../../styles/theme.native.css"),
  generateTheme(),
);
