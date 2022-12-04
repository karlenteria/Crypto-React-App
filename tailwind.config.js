/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        fontFamily: { nunito: "Nunito" },
    },

    colors: {
    gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
    white: "#fff",
    primary: "#6C5DD3",
    cyan: "#14ffec",
    red: "#d6436e",
    accent: "#FFA2C0",
    secondary: "#0049C6",
    green: "#25da72",   
    },
    fontSize: {
      sm: "14px", md: "18px", lg: "24px", xl: "32px", base: "16px"
    }
  },
  plugins: [],
}
