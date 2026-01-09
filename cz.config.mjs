import fs from "fs";
import path from "path";
import { definePrompt } from "cz-git";

const apps = fs.readdirSync(path.resolve(import.meta.dirname, "apps"));

const packages = fs
  .readdirSync(path.resolve(import.meta.dirname, "packages"))
  .map((dir) => `workspace:${dir}`);

export default definePrompt({
  maxHeaderLength: 100,
  scopes: [...apps, ...packages,],
  enableMultipleScopes: true,
  scopeEnumSeparator: ", ",
});
