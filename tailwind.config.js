/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
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
        abuGelap: "#696F7D",
        neutrayGray: "#FAFAFA",
        hitam_dl: "#3A3E45",
        abuPudar: "#BABDC5",
      },

      screens: {
        sm: "425px",
        smd: "568px",
        md: "768px",
        mdlg: "990px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [],
};
