/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      listStyleType: {
        "lower-alpha": "lower-alpha",
        "lower-roman": "lower-roman",
        circle: "circle",
        square: "square",
      },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      addComponents({
        ".markdown-content ol ol": {
          listStyleType: theme("listStyleType.lower-alpha"),
        },
        ".markdown-content ol ol ol": {
          listStyleType: theme("listStyleType.lower-roman"),
        },
        ".markdown-content ul ul": {
          listStyleType: theme("listStyleType.circle"),
        },
        ".markdown-content ul ul ul": {
          listStyleType: theme("listStyleType.square"),
        },
      });
    },
  ],
};
