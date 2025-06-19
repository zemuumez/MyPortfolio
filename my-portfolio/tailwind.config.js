/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "futura-bold": ["Futura Md BT Bold", "sans-serif"],
        "futura-medium": ["Futura Md BT", "sans-serif"],
        "futura-book": ["Futura Bk BT", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        "brand-red": "#f43534",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "button-pulse": "button_pulse_kf 1.5s infinite cubic-bezier(.25,0,0,1)",
      },
      keyframes: {
        button_pulse_kf: {
          "0%": { boxShadow: "0 0 0 0px rgba(244, 53, 52, 1)" },
          "100%": { boxShadow: "0 0 0 20px rgba(244, 53, 52, 0)" },
        },
      },
    },
  },
  plugins: [],
};
