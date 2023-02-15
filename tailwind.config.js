/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-image":
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/src/assets/background_img.jpg')",
      },
      colors: {
        primary: "#121212",
        secondary: "#F3F4F8",
        third: "#1c1c1c ",
        forth: "#595959",
        fifth: "#e7e7e7",
        sixth: "#262626",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
