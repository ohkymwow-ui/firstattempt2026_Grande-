module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#8b5cf6",
      },
      animation: {
        spin: "spin 1s linear infinite",
        fadeIn: "fadeIn 0.5s ease-out",
      },
      keyframes: {
        spin: {
          to: { transform: "rotate(360deg)" },
        },
        fadeIn: {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
