const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins:  [
    nextui({
      prefix: "nextui", // prefix for themes variables
      addCommonColors: true, // override common colors (e.g. "blue", "green", "pink").
      defaultTheme: "light", // default theme from the themes object
      defaultExtendTheme: "light", // default theme to extend on custom themes
      layout: {}, // common layout tokens (applied to all themes)
      extend: {
        colors: {
          purple: {
            400: "#9353D3"
          }
        },
      },
      themes: {
        light: {
          layout: {}, // light theme layout tokens
          colors: {}, // light theme colors
        },
        dark: {
          layout: {}, // dark theme layout tokens
          colors: {}, // dark theme colors
        },
        // ... custom themes
      },
    }),
  ],
};


