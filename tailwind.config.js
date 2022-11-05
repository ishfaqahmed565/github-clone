/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: "white",
            fontWeight: "400",
            a: {
              color: theme("colors.blue.400"),
              textDecoration: "none",
            },
            h2: {
              color: theme("colors.gray.300"),
              fontWeight: "500",
              paddingBottom: "1rem",
              borderBottom: "1px gray solid",
            },
            img: { display: "inline-block", marginRight: ".5rem" },
            hr: {
              borderColor: theme("colors.gray.400"),
            }, // ...
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    // ...
  ],
};
