/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBg: "#FFF8F0",
        customYellow: "#F0C10E",
        customBorder: "#ADADAD",
        customTablebg: "#EBE1CF",
        customDisabledInput: "#E0D9D0",
      },
      height: {
        customHeight: "41px",
        customWeight: "270px",
      },
      boxShadow: {
        "all-sides": "-2px 0px 80px 20px #6FBBD6",
        // You can adjust the shadow properties as needed
      },
      spacing: {
        "21.7rem": "21.7rem",
      },
    },
  },
  plugins: [],
};
