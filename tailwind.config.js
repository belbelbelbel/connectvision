/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // 👈 ensures it only toggles when YOU add/remove the class
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
