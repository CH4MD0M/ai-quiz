module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "780px",
      md: "960px",
      lg: "1400px",
    },
    extend: {
      keyframes: {
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.75s ease 0s 1",
      },
    },
  },
  plugins: [],
};
