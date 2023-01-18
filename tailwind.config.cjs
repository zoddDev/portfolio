/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        // mono: ["CaskaydiaCove Nerd Font Mono"],
        mono: ["CaskaydiaCoveNFM"],
        tnrpro: ["TimesNewRomanProBold"],
        tnr: ["Times New Roman"],
        firaCode: ["Fira Code"],
      },
      colors: {
        "nosferatu-darker": "#242631",
      },
    },
  },
  daisyui: {
    themes: ["dracula"],
    darkTheme: "dracula",
  },
  plugins: [require("tailwind-dracula")(), require("daisyui")],
};
