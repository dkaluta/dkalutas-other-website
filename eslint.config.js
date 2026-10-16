import js from "@eslint/js";
import globals from "globals";

export default [
  { ignores: ["dist/**"] },
  js.configs.recommended,
  {
    files: ["main.js", "platform-fonts.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  {
    files: ["vite.config.js", "eslint.config.js"],
    languageOptions: {
      globals: globals.node,
    },
  },
];
