/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        helvetica: ["Helvetica", "sans-serif"],
      },
      colors: {
        hitam: "#050810",
        abu: "#747B8B",
        semiAbu: "#8B919E",
        unggu: "#8246fb",
        ungguMuda: "#BC9BFD",
        putih: "#FFFFFF",
        semiPutih: "#e3e5e8",
        abuGelap:"#696F7D",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "24px",
          md: "48px",
          lg: "72px",
          xl: "120px",
        },
        
      },
      screens: {
        sm: "425px",
        smd: "568px",
        md: "768px",
        mdlg: "990px",
        lg: "1200px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
