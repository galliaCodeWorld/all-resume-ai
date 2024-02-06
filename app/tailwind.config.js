const colors = require("tailwindcss/colors");
["lightBlue", "warmGray", "trueGray", "coolGray", "blueGray"].forEach(
  (color) => delete colors[color]
);

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,svelte}"],
  theme: {
    colors: {
      ...colors,
      "brand-primary": "#7B2A8E",
      "brand-secondary": "#158EA9",
      //
    },
    extend: {},
  },
  plugins: [],
};
