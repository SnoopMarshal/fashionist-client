module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "home-landing": "url('./../src/assets/images/nike.jfif')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
